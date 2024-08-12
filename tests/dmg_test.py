from tests import build_test
from pyzzz.dmg import Combo
from pyzzz.model import *


def test_combo():
    from pyzzz.agents.ellen import Ellen

    # attacks = AttackList([Ellen.Final])
    # b = build.test_build_full()
    # b.collect_buffs()
    # combo = Combo(attacks, b)
    # combo.delta()
    # attacks = AttackList([Ellen.EX1, Ellen.A3])
    # b = build.test_build_full()
    # b.collect_buffs()
    # combo = Combo(attacks, b)
    # combo.delta()

    attacks = AttackList([Ellen.A1, Ellen.A2, Ellen.A3])
    b = build_test.full_ellen()
    b.collect_buffs()
    combo = Combo(attacks, b)
    combo.delta()

    # attacks = AttackList([Ellen.Chain])
    # b = build.test_build_full()
    # b.collect_buffs()
    # combo = Combo(attacks, b)
    # combo.delta()


def test_combo2():
    from pyzzz.agents.soukaku import Soukaku

    # attacks = AttackList([Soukaku.A1, Soukaku.A2, Soukaku.A3])
    attacks = AttackList([Soukaku.Dodge, Soukaku.A3])
    # attacks = AttackList([Soukaku.Chain])
    b = build_test.full_soukaku()
    b.collect_buffs()
    combo = Combo(attacks, b)
    combo.delta()


def test_combo3():
    from pyzzz.agents.lycaon import Lycaon

    attacks = AttackList([Lycaon.Chain])
    b = build_test.full_lycaon()
    b.collect_buffs()
    combo = Combo(attacks, b)
    combo.delta()


if __name__ == "__main__":
    test_combo2()
