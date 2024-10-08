import copy

from pyzzz import agents, weapons
from pyzzz.agents.agent import Agent
from pyzzz.buff import Buff
from pyzzz.discs import get_suit2_stat, get_suit4_buff
from pyzzz.model import *
from pyzzz.weapons import Weapon


@dataclass
class SummaryData:
    agent_name: str = ""
    agent_level: int = 60
    agent_asc: bool = False
    agent_rep: int = 0
    skill_levels: SkillLevels = field(default_factory=SkillLevels)

    weapon_name: str = ""
    weapon_level: int = 60
    weapon_rep: int = 1

    crit_ratio: float = 0.05
    crit_multi: float = 0.50
    green_atk: float = 0

    suit2: list[DiscKind] = field(default_factory=list)
    suit4: DiscKind | None = None
    disc4: StatKind = StatKind.CRIT_RATIO
    disc5: StatKind = StatKind.DMG_RATIO
    disc6: StatKind = StatKind.ATK_RATIO

    enemy_level: int = 60
    enemy_base: int = 60
    team: dict[str, dict[str, str]] = field(default_factory=dict)


@dataclass
class FullData:
    agent_name: str = ""
    agent_level: int = 60
    agent_asc: bool = False
    agent_rep: int = 0
    skill_levels: SkillLevels = field(default_factory=SkillLevels)

    weapon_name: str = ""
    weapon_level: int = 60
    weapon_rep: int = 1

    discs: DiscGroup = field(default_factory=DiscGroup)

    enemy_level: int = 60
    enemy_base: int = 60
    team: dict[str, dict[str, str]] = field(default_factory=dict)


class Build:

    def __init__(self):
        self.summary = False
        self.agent = Agent()
        self.weapon = Weapon()
        self.discs = DiscGroup()
        self.enemy_level = 60
        self.enemy_base = 60
        self.team: list[Agent] = []
        self.buffs: dict[str, Buff] = {}
        self.extra: list[StatValue] = []

    def build_team(self, team: list[Agent]):
        self.team = team

    def calc_static_agent(self):
        self.agent.set_weapon(self.weapon.data)
        self.agent.calc_static(self.discs, self.extra)
        return self

    def add_buff(self, b):
        self.buffs[b.source] = b

    def collect_buffs(self):
        self.buffs = {}
        self.discs.suit2_stats = [get_suit2_stat(k) for k in self.discs.suit2]

        if buf := get_suit4_buff(self.discs.suit4):
            self.add_buff(buf)

        for b in self.weapon.buffs():
            self.add_buff(b)

        for agent in self.team:
            for b in agent.buffs():
                self.add_buff(b)

    @staticmethod
    def from_summary(summary: SummaryData):
        b = Build()
        b.summary = True

        kw = dict(
            level=summary.agent_level,
            skill_levels=summary.skill_levels,
            repetition=summary.agent_rep,
        )
        if summary.agent_asc:
            kw["is_ascension"] = summary.agent_asc
        b.agent = agents.create_agent(
            summary.agent_name,
            **kw,
        )
        b.weapon = weapons.create_weapon(
            summary.weapon_name,
            level=summary.weapon_level,
            repetition=summary.weapon_rep,
        )
        disc = Disc(0, DiscKind.Summary, StatValue.create_empty())
        disc.secondaries.append(StatValue(summary.green_atk, StatKind.ATK_FLAT))
        b.discs.at(4).primary.kind = summary.disc4
        b.discs.at(5).primary.kind = summary.disc5
        b.discs.at(6).primary.kind = summary.disc6
        b.discs.make_summary(disc, summary.suit2, summary.suit4)

        b.agent.base.crit_ratio = summary.crit_ratio  # set fixed value
        b.agent.base.crit_multi = summary.crit_multi  # set fixed value
        b.weapon.data.primary.value = 0.0  # clear weapon primary

        b.agent.set_weapon(b.weapon.data)
        b.agent.calc_static(b.discs)

        b.enemy_level = summary.enemy_level
        b.enemy_base = summary.enemy_base
        team = [b.agent]
        for name, extra in summary.team.items():
            agent = agents.create_agent(name, **extra)
            team.append(agent)
        b.build_team(team)

        b.collect_buffs()

        return b

    @staticmethod
    def from_full(full: FullData):
        b = Build()
        kw = dict(
            level=full.agent_level,
            skill_levels=full.skill_levels,
            repetition=full.agent_rep,
        )
        if full.agent_asc:
            kw["is_ascension"] = full.agent_asc
        b.agent = agents.create_agent(
            full.agent_name,
            **kw,
        )
        b.weapon = weapons.create_weapon(
            full.weapon_name, level=full.weapon_level, repetition=full.weapon_rep
        )

        b.discs = full.discs
        b.discs.generate_suits()
        b.agent.set_weapon(b.weapon.data)
        b.agent.calc_static(b.discs)

        b.enemy_level = full.enemy_level
        b.enemy_base = full.enemy_base
        team = [b.agent]
        for name, extra in full.team.items():
            agent = agents.create_agent(name, **extra)
            team.append(agent)
        b.build_team(team)

        b.collect_buffs()
        return b

    def replace_extra(self, extra):
        self.extra = copy.deepcopy(extra)
        self.calc_static_agent()
        self.collect_buffs()  # XXX: remove me
        return self

    def replace_weapon(self, weapon):
        if self.summary:
            raise Exception("cannot replace weapon under summary mode")
        self.weapon = weapon
        self.calc_static_agent()
        self.collect_buffs()  # XXX: remove me
        return self

    def replace_disc(self, discs: list[Disc]):
        if self.summary:
            raise Exception("cannot replace disc under summary mode")
        if not discs:
            return
        for d in discs:
            self.discs.set(d)
        self.calc_static_agent()
        self.collect_buffs()  # XXX: remove me
        return self

    def update_agent_stats(self, level=None, skill_levels=None):
        self.agent.set_stats(level=level, skill_levels=skill_levels)
        self.calc_static_agent()
        self.collect_buffs()  # core passive buff
        return self

    def update_weapon_level(self, level):
        self.weapon.set_stats(level=level)
        self.calc_static_agent()
        return self

    def __str__(self):
        self.calc_static_agent()
        s = (
            f"Build:\n"
            + f"{self.agent.static}\n"
            + f"{self.agent.skill_levels}\n"
            + f"{self.weapon.data}\n"
            + f"{self.discs}\n"
        )
        if self.buffs:
            s += "Buffs:\n"
            for buff in self.buffs.values():
                s += f"\t{buff}\n"
        if self.extra:
            s += "Extra:\n"
            for extra in self.extra:
                s += f"\t{extra}\n"
        return s
