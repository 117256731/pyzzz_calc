from pyzzz import agents
from pyzzz.model import *


if __name__ == "__main__":
    agent = agents.Agent("Ellen", level=50, skill_levels=SkillLevels(4, 9, 9, 9, 9, 9))
    print(agent)

    agent = agents.Agent("Ellen", level=60)
    print(agent)

    agent = agents.Ellen()
    print(agent)

    agent = agents.Soukaku()
    print(agent)

    agent = agents.Lycaon()
    print(agent)
