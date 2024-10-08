const e = [
    { Rarity: 2, EnhanceMin: 0, EnhanceLimit: 10, StarRate: 0, RandRate: 0 },
    {
      Rarity: 2,
      EnhanceMin: 10,
      EnhanceLimit: 20,
      StarRate: 8922,
      RandRate: 3e3,
    },
    {
      Rarity: 2,
      EnhanceMin: 20,
      EnhanceLimit: 30,
      StarRate: 17844,
      RandRate: 6e3,
    },
    {
      Rarity: 2,
      EnhanceMin: 30,
      EnhanceLimit: 40,
      StarRate: 26766,
      RandRate: 9e3,
    },
    {
      Rarity: 2,
      EnhanceMin: 40,
      EnhanceLimit: 50,
      StarRate: 35688,
      RandRate: 12e3,
    },
    {
      Rarity: 2,
      EnhanceMin: 50,
      EnhanceLimit: 60,
      StarRate: 44610,
      RandRate: 15e3,
    },
    { Rarity: 3, EnhanceMin: 0, EnhanceLimit: 10, StarRate: 0, RandRate: 0 },
    {
      Rarity: 3,
      EnhanceMin: 10,
      EnhanceLimit: 20,
      StarRate: 8922,
      RandRate: 3e3,
    },
    {
      Rarity: 3,
      EnhanceMin: 20,
      EnhanceLimit: 30,
      StarRate: 17844,
      RandRate: 6e3,
    },
    {
      Rarity: 3,
      EnhanceMin: 30,
      EnhanceLimit: 40,
      StarRate: 26766,
      RandRate: 9e3,
    },
    {
      Rarity: 3,
      EnhanceMin: 40,
      EnhanceLimit: 50,
      StarRate: 35688,
      RandRate: 12e3,
    },
    {
      Rarity: 3,
      EnhanceMin: 50,
      EnhanceLimit: 60,
      StarRate: 44610,
      RandRate: 15e3,
    },
    { Rarity: 4, EnhanceMin: 0, EnhanceLimit: 10, StarRate: 0, RandRate: 0 },
    {
      Rarity: 4,
      EnhanceMin: 10,
      EnhanceLimit: 20,
      StarRate: 8922,
      RandRate: 3e3,
    },
    {
      Rarity: 4,
      EnhanceMin: 20,
      EnhanceLimit: 30,
      StarRate: 17844,
      RandRate: 6e3,
    },
    {
      Rarity: 4,
      EnhanceMin: 30,
      EnhanceLimit: 40,
      StarRate: 26766,
      RandRate: 9e3,
    },
    {
      Rarity: 4,
      EnhanceMin: 40,
      EnhanceLimit: 50,
      StarRate: 35688,
      RandRate: 12e3,
    },
    {
      Rarity: 4,
      EnhanceMin: 50,
      EnhanceLimit: 60,
      StarRate: 44610,
      RandRate: 15e3,
    },
  ],
  o = [
    { ID: 1, Name: "Attack", Icon: "IconAttack.png" },
    { ID: 2, Name: "Stun", Icon: "IconStun.png" },
    { ID: 3, Name: "Anomaly", Icon: "IconAnomaly.png" },
    { ID: 4, Name: "Support", Icon: "IconSupport.png" },
    { ID: 5, Name: "Defense", Icon: "IconDefense.png" },
  ],
  a = [
    {
      ItemID: 14102,
      Text: "Weapon_S_1021",
      BaseProperty: {
        Property: 12101,
        Value: 46,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 20103,
        Value: 960,
        Name: "CRIT Rate",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `A supercomputing W-Engine equipped with an enhanced motion monitoring feature, perfectly matching the fast reflexes and combat maneuvers of Cat Thirens. Nekomata has added a foldable knife to its casing. Despite claiming that this design is to facilitate her in battle, the knife has fresh mackerel stains smeared onto it...

<color=#959595>"Lots of people call me a clever clogs for doing this mod, but when you're out on the streets, you gotta put everything you can to good use: Every little trick, every little thought, every little hustle... And look! A little kitty!" — Nekomata, diverting attention away while secretly trying to fish out the listener's wallet</color>`,
      Abilities: [
        {
          WeaponID: 14102,
          Level: 1,
          AbilityName: "Metal Cat Claws",
          AbilityDes:
            "Increases <color=#f0d12b>Physical DMG</color> by <color=#2BAD00>20%</color>. The equipper's DMG increases by <color=#2BAD00>25%</color> when hitting the enemy from behind.",
        },
        {
          WeaponID: 14102,
          Level: 2,
          AbilityName: "Metal Cat Claws",
          AbilityDes:
            "Increases <color=#f0d12b>Physical DMG</color> by <color=#2BAD00>25%</color>. The equipper's DMG increases by <color=#2BAD00>31.5%</color> when hitting the enemy from behind.",
        },
        {
          WeaponID: 14102,
          Level: 3,
          AbilityName: "Metal Cat Claws",
          AbilityDes:
            "Increases <color=#f0d12b>Physical DMG</color> by <color=#2BAD00>30%</color>. The equipper's DMG increases by <color=#2BAD00>38%</color> when hitting the enemy from behind.",
        },
        {
          WeaponID: 14102,
          Level: 4,
          AbilityName: "Metal Cat Claws",
          AbilityDes:
            "Increases <color=#f0d12b>Physical DMG</color> by <color=#2BAD00>35%</color>. The equipper's DMG increases by <color=#2BAD00>44%</color> when hitting the enemy from behind.",
        },
        {
          WeaponID: 14102,
          Level: 5,
          AbilityName: "Metal Cat Claws",
          AbilityDes:
            "Increases <color=#f0d12b>Physical DMG</color> by <color=#2BAD00>40%</color>. The equipper's DMG increases by <color=#2BAD00>50%</color> when hitting the enemy from behind.",
        },
      ],
      Name: "Steel Cushion",
      Rarity: 4,
      Icon: "Weapon_S_1021.png",
    },
    {
      ItemID: 14104,
      Text: "Weapon_S_1041",
      BaseProperty: {
        Property: 12101,
        Value: 46,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1200,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `A violent Obsidian Division W-Engine forged with fire and filled with a forbidden fuel that has been reprocessed using Ether-technology. Its intense heat can be used to clear the entire battlefield. Rumor has it that its designer was exchanging W-Engine design ideas with Soldier 11 over dinner. After an hour spent enjoying extra spicy noodles, she decided to bring extra spicy revenge to her enemies.

<color=#959595>"I really like it. It's stable, efficient, and practical. The high temperature can clean the battle residue off my blade and even disinfect wounds when needed... Why are you sitting so far away?" — Soldier 11, introducing her W-Engine to her teammates</color>`,
      Abilities: [
        {
          WeaponID: 14104,
          Level: 1,
          AbilityName: "Scorching Breath",
          AbilityDes:
            "Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, or <color=#ffffff>Dodge Counter</color>, the equipper's ATK increases by <color=#2BAD00>3.5%</color> for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14104,
          Level: 2,
          AbilityName: "Scorching Breath",
          AbilityDes:
            "Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, or <color=#ffffff>Dodge Counter</color>, the equipper's ATK increases by <color=#2BAD00>4.4%</color> for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14104,
          Level: 3,
          AbilityName: "Scorching Breath",
          AbilityDes:
            "Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, or <color=#ffffff>Dodge Counter</color>, the equipper's ATK increases by <color=#2BAD00>5.2%</color> for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14104,
          Level: 4,
          AbilityName: "Scorching Breath",
          AbilityDes:
            "Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, or <color=#ffffff>Dodge Counter</color>, the equipper's ATK increases by <color=#2BAD00>6%</color> for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14104,
          Level: 5,
          AbilityName: "Scorching Breath",
          AbilityDes:
            "Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, or <color=#ffffff>Dodge Counter</color>, the equipper's ATK increases by <color=#2BAD00>7%</color> for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately.",
        },
      ],
      Name: "The Brimstone",
      Rarity: 4,
      Icon: "Weapon_S_1041.png",
    },
    {
      ItemID: 14110,
      Text: "Weapon_S_1101",
      BaseProperty: {
        Property: 12101,
        Value: 46,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 720,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: `This W-Engine is renowned for its ultra power. Modified by Koleda, its energy level has almost exceeded the safety limit. Although this W-Engine is entirely designed for damage output, and the Speedup and Blaze functions have been merged into one, this is precisely what Koleda wanted.

<color=#959595>"I've got a clear shot at your shins, you know? So you'd better think twice before saying I'm short, got it?" — Koleda, warning a rude business partner</color>`,
      Abilities: [
        {
          WeaponID: 14110,
          Level: 1,
          AbilityName: "Passionate Construction",
          AbilityDes: `While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.6</color>/s.
When using an <color=#ffffff>EX Special Attack</color>, the equipper's Impact is increased by <color=#2BAD00>10%</color> for 10s, stacking up to 2 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14110,
          Level: 2,
          AbilityName: "Passionate Construction",
          AbilityDes: `While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.75</color>/s.
When using an <color=#ffffff>EX Special Attack</color>, the equipper's Impact is increased by <color=#2BAD00>12.5%</color> for 10s, stacking up to 2 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14110,
          Level: 3,
          AbilityName: "Passionate Construction",
          AbilityDes: `While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.9</color>/s.
When using an <color=#ffffff>EX Special Attack</color>, the equipper's Impact is increased by <color=#2BAD00>15%</color> for 10s, stacking up to 2 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14110,
          Level: 4,
          AbilityName: "Passionate Construction",
          AbilityDes: `While off-field, the equipper's Energy Regen increases by <color=#2BAD00>1.05</color>/s.
When using an <color=#ffffff>EX Special Attack</color>, the equipper's Impact is increased by <color=#2BAD00>17.5%</color> for 10s, stacking up to 2 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14110,
          Level: 5,
          AbilityName: "Passionate Construction",
          AbilityDes: `While off-field, the equipper's Energy Regen increases by <color=#2BAD00>1.2</color>/s.
When using an <color=#ffffff>EX Special Attack</color>, the equipper's Impact is increased by <color=#2BAD00>20%</color> for 10s, stacking up to 2 times. The duration of each stack is calculated separately.`,
        },
      ],
      Name: "Hellfire Gears",
      Rarity: 4,
      Icon: "Weapon_S_1101.png",
    },
    {
      ItemID: 14114,
      Text: "Weapon_S_1141",
      BaseProperty: {
        Property: 12101,
        Value: 46,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 720,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: `This special W-Engine has the capability to create extreme low temperatures. Its radiator opening was designed with an eerie animal teeth decoration and often drips condensation. After Lycaon's improvements, its rough appearance has become much more refined and elegant, and the opening is now utilized to store envelopes and other keepsakes.

<color=#959595>"Manners aren't a leash for wildness; it enhances it before it's set free." — Lycaon, speaking gently during a tea party</color>`,
      Abilities: [
        {
          WeaponID: 14114,
          Level: 1,
          AbilityName: "Binding Chains",
          AbilityDes:
            "When an attack hits an enemy, DMG and Daze from <color=#ffffff>Basic Attacks</color> increase by <color=#2BAD00>6%</color> for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14114,
          Level: 2,
          AbilityName: "Binding Chains",
          AbilityDes:
            "When an attack hits an enemy, DMG and Daze from <color=#ffffff>Basic Attacks</color> increase by <color=#2BAD00>7.5%</color> for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14114,
          Level: 3,
          AbilityName: "Binding Chains",
          AbilityDes:
            "When an attack hits an enemy, DMG and Daze from <color=#ffffff>Basic Attacks</color> increase by <color=#2BAD00>9%</color> for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14114,
          Level: 4,
          AbilityName: "Binding Chains",
          AbilityDes:
            "When an attack hits an enemy, DMG and Daze from <color=#ffffff>Basic Attacks</color> increase by <color=#2BAD00>10.5%</color> for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 14114,
          Level: 5,
          AbilityName: "Binding Chains",
          AbilityDes:
            "When an attack hits an enemy, DMG and Daze from <color=#ffffff>Basic Attacks</color> increase by <color=#2BAD00>12%</color> for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately.",
        },
      ],
      Name: "The Restrained",
      Rarity: 4,
      Icon: "Weapon_S_1141.png",
    },
    {
      ItemID: 14118,
      Text: "Weapon_S_1181",
      BaseProperty: {
        Property: 12101,
        Value: 46,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 23103,
        Value: 960,
        Name: "PEN Ratio",
        ShowForm: "{0:0.#%}",
      },
      Type: 3,
      Desc: `Embedded with a supercomputer core, this latest-model W-Engine can compile operating code for machines at an astonishing speed, or quickly collect battlefield data to provide support for the whole squad. Of course, for Grace, this W-Engine is just a little toy for her to communicate with her "silicon-based children."

<color=#959595>"Looking carefully... you're handsome in your own way! Oh, it says in the manual that once it's sealed, it shouldn't be opened... Hmmm... Well, how would we know if we don't give it a try?!" — Grace, suddenly enthusiastic while holding the engine in her hand</color>`,
      Abilities: [
        {
          WeaponID: 14118,
          Level: 1,
          AbilityName: "Data Flood",
          AbilityDes: `Increases ATK by <color=#2BAD00>12%</color>.
When using a <color=#ffffff>Special Attack</color> or <color=#ffffff>EX Special Attack</color>, the equipper's Anomaly Proficiency is increased by <color=#2BAD00>25</color> for 8s, stacking up to 3 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14118,
          Level: 2,
          AbilityName: "Data Flood",
          AbilityDes: `Increases ATK by <color=#2BAD00>15%</color>.
When using a <color=#ffffff>Special Attack</color> or <color=#ffffff>EX Special Attack</color>, the equipper's Anomaly Proficiency is increased by <color=#2BAD00>31</color> for 8s, stacking up to 3 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14118,
          Level: 3,
          AbilityName: "Data Flood",
          AbilityDes: `Increases ATK by <color=#2BAD00>18%</color>.
When using a <color=#ffffff>Special Attack</color> or <color=#ffffff>EX Special Attack</color>, the equipper's Anomaly Proficiency is increased by <color=#2BAD00>37</color> for 8s, stacking up to 3 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14118,
          Level: 4,
          AbilityName: "Data Flood",
          AbilityDes: `Increases ATK by <color=#2BAD00>21%</color>.
When using a <color=#ffffff>Special Attack</color> or <color=#ffffff>EX Special Attack</color>, the equipper's Anomaly Proficiency is increased by <color=#2BAD00>43</color> for 8s, stacking up to 3 times. The duration of each stack is calculated separately.`,
        },
        {
          WeaponID: 14118,
          Level: 5,
          AbilityName: "Data Flood",
          AbilityDes: `Increases ATK by <color=#2BAD00>24%</color>.
When using a <color=#ffffff>Special Attack</color> or <color=#ffffff>EX Special Attack</color>, the equipper's Anomaly Proficiency is increased by <color=#2BAD00>50</color> for 8s, stacking up to 3 times. The duration of each stack is calculated separately.`,
        },
      ],
      Name: "Fusion Compiler",
      Rarity: 4,
      Icon: "Weapon_S_1181.png",
    },
    {
      ItemID: 14119,
      Text: "Weapon_S_1191",
      BaseProperty: {
        Property: 12101,
        Value: 48,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 20103,
        Value: 960,
        Name: "CRIT Rate",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `This high-power W-Engine has the capability to rapidly lower the temperature of the environment, allowing it to instantly freeze nearby objects. Although it is an excellent tactical W-Engine due to its efficient freezing and high damage output, Ellen primarily uses it to make frappes.

<color=#959595>"I want to bring it to school, especially in the summer. But Lycaon and Rina won't let me... So annoying." — Ellen, shaking her head while eating ice</color>`,
      Abilities: [
        {
          WeaponID: 14119,
          Level: 1,
          AbilityName: "Lord of Seas",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>25%</color>. Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, the equipper`s CRIT Rate increases by <color=#2BAD00>10%</color> for 8s. When dealing <color=#98eff0>Ice DMG</color> with a <color=#ffffff>Dash Attack</color>, the equipper`s CRIT Rate increases by an additional <color=#2BAD00>10%</color> for 15s. The duration of each effect is calculated separately.",
        },
        {
          WeaponID: 14119,
          Level: 2,
          AbilityName: "Lord of Seas",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>31.5%</color>. Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, the equipper`s CRIT Rate increases by <color=#2BAD00>12.5%</color> for 8s. When dealing <color=#98eff0>Ice DMG</color> with a <color=#ffffff>Dash Attack</color>, the equipper`s CRIT Rate increases by an additional <color=#2BAD00>12.5%</color> for 15s. The duration of each effect is calculated separately.",
        },
        {
          WeaponID: 14119,
          Level: 3,
          AbilityName: "Lord of Seas",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>38%</color>. Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, the equipper`s CRIT Rate increases by <color=#2BAD00>15%</color> for 8s. When dealing <color=#98eff0>Ice DMG</color> with a <color=#ffffff>Dash Attack</color>, the equipper`s CRIT Rate increases by an additional <color=#2BAD00>15%</color> for 15s. The duration of each effect is calculated separately.",
        },
        {
          WeaponID: 14119,
          Level: 4,
          AbilityName: "Lord of Seas",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>44.5%</color>. Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, the equipper`s CRIT Rate increases by <color=#2BAD00>17.5%</color> for 8s. When dealing <color=#98eff0>Ice DMG</color> with a <color=#ffffff>Dash Attack</color>, the equipper`s CRIT Rate increases by an additional <color=#2BAD00>17.5%</color> for 15s. The duration of each effect is calculated separately.",
        },
        {
          WeaponID: 14119,
          Level: 5,
          AbilityName: "Lord of Seas",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>50%</color>. Upon hitting an enemy with a <color=#ffffff>Basic Attack</color>, the equipper`s CRIT Rate increases by <color=#2BAD00>20%</color> for 8s. When dealing <color=#98eff0>Ice DMG</color> with a <color=#ffffff>Dash Attack</color>, the equipper`s CRIT Rate increases by an additional <color=#2BAD00>20%</color> for 15s. The duration of each effect is calculated separately.",
        },
      ],
      Name: "Deep Sea Visitor",
      Rarity: 4,
      Icon: "Weapon_S_1191.png",
    },
    {
      ItemID: 14121,
      Text: "Weapon_S_1211",
      BaseProperty: {
        Property: 12101,
        Value: 46,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 23103,
        Value: 960,
        Name: "PEN Ratio",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: `A special W-Engine with multiple layers embedded inside. It contains a special Ether charging layer that can quickly recharge special-model Bangboo and custom-made combat equipment. Even though this W-Engine looks like a cruel confinement chamber, Rina's Bangboo seem to enjoy sneaking in there to recharge their batteries. They even treat resting inside as a cozy reward.

<color=#959595>"Shhh... The two little ones are resting; if they're woken suddenly they'll be sure to cause a ruckus. Let's avoid making any noise while we enjoy our tea." — Rina, giving a gentle reminder as she serves tea to friends</color>`,
      Abilities: [
        {
          WeaponID: 14121,
          Level: 1,
          AbilityName: "Punishment",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.6</color>/s. Attacks from the equipper enhance the squad's DMG against a struck target by <color=#2BAD00>10%</color> for 3 seconds. During this period, this effect is further increased by <color=#2BAD00>1.7%</color> every 0.5s, up to a maximum additional increase of <color=#2BAD00>10.2%</color>. Repeated triggers only refresh its duration without refreshing the DMG increase effect. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14121,
          Level: 2,
          AbilityName: "Punishment",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.75</color>/s. Attacks from the equipper enhance the squad's DMG against a struck target by <color=#2BAD00>12.5%</color> for 3 seconds. During this period, this effect is further increased by <color=#2BAD00>2%</color> every 0.5s, up to a maximum additional increase of <color=#2BAD00>12%</color>. Repeated triggers only refresh its duration without refreshing the DMG increase effect. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14121,
          Level: 3,
          AbilityName: "Punishment",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.9</color>/s. Attacks from the equipper enhance the squad's DMG against a struck target by <color=#2BAD00>15%</color> for 3 seconds. During this period, this effect is further increased by <color=#2BAD00>2.5%</color> every 0.5s, up to a maximum additional increase of <color=#2BAD00>15%</color>. Repeated triggers only refresh its duration without refreshing the DMG increase effect. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14121,
          Level: 4,
          AbilityName: "Punishment",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>1.05</color>/s. Attacks from the equipper enhance the squad's DMG against a struck target by <color=#2BAD00>17.5%</color> for 3 seconds. During this period, this effect is further increased by <color=#2BAD00>3%</color> every 0.5s, up to a maximum additional increase of <color=#2BAD00>18%</color>. Repeated triggers only refresh its duration without refreshing the DMG increase effect. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14121,
          Level: 5,
          AbilityName: "Punishment",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>1.2</color>/s. Attacks from the equipper enhance the squad's DMG against a struck target by <color=#2BAD00>20%</color> for 3 seconds. During this period, this effect is further increased by <color=#2BAD00>3.3%</color> every 0.5s, up to a maximum additional increase of <color=#2BAD00>19.8%</color>. Repeated triggers only refresh its duration without refreshing the DMG increase effect. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Weeping Cradle",
      Rarity: 4,
      Icon: "Weapon_S_1211.png",
    },
    {
      ItemID: 14124,
      Text: "Weapon_S_1241",
      BaseProperty: {
        Property: 12101,
        Value: 48,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 21103,
        Value: 1920,
        Name: "CRIT DMG",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `The latest tactical W-Engine used by Public Security's elite Hollow squads. It uses a powerful Ether energy source to supply all combat equipment with explosive power for a short period of time. Although the W-Engines of many elite squad members often suffer from prolonged combat, Zhu Yuan's is in perfect condition. She treats it with utmost care and carefully maintains it, keeping it looking completely brand new.

<color=#959595>"Non-woven fabric, brush, lubricant, rust remover... alright, ready to go. Timer... starting now!" — Zhu Yuan, timing herself as she starts maintenance, aiming to beat her previous record</color>`,
      Abilities: [
        {
          WeaponID: 14124,
          Level: 1,
          AbilityName: "Security Patrol",
          AbilityDes:
            "Increases CRIT Rate by <color=#2BAD00>15%</color>. Launching an <color=#ffffff>EX Special Attack</color> grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's <color=#ffffff>Basic Attack</color> deals <color=#fe437e>Ether DMG</color>, consumes a Charge stack and increases the skill's DMG by <color=#2BAD00>35%</color>.",
        },
        {
          WeaponID: 14124,
          Level: 2,
          AbilityName: "Security Patrol",
          AbilityDes:
            "Increases CRIT Rate by <color=#2BAD00>18.8%</color>. Launching an <color=#ffffff>EX Special Attack</color> grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's <color=#ffffff>Basic Attack</color> deals <color=#fe437e>Ether DMG</color>, consumes a Charge stack and increases the skill's DMG by <color=#2BAD00>43.5%</color>.",
        },
        {
          WeaponID: 14124,
          Level: 3,
          AbilityName: "Security Patrol",
          AbilityDes:
            "Increases CRIT Rate by <color=#2BAD00>22.6%</color>. Launching an <color=#ffffff>EX Special Attack</color> grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's <color=#ffffff>Basic Attack</color> deals <color=#fe437e>Ether DMG</color>, consumes a Charge stack and increases the skill's DMG by <color=#2BAD00>52%</color>.",
        },
        {
          WeaponID: 14124,
          Level: 4,
          AbilityName: "Security Patrol",
          AbilityDes:
            "Increases CRIT Rate by <color=#2BAD00>26.4%</color>. Launching an <color=#ffffff>EX Special Attack</color> grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's <color=#ffffff>Basic Attack</color> deals <color=#fe437e>Ether DMG</color>, consumes a Charge stack and increases the skill's DMG by <color=#2BAD00>60.5%</color>.",
        },
        {
          WeaponID: 14124,
          Level: 5,
          AbilityName: "Security Patrol",
          AbilityDes:
            "Increases CRIT Rate by <color=#2BAD00>30%</color>. Launching an <color=#ffffff>EX Special Attack</color> grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's <color=#ffffff>Basic Attack</color> deals <color=#fe437e>Ether DMG</color>, consumes a Charge stack and increases the skill's DMG by <color=#2BAD00>70%</color>.",
        },
      ],
      Name: "Riot Suppressor Mark VI",
      Rarity: 4,
      Icon: "Weapon_S_1241.png",
    },
    {
      ItemID: 14125,
      Text: "Weapon_S_1251",
      BaseProperty: {
        Property: 12101,
        Value: 48,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 720,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: `A custom stun W-Engine made for an Automaton referencing the combat style and abilities of one. Energy is stored within, then lashes outwards upon conversion. The texture seeks to imitate fine artistry that was once highly sought after in ancient civilizations: Burn to procure what is sleek and elegant, shatter to create what is unyielding and sharp; this heat-proof pot bears a sacred bird shape with, as its name suggests, a unique pattern of ice-cracked celadon... but actually that pattern was drawn on.

<color=#959595>"It fares well in preserving temperature, and I can drink hot water whenever I need even in a Hollow." —Qingyi, giving her honest and carefully contemplated review</color>`,
      Abilities: [
        {
          WeaponID: 14125,
          Level: 1,
          AbilityName: "Ringing Melody",
          AbilityDes:
            "When a <color=#ffffff>Basic Attack</color> hits an enemy, gain 1 stack of <color=#ffffff>Tea-riffic</color>. Each stack of <color=#ffffff>Tea-riffic</color> increases the user's Impact by <color=#2BAD00>0.7%</color>, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring <color=#ffffff>Tea-riffic</color>, if the equipper possesses stacks of <color=#ffffff>Tea-riffic</color> greater than or equal to 15, all squad members' DMG is increased by <color=#2BAD00>20%</color> for 10s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14125,
          Level: 2,
          AbilityName: "Ringing Melody",
          AbilityDes:
            "When a <color=#ffffff>Basic Attack</color> hits an enemy, gain 1 stack of <color=#ffffff>Tea-riffic</color>. Each stack of <color=#ffffff>Tea-riffic</color> increases the user's Impact by <color=#2BAD00>0.88%</color>, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring <color=#ffffff>Tea-riffic</color>, if the equipper possesses stacks of <color=#ffffff>Tea-riffic</color> greater than or equal to 15, all squad members' DMG is increased by <color=#2BAD00>23%</color> for 10s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14125,
          Level: 3,
          AbilityName: "Ringing Melody",
          AbilityDes:
            "When a <color=#ffffff>Basic Attack</color> hits an enemy, gain 1 stack of <color=#ffffff>Tea-riffic</color>. Each stack of <color=#ffffff>Tea-riffic</color> increases the user's Impact by <color=#2BAD00>1.05%</color>, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring <color=#ffffff>Tea-riffic</color>, if the equipper possesses stacks of <color=#ffffff>Tea-riffic</color> greater than or equal to 15, all squad members' DMG is increased by <color=#2BAD00>26%</color> for 10s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14125,
          Level: 4,
          AbilityName: "Ringing Melody",
          AbilityDes:
            "When a <color=#ffffff>Basic Attack</color> hits an enemy, gain 1 stack of <color=#ffffff>Tea-riffic</color>. Each stack of <color=#ffffff>Tea-riffic</color> increases the user's Impact by <color=#2BAD00>1.22%</color>, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring <color=#ffffff>Tea-riffic</color>, if the equipper possesses stacks of <color=#ffffff>Tea-riffic</color> greater than or equal to 15, all squad members' DMG is increased by <color=#2BAD00>29%</color> for 10s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14125,
          Level: 5,
          AbilityName: "Ringing Melody",
          AbilityDes:
            "When a <color=#ffffff>Basic Attack</color> hits an enemy, gain 1 stack of <color=#ffffff>Tea-riffic</color>. Each stack of <color=#ffffff>Tea-riffic</color> increases the user's Impact by <color=#2BAD00>1.4%</color>, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring <color=#ffffff>Tea-riffic</color>, if the equipper possesses stacks of <color=#ffffff>Tea-riffic</color> greater than or equal to 15, all squad members' DMG is increased by <color=#2BAD00>32%</color> for 10s. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Ice-Jade Teapot",
      Rarity: 4,
      Icon: "Weapon_S_1251.png",
    },
    {
      ItemID: 14126,
      Text: "Weapon_S_1261",
      BaseProperty: {
        Property: 12101,
        Value: 48,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 31203,
        Value: 36,
        Name: "Anomaly Proficiency",
        ShowForm: "{0:0}",
      },
      Type: 3,
      Desc: `A deadly W-Engine from unknown sources, modified personally by Jane Doe with the intent to deal severe physical damage and Anomaly. The power circulation system within ensures the affliction of Anomalies and the edges of the exterior have been honed until they're razor-sharp to inflict unexpected tearing damage.

<color=#959595>"What, am I meant to adhere to duel ettiquete with an Ethereal? Isn't it polite to end its pain in the quickest way possible?" —Jane, in response to "aren't your combat techniques a little too cruel"</color>`,
      Abilities: [
        {
          WeaponID: 14126,
          Level: 1,
          AbilityName: "Indulge in the Hunt",
          AbilityDes:
            "Upon activating a <color=#ffffff>Dash Attack</color>, gain 1 stack of <color=#ffffff>Predatory Instinct</color>. Each stack of <color=#ffffff>Predatory Instinct</color> increases the equipper's Physical DMG by <color=#2BAD00>12%</color> for 8s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering <color=#ffffff>Perfect Dodge</color>, gain 3 stacks of <color=#ffffff>Predatory Instinct</color>. While <color=#ffffff>Predatory Instinct</color> is at maximum stacks, the equipper's Anomaly Buildup Rate increases by <color=#2BAD00>40%</color>.",
        },
        {
          WeaponID: 14126,
          Level: 2,
          AbilityName: "Indulge in the Hunt",
          AbilityDes:
            "Upon activating a <color=#ffffff>Dash Attack</color>, gain 1 stack of <color=#ffffff>Predatory Instinct</color>. Each stack of <color=#ffffff>Predatory Instinct</color> increases the equipper's Physical DMG by <color=#2BAD00>15%</color> for 8s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering <color=#ffffff>Perfect Dodge</color>, gain 3 stacks of <color=#ffffff>Predatory Instinct</color>. While <color=#ffffff>Predatory Instinct</color> is at maximum stacks, the equipper's Anomaly Buildup Rate increases by <color=#2BAD00>50%</color>.",
        },
        {
          WeaponID: 14126,
          Level: 3,
          AbilityName: "Indulge in the Hunt",
          AbilityDes:
            "Upon activating a <color=#ffffff>Dash Attack</color>, gain 1 stack of <color=#ffffff>Predatory Instinct</color>. Each stack of <color=#ffffff>Predatory Instinct</color> increases the equipper's Physical DMG by <color=#2BAD00>18%</color> for 8s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering <color=#ffffff>Perfect Dodge</color>, gain 3 stacks of <color=#ffffff>Predatory Instinct</color>. While <color=#ffffff>Predatory Instinct</color> is at maximum stacks, the equipper's Anomaly Buildup Rate increases by <color=#2BAD00>60%</color>.",
        },
        {
          WeaponID: 14126,
          Level: 4,
          AbilityName: "Indulge in the Hunt",
          AbilityDes:
            "Upon activating a <color=#ffffff>Dash Attack</color>, gain 1 stack of <color=#ffffff>Predatory Instinct</color>. Each stack of <color=#ffffff>Predatory Instinct</color> increases the equipper's Physical DMG by <color=#2BAD00>21%</color> for 8s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering <color=#ffffff>Perfect Dodge</color>, gain 3 stacks of <color=#ffffff>Predatory Instinct</color>. While <color=#ffffff>Predatory Instinct</color> is at maximum stacks, the equipper's Anomaly Buildup Rate increases by <color=#2BAD00>70%</color>.",
        },
        {
          WeaponID: 14126,
          Level: 5,
          AbilityName: "Indulge in the Hunt",
          AbilityDes:
            "Upon activating a <color=#ffffff>Dash Attack</color>, gain 1 stack of <color=#ffffff>Predatory Instinct</color>. Each stack of <color=#ffffff>Predatory Instinct</color> increases the equipper's Physical DMG by <color=#2BAD00>24%</color> for 8s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering <color=#ffffff>Perfect Dodge</color>, gain 3 stacks of <color=#ffffff>Predatory Instinct</color>. While <color=#ffffff>Predatory Instinct</color> is at maximum stacks, the equipper's Anomaly Buildup Rate increases by <color=#2BAD00>80%</color>.",
        },
      ],
      Name: "Sharpened Stinger",
      Rarity: 4,
      Icon: "Weapon_S_1261.png",
    },
    {
      ItemID: 13001,
      Text: "Weapon_A_Common_01",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `A custom-made W-Engine designed for street music lovers. It sacrifices cooling components to make space for high-end speaker modules, ensuring your fans, both Ethereal and human, hear your every word.
——From the streets to the Hollows, superstars are never short of flowers and applause. The bars they spit are so flaming hot, they add the perfect heat to any battlefield.`,
      Abilities: [
        {
          WeaponID: 13001,
          Level: 1,
          AbilityName: "Flaming Bars",
          AbilityDes:
            "Whenever a squad member launches a <color=#ffffff>Chain Attack</color>, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own <color=#ffffff>Ultimate</color>, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by <color=#2BAD00>15%</color>.",
        },
        {
          WeaponID: 13001,
          Level: 2,
          AbilityName: "Flaming Bars",
          AbilityDes:
            "Whenever a squad member launches a <color=#ffffff>Chain Attack</color>, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own <color=#ffffff>Ultimate</color>, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by <color=#2BAD00>17.2%</color>.",
        },
        {
          WeaponID: 13001,
          Level: 3,
          AbilityName: "Flaming Bars",
          AbilityDes:
            "Whenever a squad member launches a <color=#ffffff>Chain Attack</color>, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own <color=#ffffff>Ultimate</color>, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by <color=#2BAD00>19.5%</color>.",
        },
        {
          WeaponID: 13001,
          Level: 4,
          AbilityName: "Flaming Bars",
          AbilityDes:
            "Whenever a squad member launches a <color=#ffffff>Chain Attack</color>, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own <color=#ffffff>Ultimate</color>, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by <color=#2BAD00>21.7%</color>.",
        },
        {
          WeaponID: 13001,
          Level: 5,
          AbilityName: "Flaming Bars",
          AbilityDes:
            "Whenever a squad member launches a <color=#ffffff>Chain Attack</color>, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own <color=#ffffff>Ultimate</color>, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by <color=#2BAD00>24%</color>.",
        },
      ],
      Name: "Street Superstar",
      Rarity: 3,
      Icon: "Weapon_A_Common_01.png",
    },
    {
      ItemID: 13002,
      Text: "Weapon_A_Common_02",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 23103,
        Value: 800,
        Name: "PEN Ratio",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: `A special W-Engine equipped with a high-speed camera module. The best choice for in-Hollow photography enthusiasts. It captures every touching moment spent beating up your Ethereal friends, as long as you have a free hand to press the shutter.
P.S. The internal optical components have not undergone anti-corruption treatment. Please do not lose the warranty form.`,
      Abilities: [
        {
          WeaponID: 13002,
          Level: 1,
          AbilityName: "Say Cheese",
          AbilityDes:
            "Any squad members' <color=#ffffff>Dodge Counter</color>, <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Assist Attack</color>, or <color=#ffffff>Chain Attack</color> respectively generates <color=#2BAD00>20</color>/<color=#2BAD00>25</color>/<color=#2BAD00>30</color>/<color=#2BAD00>35</color> more Decibels and generates <color=#2BAD00>0.7</color> Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13002,
          Level: 2,
          AbilityName: "Say Cheese",
          AbilityDes:
            "Any squad members' <color=#ffffff>Dodge Counter</color>, <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Assist Attack</color>, or <color=#ffffff>Chain Attack</color> respectively generates <color=#2BAD00>23</color>/<color=#2BAD00>28.5</color>/<color=#2BAD00>34.5</color>/<color=#2BAD00>40</color> more Decibels and generates <color=#2BAD00>0.8</color> Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13002,
          Level: 3,
          AbilityName: "Say Cheese",
          AbilityDes:
            "Any squad members' <color=#ffffff>Dodge Counter</color>, <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Assist Attack</color>, or <color=#ffffff>Chain Attack</color> respectively generates <color=#2BAD00>26</color>/<color=#2BAD00>32</color>/<color=#2BAD00>39</color>/<color=#2BAD00>45</color> more Decibels and generates <color=#2BAD00>0.9</color> Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13002,
          Level: 4,
          AbilityName: "Say Cheese",
          AbilityDes:
            "Any squad members' <color=#ffffff>Dodge Counter</color>, <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Assist Attack</color>, or <color=#ffffff>Chain Attack</color> respectively generates <color=#2BAD00>29</color>/<color=#2BAD00>35.5</color>/<color=#2BAD00>43.5</color>/<color=#2BAD00>50</color> more Decibels and generates <color=#2BAD00>1</color> Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13002,
          Level: 5,
          AbilityName: "Say Cheese",
          AbilityDes:
            "Any squad members' <color=#ffffff>Dodge Counter</color>, <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Assist Attack</color>, or <color=#ffffff>Chain Attack</color> respectively generates <color=#2BAD00>32</color>/<color=#2BAD00>40</color>/<color=#2BAD00>48</color>/<color=#2BAD00>55</color> more Decibels and generates <color=#2BAD00>1.1</color> Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Slice of Time",
      Rarity: 3,
      Icon: "Weapon_A_Common_02.png",
    },
    {
      ItemID: 13003,
      Text: "Weapon_A_Common_03",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 31203,
        Value: 30,
        Name: "Anomaly Proficiency",
        ShowForm: "{0:0}",
      },
      Type: 3,
      Desc: "A consumer-class W-Engine launched by an exotic pet fan club to promote pet culture. It used to be a popular model until three customers' fingers, a staff member, and half a Bangboo disappeared into a Gourmet's big mouth. Ether blocks generated by the mouth module can rapidly devour substances. Please avoid putting your head and limbs inside.",
      Abilities: [
        {
          WeaponID: 13003,
          Level: 1,
          AbilityName: "Dinner's Ready!",
          AbilityDes:
            "For every 10 Energy consumed, the equipper gains a buff that increases ATK by <color=#2BAD00>2.5%</color> for 10s, stacking up to 10 times. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13003,
          Level: 2,
          AbilityName: "Dinner's Ready!",
          AbilityDes:
            "For every 10 Energy consumed, the equipper gains a buff that increases ATK by <color=#2BAD00>2.8%</color> for 10s, stacking up to 10 times. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13003,
          Level: 3,
          AbilityName: "Dinner's Ready!",
          AbilityDes:
            "For every 10 Energy consumed, the equipper gains a buff that increases ATK by <color=#2BAD00>3.2%</color> for 10s, stacking up to 10 times. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13003,
          Level: 4,
          AbilityName: "Dinner's Ready!",
          AbilityDes:
            "For every 10 Energy consumed, the equipper gains a buff that increases ATK by <color=#2BAD00>3.6%</color> for 10s, stacking up to 10 times. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13003,
          Level: 5,
          AbilityName: "Dinner's Ready!",
          AbilityDes:
            "For every 10 Energy consumed, the equipper gains a buff that increases ATK by <color=#2BAD00>4%</color> for 10s, stacking up to 10 times. The duration of each stack is calculated separately.",
        },
      ],
      Name: "Rainforest Gourmet",
      Rarity: 3,
      Icon: "Weapon_A_Common_03.png",
    },
    {
      ItemID: 13004,
      Text: "Weapon_A_Common_04",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: "A damage-type W-Engine made of special Etheric matter. When its operator is attacked, it builds up energy and boosts its damage output. Although it does not grant the operator the power to transform into a Starlight Knight, it provides a surge of courage when the operator is in dire situations.",
      Abilities: [
        {
          WeaponID: 13004,
          Level: 1,
          AbilityName: "Knight's Combo",
          AbilityDes:
            "Launching a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Quick Assist</color> increases the equipper's ATK by <color=#2BAD00>12%</color> for 12s.",
        },
        {
          WeaponID: 13004,
          Level: 2,
          AbilityName: "Knight's Combo",
          AbilityDes:
            "Launching a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Quick Assist</color> increases the equipper's ATK by <color=#2BAD00>13.8%</color> for 12s.",
        },
        {
          WeaponID: 13004,
          Level: 3,
          AbilityName: "Knight's Combo",
          AbilityDes:
            "Launching a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Quick Assist</color> increases the equipper's ATK by <color=#2BAD00>15.6%</color> for 12s.",
        },
        {
          WeaponID: 13004,
          Level: 4,
          AbilityName: "Knight's Combo",
          AbilityDes:
            "Launching a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Quick Assist</color> increases the equipper's ATK by <color=#2BAD00>17.4%</color> for 12s.",
        },
        {
          WeaponID: 13004,
          Level: 5,
          AbilityName: "Knight's Combo",
          AbilityDes:
            "Launching a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Quick Assist</color> increases the equipper's ATK by <color=#2BAD00>19.2%</color> for 12s.",
        },
      ],
      Name: "Starlight Engine",
      Rarity: 3,
      Icon: "Weapon_A_Common_04.png",
    },
    {
      ItemID: 13005,
      Text: "Weapon_A_Common_05",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 2e3,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: "This high-power W-Engine boasts a cutting-edge energy conversion device that collects heat from its surroundings and supplies it to the steamer, making it easy for the operator to cook or heat up objects. This makes it a perfect choice for Hollow explorers. However... please be careful when using it to avoid burns.",
      Abilities: [
        {
          WeaponID: 13005,
          Level: 1,
          AbilityName: "Thick Broth",
          AbilityDes:
            "For every 10 Energy accumulated, the equipper's Impact is increased by <color=#2BAD00>2%</color>, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13005,
          Level: 2,
          AbilityName: "Thick Broth",
          AbilityDes:
            "For every 10 Energy accumulated, the equipper's Impact is increased by <color=#2BAD00>2.3%</color>, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13005,
          Level: 3,
          AbilityName: "Thick Broth",
          AbilityDes:
            "For every 10 Energy accumulated, the equipper's Impact is increased by <color=#2BAD00>2.6%</color>, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13005,
          Level: 4,
          AbilityName: "Thick Broth",
          AbilityDes:
            "For every 10 Energy accumulated, the equipper's Impact is increased by <color=#2BAD00>2.9%</color>, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13005,
          Level: 5,
          AbilityName: "Thick Broth",
          AbilityDes:
            "For every 10 Energy accumulated, the equipper's Impact is increased by <color=#2BAD00>3.2%</color>, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately.",
        },
      ],
      Name: "Steam Oven",
      Rarity: 3,
      Icon: "Weapon_A_Common_05.png",
    },
    {
      ItemID: 13006,
      Text: "Weapon_A_Common_06",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 600,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: 'A special W-Engine whose outer shell is made of composite Etheric matter that effectively absorb incoming impacts in combat and turn it against the enemy. Rumors suggest that its prototype was crafted by a legendary Hollow explorer, and despite its ancient appearance, it continues to run smoothly. This W-Engine is literally an "old timer" in the field of W-Engines.',
      Abilities: [
        {
          WeaponID: 13006,
          Level: 1,
          AbilityName: "Behemoth Hunter",
          AbilityDes:
            "When the target's HP is no lower than 50%, the equipper inflicts <color=#2BAD00>10%</color> more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by <color=#2BAD00>10%</color>.",
        },
        {
          WeaponID: 13006,
          Level: 2,
          AbilityName: "Behemoth Hunter",
          AbilityDes:
            "When the target's HP is no lower than 50%, the equipper inflicts <color=#2BAD00>11.5%</color> more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by <color=#2BAD00>11.5%</color>.",
        },
        {
          WeaponID: 13006,
          Level: 3,
          AbilityName: "Behemoth Hunter",
          AbilityDes:
            "When the target's HP is no lower than 50%, the equipper inflicts <color=#2BAD00>13%</color> more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by <color=#2BAD00>13%</color>.",
        },
        {
          WeaponID: 13006,
          Level: 4,
          AbilityName: "Behemoth Hunter",
          AbilityDes:
            "When the target's HP is no lower than 50%, the equipper inflicts <color=#2BAD00>14.5%</color> more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by <color=#2BAD00>14.5%</color>.",
        },
        {
          WeaponID: 13006,
          Level: 5,
          AbilityName: "Behemoth Hunter",
          AbilityDes:
            "When the target's HP is no lower than 50%, the equipper inflicts <color=#2BAD00>16%</color> more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by <color=#2BAD00>16%</color>.",
        },
      ],
      Name: "Precious Fossilized Core",
      Rarity: 3,
      Icon: "Weapon_A_Common_06.png",
    },
    {
      ItemID: 13007,
      Text: "Weapon_A_Common_07",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 11102,
        Value: 1e3,
        Name: "HP",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: `A dream W-Engine adored by Starlight Knights fans. Its copyright owner claims that counterfeit transformers can transform you into a bad guy NPC. Watch out for a flying kick that'll scare the bejesus out of the bad guys — that's the power of genuine copyrighted merch!
"Starlight Knights, transform— Transform! Transform! Why can't I transform? Unless... the stars haven't chosen me?!" — from an unboxing vlog recorded by an anonymous member of the Cunning Hares.`,
      Abilities: [
        {
          WeaponID: 13007,
          Level: 1,
          AbilityName: "Starlight Knight Flying Kick",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>8%</color>. When attacked, the equipper's Impact is increased by <color=#2BAD00>10%</color> for 12s.",
        },
        {
          WeaponID: 13007,
          Level: 2,
          AbilityName: "Starlight Knight Flying Kick",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>9%</color>. When attacked, the equipper's Impact is increased by <color=#2BAD00>11.5%</color> for 12s.",
        },
        {
          WeaponID: 13007,
          Level: 3,
          AbilityName: "Starlight Knight Flying Kick",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>10%</color>. When attacked, the equipper's Impact is increased by <color=#2BAD00>13%</color> for 12s.",
        },
        {
          WeaponID: 13007,
          Level: 4,
          AbilityName: "Starlight Knight Flying Kick",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>11%</color>. When attacked, the equipper's Impact is increased by <color=#2BAD00>14.5%</color> for 12s.",
        },
        {
          WeaponID: 13007,
          Level: 5,
          AbilityName: "Starlight Knight Flying Kick",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>12.5%</color>. When attacked, the equipper's Impact is increased by <color=#2BAD00>16%</color> for 12s.",
        },
      ],
      Name: "Original Transmorpher",
      Rarity: 3,
      Icon: "Weapon_A_Common_07.png",
    },
    {
      ItemID: 13008,
      Text: "Weapon_A_Common_08",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 3,
      Desc: `A W-Engine produced by recycling abandoned Bangboo shells. Though it's made from scrapped parts, it still caused some distress among Bangboo lovers. "No Bangboo were hurt during the production of this W-Engine." — the manufacturer had to include this note on the packaging due to protests from Bangboo rights organizations.`,
      Abilities: [
        {
          WeaponID: 13008,
          Level: 1,
          AbilityName: "Lingering Cries",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by <color=#2BAD00>30</color>, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13008,
          Level: 2,
          AbilityName: "Lingering Cries",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by <color=#2BAD00>34</color>, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13008,
          Level: 3,
          AbilityName: "Lingering Cries",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by <color=#2BAD00>38</color>, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13008,
          Level: 4,
          AbilityName: "Lingering Cries",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by <color=#2BAD00>42</color>, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately.",
        },
        {
          WeaponID: 13008,
          Level: 5,
          AbilityName: "Lingering Cries",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by <color=#2BAD00>48</color>, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately.",
        },
      ],
      Name: "Weeping Gemini",
      Rarity: 3,
      Icon: "Weapon_A_Common_08.png",
    },
    {
      ItemID: 13009,
      Text: "Weapon_A_Common_09",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 31203,
        Value: 30,
        Name: "Anomaly Proficiency",
        ShowForm: "{0:0}",
      },
      Type: 3,
      Desc: "This damage-type W-Engine boasts a built-in current transformer, with its discharge part designed as a protruding lip gloss. It automatically attracts electrically sensitive objects around the operator and deals additional damage to them. Such is not the power of love, but rather the Lorentz force generated by a 1,000-volt electric field.",
      Abilities: [
        {
          WeaponID: 13009,
          Level: 1,
          AbilityName: "Kiss of Death",
          AbilityDes:
            "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by <color=#2BAD00>10%</color> and they deal an additional <color=#2BAD00>15%</color> more DMG to the target.",
        },
        {
          WeaponID: 13009,
          Level: 2,
          AbilityName: "Kiss of Death",
          AbilityDes:
            "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by <color=#2BAD00>11.5%</color> and they deal an additional <color=#2BAD00>17.5%</color> more DMG to the target.",
        },
        {
          WeaponID: 13009,
          Level: 3,
          AbilityName: "Kiss of Death",
          AbilityDes:
            "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by <color=#2BAD00>13%</color> and they deal an additional <color=#2BAD00>20%</color> more DMG to the target.",
        },
        {
          WeaponID: 13009,
          Level: 4,
          AbilityName: "Kiss of Death",
          AbilityDes:
            "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by <color=#2BAD00>14.5%</color> and they deal an additional <color=#2BAD00>22.5%</color> more DMG to the target.",
        },
        {
          WeaponID: 13009,
          Level: 5,
          AbilityName: "Kiss of Death",
          AbilityDes:
            "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by <color=#2BAD00>16%</color> and they deal an additional <color=#2BAD00>25%</color> more DMG to the target.",
        },
      ],
      Name: "Electro-Lip Gloss",
      Rarity: 3,
      Icon: "Weapon_A_Common_09.png",
    },
    {
      ItemID: 13010,
      Text: "Weapon_A_Common_10",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 13102,
        Value: 1600,
        Name: "DEF",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: "A special W-Engine decorated with a fluffy bunny. Although it is a mere imitation of the real animal, even the fiercest of Hollow Raiders can relieve stress by petting their bunnies while taking a break, which enhances their combat performance. There are many similar models in this series of W-Engines: a portable bunny, a foldable bunny, a furless bunny... Everyone can find one they will not be able to refuse.",
      Abilities: [
        {
          WeaponID: 13010,
          Level: 1,
          AbilityName: "Pet the Bunny",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>8%</color>. Increases the equipper's ATK by <color=#2BAD00>10%</color> when they are shielded.",
        },
        {
          WeaponID: 13010,
          Level: 2,
          AbilityName: "Pet the Bunny",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>9.2%</color>. Increases the equipper's ATK by <color=#2BAD00>11.5%</color> when they are shielded.",
        },
        {
          WeaponID: 13010,
          Level: 3,
          AbilityName: "Pet the Bunny",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>10.4%</color>. Increases the equipper's ATK by <color=#2BAD00>13%</color> when they are shielded.",
        },
        {
          WeaponID: 13010,
          Level: 4,
          AbilityName: "Pet the Bunny",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>11.6%</color>. Increases the equipper's ATK by <color=#2BAD00>14.5%</color> when they are shielded.",
        },
        {
          WeaponID: 13010,
          Level: 5,
          AbilityName: "Pet the Bunny",
          AbilityDes:
            "Increases Max HP by <color=#2BAD00>12.8%</color>. Increases the equipper's ATK by <color=#2BAD00>16%</color> when they are shielded.",
        },
      ],
      Name: "Bunny Band",
      Rarity: 3,
      Icon: "Weapon_A_Common_10.png",
    },
    {
      ItemID: 13011,
      Text: "Weapon_A_Common_11",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: "A special W-Engine equipped with a temperature regulator where residual heat generated by the W-Engine's high frequency is funneled into the hot springs on its surface. The owner of this W-Engine can drink hot spring soup with all its spring warmth in front of frost-covered enemies. Of course, some people think it's like drinking bath water.",
      Abilities: [
        {
          WeaponID: 13011,
          Level: 1,
          AbilityName: "Hot Spring Soup",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>7.5%</color>. When attacked, the equipper's Energy Generation Rate increases by <color=#2BAD00>10%</color> for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13011,
          Level: 2,
          AbilityName: "Hot Spring Soup",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>8.5%</color>. When attacked, the equipper's Energy Generation Rate increases by <color=#2BAD00>11.5%</color> for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13011,
          Level: 3,
          AbilityName: "Hot Spring Soup",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>9.5%</color>. When attacked, the equipper's Energy Generation Rate increases by <color=#2BAD00>13%</color> for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13011,
          Level: 4,
          AbilityName: "Hot Spring Soup",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>10.5%</color>. When attacked, the equipper's Energy Generation Rate increases by <color=#2BAD00>14.5%</color> for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13011,
          Level: 5,
          AbilityName: "Hot Spring Soup",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>12%</color>. When attacked, the equipper's Energy Generation Rate increases by <color=#2BAD00>16%</color> for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Spring Embrace",
      Rarity: 3,
      Icon: "Weapon_A_Common_11.png",
    },
    {
      ItemID: 13013,
      Text: "Weapon_A_Common_13",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: "A W-Engine that represents the brilliance and magnificence of flowers, seemingly crafted from the most luxurious materials. However, after finally dismantling the Ether-powered premium anti-theft device, an experienced thief will discover with terror that this W-Engine... is gilded.",
      Abilities: [
        {
          WeaponID: 13013,
          Level: 1,
          AbilityName: "Extraordinary Anti-Theft Measures",
          AbilityDes:
            "ATK increases by <color=#2BAD00>6</color>%, and DMG dealt by <color=#ffffff>EX Special Attacks</color> increases by <color=#2BAD00>15%</color>.",
        },
        {
          WeaponID: 13013,
          Level: 2,
          AbilityName: "Extraordinary Anti-Theft Measures",
          AbilityDes:
            "ATK increases by <color=#2BAD00>6.9</color>%, and DMG dealt by <color=#ffffff>EX Special Attacks</color> increases by <color=#2BAD00>17.2%</color>.",
        },
        {
          WeaponID: 13013,
          Level: 3,
          AbilityName: "Extraordinary Anti-Theft Measures",
          AbilityDes:
            "ATK increases by <color=#2BAD00>7.8</color>%, and DMG dealt by <color=#ffffff>EX Special Attacks</color> increases by <color=#2BAD00>19.5%</color>.",
        },
        {
          WeaponID: 13013,
          Level: 4,
          AbilityName: "Extraordinary Anti-Theft Measures",
          AbilityDes:
            "ATK increases by <color=#2BAD00>8.7</color>%, and DMG dealt by <color=#ffffff>EX Special Attacks</color> increases by <color=#2BAD00>21.8%</color>.",
        },
        {
          WeaponID: 13013,
          Level: 5,
          AbilityName: "Extraordinary Anti-Theft Measures",
          AbilityDes:
            "ATK increases by <color=#2BAD00>9.6</color>%, and DMG dealt by <color=#ffffff>EX Special Attacks</color> increases by <color=#2BAD00>24%</color>.",
        },
      ],
      Name: "Gilded Blossom",
      Rarity: 3,
      Icon: "Weapon_A_Common_13.png",
    },
    {
      ItemID: 13101,
      Text: "Weapon_A_1011",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 600,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: `This customized W-Engine Core focuses on power storage and has been modified to enhance power storage functions. It can effectively boost Zap damage output for weapons, and is the gadget store owner's piece de resistance. Not long after, Anby made some tweaks based on user habits, but judging by how serious and careful she is while conducting each maintenance session, these are probably not the safest of modifications.

<color=#959595>"Weapons SHOULD be dangerous. If it can't shock me, then how is it going to shock the enemy?" — Anby's response while carefully performing maintenance</color>`,
      Abilities: [
        {
          WeaponID: 13101,
          Level: 1,
          AbilityName: "In a Flash of Light",
          AbilityDes:
            "Increases <color=#2eb6ff>Electric DMG</color> by <color=#2BAD00>15%</color>. When the equipper hits an enemy with a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Assist Attack</color>, their Energy Generation Rate increases by <color=#2BAD00>18%</color> for 8s.",
        },
        {
          WeaponID: 13101,
          Level: 2,
          AbilityName: "In a Flash of Light",
          AbilityDes:
            "Increases <color=#2eb6ff>Electric DMG</color> by <color=#2BAD00>17.5%</color>. When the equipper hits an enemy with a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Assist Attack</color>, their Energy Generation Rate increases by <color=#2BAD00>20.5%</color> for 8s.",
        },
        {
          WeaponID: 13101,
          Level: 3,
          AbilityName: "In a Flash of Light",
          AbilityDes:
            "Increases <color=#2eb6ff>Electric DMG</color> by <color=#2BAD00>20%</color>. When the equipper hits an enemy with a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Assist Attack</color>, their Energy Generation Rate increases by <color=#2BAD00>23%</color> for 8s.",
        },
        {
          WeaponID: 13101,
          Level: 4,
          AbilityName: "In a Flash of Light",
          AbilityDes:
            "Increases <color=#2eb6ff>Electric DMG</color> by <color=#2BAD00>22%</color>. When the equipper hits an enemy with a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Assist Attack</color>, their Energy Generation Rate increases by <color=#2BAD00>25%</color> for 8s.",
        },
        {
          WeaponID: 13101,
          Level: 5,
          AbilityName: "In a Flash of Light",
          AbilityDes:
            "Increases <color=#2eb6ff>Electric DMG</color> by <color=#2BAD00>24%</color>. When the equipper hits an enemy with a <color=#ffffff>Dodge Counter</color> or <color=#ffffff>Assist Attack</color>, their Energy Generation Rate increases by <color=#2BAD00>27.5%</color> for 8s.",
        },
      ],
      Name: "Demara Battery Mark II",
      Rarity: 3,
      Icon: "Weapon_A_1011.png",
    },
    {
      ItemID: 13103,
      Text: "Weapon_A_1031",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 2e3,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: `A cost-effective W-Engine that focuses on energy storage. After Nicole modified its internal space, it can now be used as a storage box. While the gold coins stored inside are fake, they may catch greedy Hollow Raiders off guard. Or rather, the operator can simply toss the heavy coins at them and knock them out.

<color=#959595>"Hurts, doesn't it? Impressive, right? Hmph, that's just what money can do!" — Nicole, gloating after defeating an enemy</color>`,
      Abilities: [
        {
          WeaponID: 13103,
          Level: 1,
          AbilityName: "Money-Lover",
          AbilityDes:
            "Dealing <color=#fe437e>Ether DMG</color> using an <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Chain Attack</color>, or <color=#ffffff>Ultimate</color> increases all squad members' DMG against the target by <color=#2BAD00>15%</color> and increases the equipper's Energy Regen by <color=#2BAD00>0.5</color>/s for 2s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13103,
          Level: 2,
          AbilityName: "Money-Lover",
          AbilityDes:
            "Dealing <color=#fe437e>Ether DMG</color> using an <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Chain Attack</color>, or <color=#ffffff>Ultimate</color> increases all squad members' DMG against the target by <color=#2BAD00>17.5%</color> and increases the equipper's Energy Regen by <color=#2BAD00>0.58</color>/s for 2s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13103,
          Level: 3,
          AbilityName: "Money-Lover",
          AbilityDes:
            "Dealing <color=#fe437e>Ether DMG</color> using an <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Chain Attack</color>, or <color=#ffffff>Ultimate</color> increases all squad members' DMG against the target by <color=#2BAD00>20%</color> and increases the equipper's Energy Regen by <color=#2BAD00>0.65</color>/s for 2s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13103,
          Level: 4,
          AbilityName: "Money-Lover",
          AbilityDes:
            "Dealing <color=#fe437e>Ether DMG</color> using an <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Chain Attack</color>, or <color=#ffffff>Ultimate</color> increases all squad members' DMG against the target by <color=#2BAD00>22%</color> and increases the equipper's Energy Regen by <color=#2BAD00>0.72</color>/s for 2s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13103,
          Level: 5,
          AbilityName: "Money-Lover",
          AbilityDes:
            "Dealing <color=#fe437e>Ether DMG</color> using an <color=#ffffff>EX Special Attack</color>, <color=#ffffff>Chain Attack</color>, or <color=#ffffff>Ultimate</color> increases all squad members' DMG against the target by <color=#2BAD00>24%</color> and increases the equipper's Energy Regen by <color=#2BAD00>0.8</color>/s for 2s. Passive effects of the same name do not stack.",
        },
      ],
      Name: "The Vault",
      Rarity: 3,
      Icon: "Weapon_A_1031.png",
    },
    {
      ItemID: 13106,
      Text: "Weapon_A_1061",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `An enhanced W-Engine with a high rotation speed. Corin has integrated its shaft portion with a chainsaw to provide additional cutting power for her "cleaning" work. To ensure that her "cleaning" goes smoothly and to minimize the pain inflicted on her target, she has thoughtfully increased the rotation speed to the maximum.

<color=#959595>"Um... Don't worry, it won't hurt! Well... I mean, it will only hurt for a moment, and then it won't hurt anymore!" — Corin, attempting to comfort her opponent before attacking</color>`,
      Abilities: [
        {
          WeaponID: 13106,
          Level: 1,
          AbilityName: "Safe Household Saw",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.45</color>/s. When an <color=#ffffff>EX Special Attack</color> hits an enemy, the equipper's <color=#f0d12b>Physical DMG</color> increases by <color=#2BAD00>3%</color>, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration.",
        },
        {
          WeaponID: 13106,
          Level: 2,
          AbilityName: "Safe Household Saw",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.52</color>/s. When an <color=#ffffff>EX Special Attack</color> hits an enemy, the equipper's <color=#f0d12b>Physical DMG</color> increases by <color=#2BAD00>3.5%</color>, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration.",
        },
        {
          WeaponID: 13106,
          Level: 3,
          AbilityName: "Safe Household Saw",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.58</color>/s. When an <color=#ffffff>EX Special Attack</color> hits an enemy, the equipper's <color=#f0d12b>Physical DMG</color> increases by <color=#2BAD00>4%</color>, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration.",
        },
        {
          WeaponID: 13106,
          Level: 4,
          AbilityName: "Safe Household Saw",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.65</color>/s. When an <color=#ffffff>EX Special Attack</color> hits an enemy, the equipper's <color=#f0d12b>Physical DMG</color> increases by <color=#2BAD00>4.4%</color>, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration.",
        },
        {
          WeaponID: 13106,
          Level: 5,
          AbilityName: "Safe Household Saw",
          AbilityDes:
            "While off-field, the equipper's Energy Regen increases by <color=#2BAD00>0.72</color>/s. When an <color=#ffffff>EX Special Attack</color> hits an enemy, the equipper's <color=#f0d12b>Physical DMG</color> increases by <color=#2BAD00>4.8%</color>, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration.",
        },
      ],
      Name: "Housekeeper",
      Rarity: 3,
      Icon: "Weapon_A_1061.png",
    },
    {
      ItemID: 13108,
      Text: "Weapon_A_1081",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `A custom supercomputing W-Engine which specializes in aim assist and calculating trajectories, it looks more like some kind of pirated Starlight Knight figurine now that Billy's finished his modifications. It flashes brightly whenever an enemy is detected, and shouts out pre-set quotes. Despite this move clearly exposing one's location and attracting the enemy, this is not an issue for Billy so long as everything is cool enough.

<color=#959595>"COPY? How can you call that a copy?! I've poured all my passion, wisdom, soul, and moisture into this! Apart from summoning a shooting star to transform me — this is real deal, bona fide Starlight Knight equipment!" — Billy, enthusiastically outlining his modding philosophy</color>`,
      Abilities: [
        {
          WeaponID: 13108,
          Level: 1,
          AbilityName: "Knight Beam: Change",
          AbilityDes:
            "Increases the equipper's <color=#f0d12b>Physical DMG</color> against the target by <color=#2BAD00>36%</color> for 8s upon hitting an enemy at least 6 meters away with a <color=#ffffff>Basic Attack</color> or <color=#ffffff>Dash Attack</color>.",
        },
        {
          WeaponID: 13108,
          Level: 2,
          AbilityName: "Knight Beam: Change",
          AbilityDes:
            "Increases the equipper's <color=#f0d12b>Physical DMG</color> against the target by <color=#2BAD00>41%</color> for 8s upon hitting an enemy at least 6 meters away with a <color=#ffffff>Basic Attack</color> or <color=#ffffff>Dash Attack</color>.",
        },
        {
          WeaponID: 13108,
          Level: 3,
          AbilityName: "Knight Beam: Change",
          AbilityDes:
            "Increases the equipper's <color=#f0d12b>Physical DMG</color> against the target by <color=#2BAD00>46.5%</color> for 8s upon hitting an enemy at least 6 meters away with a <color=#ffffff>Basic Attack</color> or <color=#ffffff>Dash Attack</color>.",
        },
        {
          WeaponID: 13108,
          Level: 4,
          AbilityName: "Knight Beam: Change",
          AbilityDes:
            "Increases the equipper's <color=#f0d12b>Physical DMG</color> against the target by <color=#2BAD00>52%</color> for 8s upon hitting an enemy at least 6 meters away with a <color=#ffffff>Basic Attack</color> or <color=#ffffff>Dash Attack</color>.",
        },
        {
          WeaponID: 13108,
          Level: 5,
          AbilityName: "Knight Beam: Change",
          AbilityDes:
            "Increases the equipper's <color=#f0d12b>Physical DMG</color> against the target by <color=#2BAD00>57.5%</color> for 8s upon hitting an enemy at least 6 meters away with a <color=#ffffff>Basic Attack</color> or <color=#ffffff>Dash Attack</color>.",
        },
      ],
      Name: "Starlight Engine Replica",
      Rarity: 3,
      Icon: "Weapon_A_1081.png",
    },
    {
      ItemID: 13111,
      Text: "Weapon_A_1111",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 2e3,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: `Originally a high-rev W-Engine, it has been modified by Anton with the most expensive rotary drill parts. These modifications allow the engine to temporarily exceed its output limits, enabling it to better serve Anton's "bro." When it comes to anything involving his "bro," Anton spares no expense.

<color=#959595>"Ben bought the materials, Grace helped with the modding, and the force was signed off by the president herself... Bro, the blessings of all Belobog are inside you. Let's do this!" — Anton muttering to himself the first time he starts it up</color>`,
      Abilities: [
        {
          WeaponID: 13111,
          Level: 1,
          AbilityName: "Hell's Generator",
          AbilityDes:
            "When launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color>, <color=#2eb6ff>Electric DMG</color> from <color=#ffffff>Basic Attacks</color> and <color=#ffffff>Dash Attacks</color> increases by <color=#2BAD00>50%</color> for 10s. This effect can trigger once every 15s.",
        },
        {
          WeaponID: 13111,
          Level: 2,
          AbilityName: "Hell's Generator",
          AbilityDes:
            "When launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color>, <color=#2eb6ff>Electric DMG</color> from <color=#ffffff>Basic Attacks</color> and <color=#ffffff>Dash Attacks</color> increases by <color=#2BAD00>57.5%</color> for 10s. This effect can trigger once every 15s.",
        },
        {
          WeaponID: 13111,
          Level: 3,
          AbilityName: "Hell's Generator",
          AbilityDes:
            "When launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color>, <color=#2eb6ff>Electric DMG</color> from <color=#ffffff>Basic Attacks</color> and <color=#ffffff>Dash Attacks</color> increases by <color=#2BAD00>65%</color> for 10s. This effect can trigger once every 15s.",
        },
        {
          WeaponID: 13111,
          Level: 4,
          AbilityName: "Hell's Generator",
          AbilityDes:
            "When launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color>, <color=#2eb6ff>Electric DMG</color> from <color=#ffffff>Basic Attacks</color> and <color=#ffffff>Dash Attacks</color> increases by <color=#2BAD00>72.5%</color> for 10s. This effect can trigger once every 15s.",
        },
        {
          WeaponID: 13111,
          Level: 5,
          AbilityName: "Hell's Generator",
          AbilityDes:
            "When launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color>, <color=#2eb6ff>Electric DMG</color> from <color=#ffffff>Basic Attacks</color> and <color=#ffffff>Dash Attacks</color> increases by <color=#2BAD00>80%</color> for 10s. This effect can trigger once every 15s.",
        },
      ],
      Name: "Drill Rig - Red Axis",
      Rarity: 3,
      Icon: "Weapon_A_1111.png",
    },
    {
      ItemID: 13112,
      Text: "Weapon_A_1121",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 13102,
        Value: 1600,
        Name: "DEF",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: `This super-powerful support W-Engine, into which Ben installed extra heavy oil cylinders to keep it growling along, can even provide sufficient power for heavy-duty machinery. Despite its weight being so massive that ordinary people cannot lift it, for Ben, it's the perfect counterweight ball for his concrete pillar.

<color=#959595>"Don't worry. I've calculated the counterweight position and impact resistance factor down to four decimal places. It won't impact weapon performance." — Ben, before taking out his notebook to check over the calculations yet again</color>`,
      Abilities: [
        {
          WeaponID: 13112,
          Level: 1,
          AbilityName: "Ten Ton Top",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>7.5%</color>. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal <color=#2BAD00>600%</color> of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s.",
        },
        {
          WeaponID: 13112,
          Level: 2,
          AbilityName: "Ten Ton Top",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>8.5%</color>. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal <color=#2BAD00>690%</color> of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s.",
        },
        {
          WeaponID: 13112,
          Level: 3,
          AbilityName: "Ten Ton Top",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>9.5%</color>. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal <color=#2BAD00>780%</color> of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s.",
        },
        {
          WeaponID: 13112,
          Level: 4,
          AbilityName: "Ten Ton Top",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>10.5%</color>. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal <color=#2BAD00>870%</color> of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s.",
        },
        {
          WeaponID: 13112,
          Level: 5,
          AbilityName: "Ten Ton Top",
          AbilityDes:
            "Reduces DMG taken by <color=#2BAD00>12%</color>. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal <color=#2BAD00>960%</color> of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s.",
        },
      ],
      Name: "Big Cylinder",
      Rarity: 3,
      Icon: "Weapon_A_1121.png",
    },
    {
      ItemID: 13113,
      Text: "Weapon_A_1131",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: `An intricate W-Engine developed by Section 6 and later modified using the technology of a certain martial arts clan. It can control Ether particles to form an energy field and boasts a terrifying appearance that can easily silence a crying child! If you are unfortunate enough to face its wicked stare, then just wait until it unfurls its fangs. What lies inside is... Don't laugh! This poor little thing really hurts when it hits you!

<color=#959595>"Hmm... Instead of a cool mask, I'd rather carry another lunchbox... I'll go ask Nagi if I can pack some snacks in it!" — Soukaku, excitedly running to the Section 6 office</color>`,
      Abilities: [
        {
          WeaponID: 13113,
          Level: 1,
          AbilityName: "Visage of Greed",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>15%</color>. When launching an <color=#ffffff>EX Special Attack</color>, all squad members' ATK increases by <color=#2BAD00>2%</color> for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13113,
          Level: 2,
          AbilityName: "Visage of Greed",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>17.5%</color>. When launching an <color=#ffffff>EX Special Attack</color>, all squad members' ATK increases by <color=#2BAD00>2.3%</color> for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13113,
          Level: 3,
          AbilityName: "Visage of Greed",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>20%</color>. When launching an <color=#ffffff>EX Special Attack</color>, all squad members' ATK increases by <color=#2BAD00>2.6%</color> for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13113,
          Level: 4,
          AbilityName: "Visage of Greed",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>22%</color>. When launching an <color=#ffffff>EX Special Attack</color>, all squad members' ATK increases by <color=#2BAD00>2.9%</color> for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13113,
          Level: 5,
          AbilityName: "Visage of Greed",
          AbilityDes:
            "Increases <color=#98eff0>Ice DMG</color> by <color=#2BAD00>24%</color>. When launching an <color=#ffffff>EX Special Attack</color>, all squad members' ATK increases by <color=#2BAD00>3.2%</color> for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Bashful Demon",
      Rarity: 3,
      Icon: "Weapon_A_1131.png",
    },
    {
      ItemID: 13115,
      Text: "Weapon_A_1151",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 2e3,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: `A support W-Engine propelled by jets that is both mobile and impactful, it can traverse the entire battlefield providing combat buffs. Not only is it practical, but it's the biggest imaginary enemy and most-feared sparring partner of Grassy, Woody, and Bricky. The little boars can hear Lucy say in their nightmares.

<color=#959595>"If you can't do it, go train with Kaboom!" — Lucy, lecturing her three loyal guard boars</color>`,
      Abilities: [
        {
          WeaponID: 13115,
          Level: 1,
          AbilityName: "Stampede Accident",
          AbilityDes:
            "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by <color=#2BAD00>2.5%</color> for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13115,
          Level: 2,
          AbilityName: "Stampede Accident",
          AbilityDes:
            "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by <color=#2BAD00>2.8%</color> for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13115,
          Level: 3,
          AbilityName: "Stampede Accident",
          AbilityDes:
            "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by <color=#2BAD00>3.2%</color> for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13115,
          Level: 4,
          AbilityName: "Stampede Accident",
          AbilityDes:
            "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by <color=#2BAD00>3.6%</color> for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 13115,
          Level: 5,
          AbilityName: "Stampede Accident",
          AbilityDes:
            "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by <color=#2BAD00>4%</color> for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Kaboom the Cannon",
      Rarity: 3,
      Icon: "Weapon_A_1151.png",
    },
    {
      ItemID: 13127,
      Text: "Weapon_A_1271",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: `A defensive W-Engine independently researched and created by Public Security with special emphasis on enhancing the energy conversion ability in its shield. Rumor has it that this model of W-Engine became the standard for all supporting units in Hollow operations due to an unknown member of the top brass pushing for mass production.

<color=#959595>"Even if you took it apart and rebuilt it into an actual physical shield, it would still be extremely sturdy... but it really is super heavy!" —Seth, musing aloud as he studies the extremely expensive material of the W-Engine</color>`,
      Abilities: [
        {
          WeaponID: 13127,
          Level: 1,
          AbilityName: "Standard Blocking Technique",
          AbilityDes:
            "While Shielded, the equipper's Energy Regen increases by 0.4/s. The Anomaly Buildup accumulated by <color=#ffffff>EX Special Attacks</color>/<color=#ffffff>Assist Follow-Ups</color> increase by <color=#2BAD00>36%</color>/<color=#2BAD00>36%</color>.",
        },
        {
          WeaponID: 13127,
          Level: 2,
          AbilityName: "Standard Blocking Technique",
          AbilityDes:
            "While Shielded, the equipper's Energy Regen increases by 0.46/s. The Anomaly Buildup accumulated by <color=#ffffff>EX Special Attacks</color>/<color=#ffffff>Assist Follow-Ups</color> increase by <color=#2BAD00>40%</color>/<color=#2BAD00>40%</color>.",
        },
        {
          WeaponID: 13127,
          Level: 3,
          AbilityName: "Standard Blocking Technique",
          AbilityDes:
            "While Shielded, the equipper's Energy Regen increases by 0.52/s. The Anomaly Buildup accumulated by <color=#ffffff>EX Special Attacks</color>/<color=#ffffff>Assist Follow-Ups</color> increase by <color=#2BAD00>45%</color>/<color=#2BAD00>45%</color>.",
        },
        {
          WeaponID: 13127,
          Level: 4,
          AbilityName: "Standard Blocking Technique",
          AbilityDes:
            "While Shielded, the equipper's Energy Regen increases by 0.58/s. The Anomaly Buildup accumulated by <color=#ffffff>EX Special Attacks</color>/<color=#ffffff>Assist Follow-Ups</color> increase by <color=#2BAD00>50%</color>/<color=#2BAD00>50%</color>.",
        },
        {
          WeaponID: 13127,
          Level: 5,
          AbilityName: "Standard Blocking Technique",
          AbilityDes:
            "While Shielded, the equipper's Energy Regen increases by 0.64/s. The Anomaly Buildup accumulated by <color=#ffffff>EX Special Attacks</color>/<color=#ffffff>Assist Follow-Ups</color> increase by <color=#2BAD00>55%</color>/<color=#2BAD00>55%</color>.",
        },
      ],
      Name: "Peacekeeper - Specialized",
      Rarity: 3,
      Icon: "Weapon_A_1271.png",
    },
    {
      ItemID: 13128,
      Text: "Weapon_A_1281",
      BaseProperty: {
        Property: 12101,
        Value: 42,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 1e3,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 3,
      Desc: `This energy W-Engine, modded from spare parts of a truck's engine, converts the original cylinder into an energy storage unit, which is highly advantageous. It placed first in the internal Leaps and Bounds competition, surpassing many heavy-duty motorbikes and even a truck driven by Piper herself.

<color=#959595>"Too bad there's no way to carry cargo... Maybe we can hang it on the tusks?" — Piper, top-notch logistics driver</color>`,
      Abilities: [
        {
          WeaponID: 13128,
          Level: 1,
          AbilityName: "Collision Potential",
          AbilityDes: `When <color=#ffffff>EX Special Attack</color> hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:
Increases the equipper's ATK by <color=#2BAD00>8%</color>, increases the equipper's Anomaly Proficiency by <color=#2BAD00>40</color>, or increases the equipper's Anomaly Buildup Rate by <color=#2BAD00>25%</color>.`,
        },
        {
          WeaponID: 13128,
          Level: 2,
          AbilityName: "Collision Potential",
          AbilityDes: `When <color=#ffffff>EX Special Attack</color> hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:
Increases the equipper's ATK by <color=#2BAD00>9.2%</color>, increases the equipper's Anomaly Proficiency by <color=#2BAD00>46</color>, or increases the equipper's Anomaly Buildup Rate by <color=#2BAD00>28%</color>.`,
        },
        {
          WeaponID: 13128,
          Level: 3,
          AbilityName: "Collision Potential",
          AbilityDes: `When <color=#ffffff>EX Special Attack</color> hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:
Increases the equipper's ATK by <color=#2BAD00>10.4%</color>, increases the equipper's Anomaly Proficiency by <color=#2BAD00>52</color>, or increases the equipper's Anomaly Buildup Rate by <color=#2BAD00>32%</color>.`,
        },
        {
          WeaponID: 13128,
          Level: 4,
          AbilityName: "Collision Potential",
          AbilityDes: `When <color=#ffffff>EX Special Attack</color> hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:
Increases the equipper's ATK by <color=#2BAD00>11.6%</color>, increases the equipper's Anomaly Proficiency by <color=#2BAD00>58</color>, or increases the equipper's Anomaly Buildup Rate by <color=#2BAD00>36%</color>.`,
        },
        {
          WeaponID: 13128,
          Level: 5,
          AbilityName: "Collision Potential",
          AbilityDes: `When <color=#ffffff>EX Special Attack</color> hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:
Increases the equipper's ATK by <color=#2BAD00>12.8%</color>, increases the equipper's Anomaly Proficiency by <color=#2BAD00>64</color>, or increases the equipper's Anomaly Buildup Rate by <color=#2BAD00>40%</color>.`,
        },
      ],
      Name: "Roaring Ride",
      Rarity: 3,
      Icon: "Weapon_A_1281.png",
    },
    {
      ItemID: 14001,
      Text: "Weapon_S_Common_01",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 20103,
        Value: 800,
        Name: "CRIT Rate",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: "A high-performance supercomputing W-Engine, capable of collecting real-time data on the battlefield and providing tactical support to its operator. Additionally, it is equipped with mini cannons and can even be deployed as an automatic combat unit in critical moments. In such situations, the operator may become more of a hindrance than a help.",
      Abilities: [
        {
          WeaponID: 14001,
          Level: 1,
          AbilityName: "Oversized Barrel",
          AbilityDes:
            "Increases ATK by <color=#2BAD00>7.5%</color>. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every <color=#2BAD00>8</color>s.",
        },
        {
          WeaponID: 14001,
          Level: 2,
          AbilityName: "Oversized Barrel",
          AbilityDes:
            "Increases ATK by <color=#2BAD00>8.6%</color>. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every <color=#2BAD00>7.5</color>s.",
        },
        {
          WeaponID: 14001,
          Level: 3,
          AbilityName: "Oversized Barrel",
          AbilityDes:
            "Increases ATK by <color=#2BAD00>9.7%</color>. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every <color=#2BAD00>7</color>s.",
        },
        {
          WeaponID: 14001,
          Level: 4,
          AbilityName: "Oversized Barrel",
          AbilityDes:
            "Increases ATK by <color=#2BAD00>10.8%</color>. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every <color=#2BAD00>6.5</color>s.",
        },
        {
          WeaponID: 14001,
          Level: 5,
          AbilityName: "Oversized Barrel",
          AbilityDes:
            "Increases ATK by <color=#2BAD00>12%</color>. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every <color=#2BAD00>6</color>s.",
        },
      ],
      Name: "Cannon Rotor",
      Rarity: 3,
      Icon: "Weapon_S_Common_01.png",
    },
    {
      ItemID: 14002,
      Text: "Weapon_S_Common_02",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 2e3,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: "A new supercomputing W-Engine, featuring cutting-edge integrated chips that dynamically monitor the battlefield and provide tactical analysis for its user. Furthermore, this W-Engine can serve as a portable console, allowing its user to play the most popular video games anytime, anywhere. However, it is not advisable to use the speakers while playing games... Especially not in Hollow areas frequented by Ethereals.",
      Abilities: [
        {
          WeaponID: 14002,
          Level: 1,
          AbilityName: "Game Start!",
          AbilityDes:
            "Whenever the equipper's attack triggers an Attribute Counter effect, all squad members' CRIT Rate against the struck enemy increases by <color=#2BAD00>12%</color> for 12s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14002,
          Level: 2,
          AbilityName: "Game Start!",
          AbilityDes:
            "Whenever the equipper's attack triggers an Attribute Counter effect, all squad members' CRIT Rate against the struck enemy increases by <color=#2BAD00>13.5%</color> for 12s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14002,
          Level: 3,
          AbilityName: "Game Start!",
          AbilityDes:
            "Whenever the equipper's attack triggers an Attribute Counter effect, all squad members' CRIT Rate against the struck enemy increases by <color=#2BAD00>15.5%</color> for 12s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14002,
          Level: 4,
          AbilityName: "Game Start!",
          AbilityDes:
            "Whenever the equipper's attack triggers an Attribute Counter effect, all squad members' CRIT Rate against the struck enemy increases by <color=#2BAD00>17.5%</color> for 12s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 14002,
          Level: 5,
          AbilityName: "Game Start!",
          AbilityDes:
            "Whenever the equipper's attack triggers an Attribute Counter effect, all squad members' CRIT Rate against the struck enemy increases by <color=#2BAD00>20%</color> for 12s. Passive effects of the same name do not stack.",
        },
      ],
      Name: "Unfettered Game Ball",
      Rarity: 3,
      Icon: "Weapon_S_Common_02.png",
    },
    {
      ItemID: 14003,
      Text: "Weapon_S_Common_03",
      BaseProperty: {
        Property: 12101,
        Value: 40,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 600,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: "A special W-Engine modeled after a revolver. It can apparently load six bullet-shaped condensed Ether batteries, which release a significant amount of power when fired. It is said that as long as you carry this W-Engine, you will be able to spontaneously learn how to whistle and will occasionally reference old movies in a cowboy voice.",
      Abilities: [
        {
          WeaponID: 14003,
          Level: 1,
          AbilityName: "Fire!",
          AbilityDes:
            "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an <color=#ffffff>EX Special Attack</color>, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by <color=#2BAD00>4%</color>.",
        },
        {
          WeaponID: 14003,
          Level: 2,
          AbilityName: "Fire!",
          AbilityDes:
            "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an <color=#ffffff>EX Special Attack</color>, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by <color=#2BAD00>4.6%</color>.",
        },
        {
          WeaponID: 14003,
          Level: 3,
          AbilityName: "Fire!",
          AbilityDes:
            "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an <color=#ffffff>EX Special Attack</color>, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by <color=#2BAD00>5.2%</color>.",
        },
        {
          WeaponID: 14003,
          Level: 4,
          AbilityName: "Fire!",
          AbilityDes:
            "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an <color=#ffffff>EX Special Attack</color>, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by <color=#2BAD00>5.8%</color>.",
        },
        {
          WeaponID: 14003,
          Level: 5,
          AbilityName: "Fire!",
          AbilityDes:
            "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an <color=#ffffff>EX Special Attack</color>, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by <color=#2BAD00>6.4%</color>.",
        },
      ],
      Name: "Six Shooter",
      Rarity: 3,
      Icon: "Weapon_S_Common_03.png",
    },
    {
      ItemID: 12001,
      Text: "Weapon_B_Common_01",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 800,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: "A W-Engine that prioritizes damage output over noise reduction. It can indiscriminately deal considerable damage to all units nearby. Its designer compares it to the full moon. Bright moonlight can interrupt people's sleep, and nothing can be done about it. But the moonlight does not bother anyone on purpose — you just have to get used to it.",
      Abilities: [
        {
          WeaponID: 12001,
          Level: 1,
          AbilityName: "Full Moon",
          AbilityDes:
            "<color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, and <color=#ffffff>Dodge Counter</color> DMG increases by <color=#2BAD00>12%</color>.",
        },
        {
          WeaponID: 12001,
          Level: 2,
          AbilityName: "Full Moon",
          AbilityDes:
            "<color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, and <color=#ffffff>Dodge Counter</color> DMG increases by <color=#2BAD00>14%</color>.",
        },
        {
          WeaponID: 12001,
          Level: 3,
          AbilityName: "Full Moon",
          AbilityDes:
            "<color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, and <color=#ffffff>Dodge Counter</color> DMG increases by <color=#2BAD00>16%</color>.",
        },
        {
          WeaponID: 12001,
          Level: 4,
          AbilityName: "Full Moon",
          AbilityDes:
            "<color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, and <color=#ffffff>Dodge Counter</color> DMG increases by <color=#2BAD00>18%</color>.",
        },
        {
          WeaponID: 12001,
          Level: 5,
          AbilityName: "Full Moon",
          AbilityDes:
            "<color=#ffffff>Basic Attack</color>, <color=#ffffff>Dash Attack</color>, and <color=#ffffff>Dodge Counter</color> DMG increases by <color=#2BAD00>20%</color>.",
        },
      ],
      Name: "[Lunar] Pleniluna",
      Rarity: 2,
      Icon: "Weapon_B_Common_01.png",
    },
    {
      ItemID: 12002,
      Text: "Weapon_B_Common_02",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 800,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: "A W-Engine with excellent sonic and thermal energy usage, capable of hitting its target with a double whammy. Those hit, be it intentionally or not, have a chance to be diagnosed with snow blindness. The exact cause remains unknown, so obtaining insurance compensation after falling victim to this malady is close to impossible. There was a poor Hollow Investigator who learned it the hard way.",
      Abilities: [
        {
          WeaponID: 12002,
          Level: 1,
          AbilityName: "Waning Moon",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases the equipper's DMG by <color=#2BAD00>15%</color> for 6s.",
        },
        {
          WeaponID: 12002,
          Level: 2,
          AbilityName: "Waning Moon",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases the equipper's DMG by <color=#2BAD00>17.5%</color> for 6s.",
        },
        {
          WeaponID: 12002,
          Level: 3,
          AbilityName: "Waning Moon",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases the equipper's DMG by <color=#2BAD00>20%</color> for 6s.",
        },
        {
          WeaponID: 12002,
          Level: 4,
          AbilityName: "Waning Moon",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases the equipper's DMG by <color=#2BAD00>22.5%</color> for 6s.",
        },
        {
          WeaponID: 12002,
          Level: 5,
          AbilityName: "Waning Moon",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases the equipper's DMG by <color=#2BAD00>25%</color> for 6s.",
        },
      ],
      Name: "[Lunar] Decrescent",
      Rarity: 2,
      Icon: "Weapon_B_Common_02.png",
    },
    {
      ItemID: 12003,
      Text: "Weapon_B_Common_03",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 20103,
        Value: 640,
        Name: "CRIT Rate",
        ShowForm: "{0:0.#%}",
      },
      Type: 1,
      Desc: "This high-capacity portable W-Engine can collect dissipated energy from its surroundings, thus enhancing the combat effectiveness of its operator. It is a perfect choice for novice explorers who are worried that their W-Engine may run out of power during expeditions.",
      Abilities: [
        {
          WeaponID: 12003,
          Level: 1,
          AbilityName: "New Moon",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> generates <color=#2BAD00>3</color> Energy for the equipper. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12003,
          Level: 2,
          AbilityName: "New Moon",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> generates <color=#2BAD00>3.5</color> Energy for the equipper. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12003,
          Level: 3,
          AbilityName: "New Moon",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> generates <color=#2BAD00>4</color> Energy for the equipper. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12003,
          Level: 4,
          AbilityName: "New Moon",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> generates <color=#2BAD00>4.5</color> Energy for the equipper. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12003,
          Level: 5,
          AbilityName: "New Moon",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> generates <color=#2BAD00>5</color> Energy for the equipper. This effect can trigger once every 12s.",
        },
      ],
      Name: "[Lunar] Noviluna",
      Rarity: 2,
      Icon: "Weapon_B_Common_03.png",
    },
    {
      ItemID: 12004,
      Text: "Weapon_B_Common_04",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 800,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: "This special W-Engine features a built-in sonic generator that converts collected energy into penetrating infrasound waves, thereby boosting its damage output. However, to activate this function, the operator needs to charge up enough power, and the first step of charging up is to use up any remaining energy in the W-Engine.",
      Abilities: [
        {
          WeaponID: 12004,
          Level: 1,
          AbilityName: "Changing Tides",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> increases all squad members' Impact by <color=#2BAD00>8%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12004,
          Level: 2,
          AbilityName: "Changing Tides",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> increases all squad members' Impact by <color=#2BAD00>9%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12004,
          Level: 3,
          AbilityName: "Changing Tides",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> increases all squad members' Impact by <color=#2BAD00>10%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12004,
          Level: 4,
          AbilityName: "Changing Tides",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> increases all squad members' Impact by <color=#2BAD00>11%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12004,
          Level: 5,
          AbilityName: "Changing Tides",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> increases all squad members' Impact by <color=#2BAD00>12%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
      ],
      Name: "[Reverb] Mark I",
      Rarity: 2,
      Icon: "Weapon_B_Common_04.png",
    },
    {
      ItemID: 12005,
      Text: "Weapon_B_Common_05",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 1600,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: "A standardized W-Engine with balanced performance. Despite lacking any particular tendencies, it enhances its owner's and it's owner's teammates' combat effectiveness in all aspects. For novice explorers who have not figured out their preferred combat style, this W-Engine is an excellent choice.",
      Abilities: [
        {
          WeaponID: 12005,
          Level: 1,
          AbilityName: "Roaring Waves",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color> increases all squad members' Anomaly Mastery and Anomaly Proficiency by <color=#2BAD00>10</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12005,
          Level: 2,
          AbilityName: "Roaring Waves",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color> increases all squad members' Anomaly Mastery and Anomaly Proficiency by <color=#2BAD00>12</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12005,
          Level: 3,
          AbilityName: "Roaring Waves",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color> increases all squad members' Anomaly Mastery and Anomaly Proficiency by <color=#2BAD00>13</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12005,
          Level: 4,
          AbilityName: "Roaring Waves",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color> increases all squad members' Anomaly Mastery and Anomaly Proficiency by <color=#2BAD00>15</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12005,
          Level: 5,
          AbilityName: "Roaring Waves",
          AbilityDes:
            "Launching an <color=#ffffff>EX Special Attack</color> or <color=#ffffff>Chain Attack</color> increases all squad members' Anomaly Mastery and Anomaly Proficiency by <color=#2BAD00>16</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
      ],
      Name: "[Reverb] Mark II",
      Rarity: 2,
      Icon: "Weapon_B_Common_05.png",
    },
    {
      ItemID: 12006,
      Text: "Weapon_B_Common_06",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 11102,
        Value: 800,
        Name: "HP",
        ShowForm: "{0:0.#%}",
      },
      Type: 4,
      Desc: "This special W-Engine features motion capture algorithms that monitor the status of the operator's teammates, enabling it to send signals to coordinate tactical movements and enhance the overall combat competency of the squad. However, this premise assumes that everyone can keep up with its signals instead of stepping on other members' toes...",
      Abilities: [
        {
          WeaponID: 12006,
          Level: 1,
          AbilityName: "Booming Sound",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases all squad members' ATK by <color=#2BAD00>8%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12006,
          Level: 2,
          AbilityName: "Booming Sound",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases all squad members' ATK by <color=#2BAD00>9%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12006,
          Level: 3,
          AbilityName: "Booming Sound",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases all squad members' ATK by <color=#2BAD00>10%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12006,
          Level: 4,
          AbilityName: "Booming Sound",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases all squad members' ATK by <color=#2BAD00>11%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
        {
          WeaponID: 12006,
          Level: 5,
          AbilityName: "Booming Sound",
          AbilityDes:
            "Launching a <color=#ffffff>Chain Attack</color> or <color=#ffffff>Ultimate</color> increases all squad members' ATK by <color=#2BAD00>12%</color> for 10s. This effect can trigger once every 20s. Passive effects of the same name do not stack.",
        },
      ],
      Name: "[Reverb] Mark III",
      Rarity: 2,
      Icon: "Weapon_B_Common_06.png",
    },
    {
      ItemID: 12007,
      Text: "Weapon_B_Common_07",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 800,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: "An energy-storage type W-Engine with a unique operation circuit. It will absorb scattered energy up to a certain amount before unleashing it, dealing some extra impact. It's impossible to control when that energy is unleashed, but when it is, it'll give you the joy of winning a prize draw.",
      Abilities: [
        {
          WeaponID: 12007,
          Level: 1,
          AbilityName: "Undercurrent",
          AbilityDes:
            "<color=#ffffff>EX Special Attacks</color> inflict <color=#2BAD00>10%</color> more Daze.",
        },
        {
          WeaponID: 12007,
          Level: 2,
          AbilityName: "Undercurrent",
          AbilityDes:
            "<color=#ffffff>EX Special Attacks</color> inflict <color=#2BAD00>11.5%</color> more Daze.",
        },
        {
          WeaponID: 12007,
          Level: 3,
          AbilityName: "Undercurrent",
          AbilityDes:
            "<color=#ffffff>EX Special Attacks</color> inflict <color=#2BAD00>13%</color> more Daze.",
        },
        {
          WeaponID: 12007,
          Level: 4,
          AbilityName: "Undercurrent",
          AbilityDes:
            "<color=#ffffff>EX Special Attacks</color> inflict <color=#2BAD00>14.5%</color> more Daze.",
        },
        {
          WeaponID: 12007,
          Level: 5,
          AbilityName: "Undercurrent",
          AbilityDes:
            "<color=#ffffff>EX Special Attacks</color> inflict <color=#2BAD00>16%</color> more Daze.",
        },
      ],
      Name: "[Vortex] Revolver",
      Rarity: 2,
      Icon: "Weapon_B_Common_07.png",
    },
    {
      ItemID: 12008,
      Text: "Weapon_B_Common_08",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12202,
        Value: 480,
        Name: "Impact",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: "A tactical W-Engine that locates enemies using high-frequency sound waves. Once it has marked its targets, it will activate its aiming aid to make the operator's precision attack more deadly. While this feature increases the operator's efficiency in battles, it may occasionally attract curious Ethereals from afar.",
      Abilities: [
        {
          WeaponID: 12008,
          Level: 1,
          AbilityName: "Tsunami",
          AbilityDes:
            "The equipper's attacks inflict <color=#2BAD00>8%</color> more Daze on their main target.",
        },
        {
          WeaponID: 12008,
          Level: 2,
          AbilityName: "Tsunami",
          AbilityDes:
            "The equipper's attacks inflict <color=#2BAD00>9%</color> more Daze on their main target.",
        },
        {
          WeaponID: 12008,
          Level: 3,
          AbilityName: "Tsunami",
          AbilityDes:
            "The equipper's attacks inflict <color=#2BAD00>10%</color> more Daze on their main target.",
        },
        {
          WeaponID: 12008,
          Level: 4,
          AbilityName: "Tsunami",
          AbilityDes:
            "The equipper's attacks inflict <color=#2BAD00>11%</color> more Daze on their main target.",
        },
        {
          WeaponID: 12008,
          Level: 5,
          AbilityName: "Tsunami",
          AbilityDes:
            "The equipper's attacks inflict <color=#2BAD00>12%</color> more Daze on their main target.",
        },
      ],
      Name: "[Vortex] Arrow",
      Rarity: 2,
      Icon: "Weapon_B_Common_08.png",
    },
    {
      ItemID: 12009,
      Text: "Weapon_B_Common_09",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 30502,
        Value: 1600,
        Name: "Energy Regen",
        ShowForm: "{0:0.#%}",
      },
      Type: 2,
      Desc: "This inverter W-Engine can generate excessive power and effectively increase its operator's battle prowess. However, due to its poor heat dissipation, it emits ear-splitting noise during battle. As a result, all squad members will need to wear earplugs.",
      Abilities: [
        {
          WeaponID: 12009,
          Level: 1,
          AbilityName: "Riptide",
          AbilityDes:
            "Upon entering combat or switching in, the equipper's Impact increases by <color=#2BAD00>9%</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12009,
          Level: 2,
          AbilityName: "Riptide",
          AbilityDes:
            "Upon entering combat or switching in, the equipper's Impact increases by <color=#2BAD00>10%</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12009,
          Level: 3,
          AbilityName: "Riptide",
          AbilityDes:
            "Upon entering combat or switching in, the equipper's Impact increases by <color=#2BAD00>11%</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12009,
          Level: 4,
          AbilityName: "Riptide",
          AbilityDes:
            "Upon entering combat or switching in, the equipper's Impact increases by <color=#2BAD00>12%</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12009,
          Level: 5,
          AbilityName: "Riptide",
          AbilityDes:
            "Upon entering combat or switching in, the equipper's Impact increases by <color=#2BAD00>13%</color> for 10s. This effect can trigger once every 20s.",
        },
      ],
      Name: "[Vortex] Hatchet",
      Rarity: 2,
      Icon: "Weapon_B_Common_09.png",
    },
    {
      ItemID: 12010,
      Text: "Weapon_B_Common_10",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 12102,
        Value: 800,
        Name: "ATK",
        ShowForm: "{0:0.#%}",
      },
      Type: 3,
      Desc: "This special W-Engine can analyze the target's weak spots through real-time calculations. Although its heavy exoskeleton can be a burden to the operator, some users have found it to be an efficient way to exercise and lose weight, and have thus become loyal customers.",
      Abilities: [
        {
          WeaponID: 12010,
          Level: 1,
          AbilityName: "Disordered Current",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Mastery by <color=#2BAD00>25</color> for 10s. This effect can trigger once every 20s. ",
        },
        {
          WeaponID: 12010,
          Level: 2,
          AbilityName: "Disordered Current",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Mastery by <color=#2BAD00>28</color> for 10s. This effect can trigger once every 20s. ",
        },
        {
          WeaponID: 12010,
          Level: 3,
          AbilityName: "Disordered Current",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Mastery by <color=#2BAD00>32</color> for 10s. This effect can trigger once every 20s. ",
        },
        {
          WeaponID: 12010,
          Level: 4,
          AbilityName: "Disordered Current",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Mastery by <color=#2BAD00>36</color> for 10s. This effect can trigger once every 20s. ",
        },
        {
          WeaponID: 12010,
          Level: 5,
          AbilityName: "Disordered Current",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Mastery by <color=#2BAD00>40</color> for 10s. This effect can trigger once every 20s. ",
        },
      ],
      Name: "[Magnetic Storm] Alpha",
      Rarity: 2,
      Icon: "Weapon_B_Common_10.png",
    },
    {
      ItemID: 12011,
      Text: "Weapon_B_Common_11",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 31203,
        Value: 24,
        Name: "Anomaly Proficiency",
        ShowForm: "{0:0}",
      },
      Type: 3,
      Desc: "This damage-type W-Engine features enhanced movement detection modules that can detect the operator's status in real-time and boost their combat prowess at critical moments to optimize battle efficiency. After the operator completes the finishing move, the W-Engine emits a dazzling multicolored flash and rates the operator's move.",
      Abilities: [
        {
          WeaponID: 12011,
          Level: 1,
          AbilityName: "High-Voltage Surge",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Proficiency by <color=#2BAD00>25</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12011,
          Level: 2,
          AbilityName: "High-Voltage Surge",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Proficiency by <color=#2BAD00>28</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12011,
          Level: 3,
          AbilityName: "High-Voltage Surge",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Proficiency by <color=#2BAD00>32</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12011,
          Level: 4,
          AbilityName: "High-Voltage Surge",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Proficiency by <color=#2BAD00>36</color> for 10s. This effect can trigger once every 20s.",
        },
        {
          WeaponID: 12011,
          Level: 5,
          AbilityName: "High-Voltage Surge",
          AbilityDes:
            "Accumulating Anomaly Buildup increases the equipper's Anomaly Proficiency by <color=#2BAD00>40</color> for 10s. This effect can trigger once every 20s.",
        },
      ],
      Name: "[Magnetic Storm] Bravo",
      Rarity: 2,
      Icon: "Weapon_B_Common_11.png",
    },
    {
      ItemID: 12012,
      Text: "Weapon_B_Common_12",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 23103,
        Value: 640,
        Name: "PEN Ratio",
        ShowForm: "{0:0.#%}",
      },
      Type: 3,
      Desc: "A high-capacity W-Engine that features a built-in generator, allowing it to keep a stable storage of electrical power without any manual operation from the operator. As a result, it proves to be exceptionally used in battle as its electric current can stun tough enemies.",
      Abilities: [
        {
          WeaponID: 12012,
          Level: 1,
          AbilityName: "Charge Overload",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper generates <color=#2BAD00>3.5</color> Energy. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12012,
          Level: 2,
          AbilityName: "Charge Overload",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper generates <color=#2BAD00>4</color> Energy. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12012,
          Level: 3,
          AbilityName: "Charge Overload",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper generates <color=#2BAD00>4.5</color> Energy. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12012,
          Level: 4,
          AbilityName: "Charge Overload",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper generates <color=#2BAD00>5</color> Energy. This effect can trigger once every 12s.",
        },
        {
          WeaponID: 12012,
          Level: 5,
          AbilityName: "Charge Overload",
          AbilityDes:
            "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper generates <color=#2BAD00>5.5</color> Energy. This effect can trigger once every 12s.",
        },
      ],
      Name: "[Magnetic Storm] Charlie",
      Rarity: 2,
      Icon: "Weapon_B_Common_12.png",
    },
    {
      ItemID: 12013,
      Text: "Weapon_B_Common_13",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 13102,
        Value: 1280,
        Name: "DEF",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: "A W-Engine with a component structure adjusted according to specific parameters. It can enhance the defensive capabilities of those who have a certain style of combat. If the user does not meet the requirements for this W-Engine, then carrying it would be like lugging around an over-sized shield in battle.",
      Abilities: [
        {
          WeaponID: 12013,
          Level: 1,
          AbilityName: "Sinking Strike",
          AbilityDes:
            "When attacked, the equipper's DEF increases by <color=#2BAD00>20%</color> for 8s.",
        },
        {
          WeaponID: 12013,
          Level: 2,
          AbilityName: "Sinking Strike",
          AbilityDes:
            "When attacked, the equipper's DEF increases by <color=#2BAD00>23%</color> for 8s.",
        },
        {
          WeaponID: 12013,
          Level: 3,
          AbilityName: "Sinking Strike",
          AbilityDes:
            "When attacked, the equipper's DEF increases by <color=#2BAD00>26%</color> for 8s.",
        },
        {
          WeaponID: 12013,
          Level: 4,
          AbilityName: "Sinking Strike",
          AbilityDes:
            "When attacked, the equipper's DEF increases by <color=#2BAD00>29%</color> for 8s.",
        },
        {
          WeaponID: 12013,
          Level: 5,
          AbilityName: "Sinking Strike",
          AbilityDes:
            "When attacked, the equipper's DEF increases by <color=#2BAD00>32%</color> for 8s.",
        },
      ],
      Name: "[Identity] Base",
      Rarity: 2,
      Icon: "Weapon_B_Common_13.png",
    },
    {
      ItemID: 12014,
      Text: "Weapon_B_Common_14",
      BaseProperty: {
        Property: 12101,
        Value: 32,
        Name: "Base ATK",
        ShowForm: "{0:0.#}",
      },
      RandProperty: {
        Property: 13102,
        Value: 1280,
        Name: "DEF",
        ShowForm: "{0:0.#%}",
      },
      Type: 5,
      Desc: "A functional W-Engine that specializes in energy conversion. It can analyze combat environments and generate special sounds to disrupt the enemy's attack. However, when facing a strong-willed enemy, you will still need to seize the right opportunity to attack. Luckily, most Ethereals lack the willpower to resist it.",
      Abilities: [
        {
          WeaponID: 12014,
          Level: 1,
          AbilityName: "Dazzle",
          AbilityDes:
            "When attacked, reduces the attacker's DMG by <color=#2BAD00>6%</color> for 12s.",
        },
        {
          WeaponID: 12014,
          Level: 2,
          AbilityName: "Dazzle",
          AbilityDes:
            "When attacked, reduces the attacker's DMG by <color=#2BAD00>7%</color> for 12s.",
        },
        {
          WeaponID: 12014,
          Level: 3,
          AbilityName: "Dazzle",
          AbilityDes:
            "When attacked, reduces the attacker's DMG by <color=#2BAD00>8%</color> for 12s.",
        },
        {
          WeaponID: 12014,
          Level: 4,
          AbilityName: "Dazzle",
          AbilityDes:
            "When attacked, reduces the attacker's DMG by <color=#2BAD00>9%</color> for 12s.",
        },
        {
          WeaponID: 12014,
          Level: 5,
          AbilityName: "Dazzle",
          AbilityDes:
            "When attacked, reduces the attacker's DMG by <color=#2BAD00>10%</color> for 12s.",
        },
      ],
      Name: "[Identity] Inflection",
      Rarity: 2,
      Icon: "Weapon_B_Common_14.png",
    },
  ],
  t = [
    { Rarity: 2, Level: 0, EnhanceRate: 0 },
    { Rarity: 2, Level: 1, EnhanceRate: 1568 },
    { Rarity: 2, Level: 2, EnhanceRate: 3136 },
    { Rarity: 2, Level: 3, EnhanceRate: 4705 },
    { Rarity: 2, Level: 4, EnhanceRate: 6273 },
    { Rarity: 2, Level: 5, EnhanceRate: 7841 },
    { Rarity: 2, Level: 6, EnhanceRate: 9409 },
    { Rarity: 2, Level: 7, EnhanceRate: 10977 },
    { Rarity: 2, Level: 8, EnhanceRate: 12545 },
    { Rarity: 2, Level: 9, EnhanceRate: 14114 },
    { Rarity: 2, Level: 10, EnhanceRate: 15682 },
    { Rarity: 2, Level: 11, EnhanceRate: 17250 },
    { Rarity: 2, Level: 12, EnhanceRate: 18818 },
    { Rarity: 2, Level: 13, EnhanceRate: 20386 },
    { Rarity: 2, Level: 14, EnhanceRate: 21954 },
    { Rarity: 2, Level: 15, EnhanceRate: 23523 },
    { Rarity: 2, Level: 16, EnhanceRate: 25091 },
    { Rarity: 2, Level: 17, EnhanceRate: 26659 },
    { Rarity: 2, Level: 18, EnhanceRate: 28227 },
    { Rarity: 2, Level: 19, EnhanceRate: 29795 },
    { Rarity: 2, Level: 20, EnhanceRate: 31363 },
    { Rarity: 2, Level: 21, EnhanceRate: 32932 },
    { Rarity: 2, Level: 22, EnhanceRate: 34500 },
    { Rarity: 2, Level: 23, EnhanceRate: 36068 },
    { Rarity: 2, Level: 24, EnhanceRate: 37636 },
    { Rarity: 2, Level: 25, EnhanceRate: 39204 },
    { Rarity: 2, Level: 26, EnhanceRate: 40772 },
    { Rarity: 2, Level: 27, EnhanceRate: 42341 },
    { Rarity: 2, Level: 28, EnhanceRate: 43909 },
    { Rarity: 2, Level: 29, EnhanceRate: 45477 },
    { Rarity: 2, Level: 30, EnhanceRate: 47045 },
    { Rarity: 2, Level: 31, EnhanceRate: 48613 },
    { Rarity: 2, Level: 32, EnhanceRate: 50181 },
    { Rarity: 2, Level: 33, EnhanceRate: 51750 },
    { Rarity: 2, Level: 34, EnhanceRate: 53318 },
    { Rarity: 2, Level: 35, EnhanceRate: 54886 },
    { Rarity: 2, Level: 36, EnhanceRate: 56454 },
    { Rarity: 2, Level: 37, EnhanceRate: 58022 },
    { Rarity: 2, Level: 38, EnhanceRate: 59590 },
    { Rarity: 2, Level: 39, EnhanceRate: 61159 },
    { Rarity: 2, Level: 40, EnhanceRate: 62727 },
    { Rarity: 2, Level: 41, EnhanceRate: 64295 },
    { Rarity: 2, Level: 42, EnhanceRate: 65863 },
    { Rarity: 2, Level: 43, EnhanceRate: 67431 },
    { Rarity: 2, Level: 44, EnhanceRate: 68999 },
    { Rarity: 2, Level: 45, EnhanceRate: 70568 },
    { Rarity: 2, Level: 46, EnhanceRate: 72136 },
    { Rarity: 2, Level: 47, EnhanceRate: 73704 },
    { Rarity: 2, Level: 48, EnhanceRate: 75272 },
    { Rarity: 2, Level: 49, EnhanceRate: 76840 },
    { Rarity: 2, Level: 50, EnhanceRate: 78408 },
    { Rarity: 2, Level: 51, EnhanceRate: 79977 },
    { Rarity: 2, Level: 52, EnhanceRate: 81545 },
    { Rarity: 2, Level: 53, EnhanceRate: 83113 },
    { Rarity: 2, Level: 54, EnhanceRate: 84681 },
    { Rarity: 2, Level: 55, EnhanceRate: 86249 },
    { Rarity: 2, Level: 56, EnhanceRate: 87817 },
    { Rarity: 2, Level: 57, EnhanceRate: 89386 },
    { Rarity: 2, Level: 58, EnhanceRate: 90954 },
    { Rarity: 2, Level: 59, EnhanceRate: 92522 },
    { Rarity: 2, Level: 60, EnhanceRate: 94090 },
    { Rarity: 3, Level: 0, EnhanceRate: 0 },
    { Rarity: 3, Level: 1, EnhanceRate: 1568 },
    { Rarity: 3, Level: 2, EnhanceRate: 3136 },
    { Rarity: 3, Level: 3, EnhanceRate: 4705 },
    { Rarity: 3, Level: 4, EnhanceRate: 6273 },
    { Rarity: 3, Level: 5, EnhanceRate: 7841 },
    { Rarity: 3, Level: 6, EnhanceRate: 9409 },
    { Rarity: 3, Level: 7, EnhanceRate: 10977 },
    { Rarity: 3, Level: 8, EnhanceRate: 12545 },
    { Rarity: 3, Level: 9, EnhanceRate: 14114 },
    { Rarity: 3, Level: 10, EnhanceRate: 15682 },
    { Rarity: 3, Level: 11, EnhanceRate: 17250 },
    { Rarity: 3, Level: 12, EnhanceRate: 18818 },
    { Rarity: 3, Level: 13, EnhanceRate: 20386 },
    { Rarity: 3, Level: 14, EnhanceRate: 21954 },
    { Rarity: 3, Level: 15, EnhanceRate: 23523 },
    { Rarity: 3, Level: 16, EnhanceRate: 25091 },
    { Rarity: 3, Level: 17, EnhanceRate: 26659 },
    { Rarity: 3, Level: 18, EnhanceRate: 28227 },
    { Rarity: 3, Level: 19, EnhanceRate: 29795 },
    { Rarity: 3, Level: 20, EnhanceRate: 31363 },
    { Rarity: 3, Level: 21, EnhanceRate: 32932 },
    { Rarity: 3, Level: 22, EnhanceRate: 34500 },
    { Rarity: 3, Level: 23, EnhanceRate: 36068 },
    { Rarity: 3, Level: 24, EnhanceRate: 37636 },
    { Rarity: 3, Level: 25, EnhanceRate: 39204 },
    { Rarity: 3, Level: 26, EnhanceRate: 40772 },
    { Rarity: 3, Level: 27, EnhanceRate: 42341 },
    { Rarity: 3, Level: 28, EnhanceRate: 43909 },
    { Rarity: 3, Level: 29, EnhanceRate: 45477 },
    { Rarity: 3, Level: 30, EnhanceRate: 47045 },
    { Rarity: 3, Level: 31, EnhanceRate: 48613 },
    { Rarity: 3, Level: 32, EnhanceRate: 50181 },
    { Rarity: 3, Level: 33, EnhanceRate: 51750 },
    { Rarity: 3, Level: 34, EnhanceRate: 53318 },
    { Rarity: 3, Level: 35, EnhanceRate: 54886 },
    { Rarity: 3, Level: 36, EnhanceRate: 56454 },
    { Rarity: 3, Level: 37, EnhanceRate: 58022 },
    { Rarity: 3, Level: 38, EnhanceRate: 59590 },
    { Rarity: 3, Level: 39, EnhanceRate: 61159 },
    { Rarity: 3, Level: 40, EnhanceRate: 62727 },
    { Rarity: 3, Level: 41, EnhanceRate: 64295 },
    { Rarity: 3, Level: 42, EnhanceRate: 65863 },
    { Rarity: 3, Level: 43, EnhanceRate: 67431 },
    { Rarity: 3, Level: 44, EnhanceRate: 68999 },
    { Rarity: 3, Level: 45, EnhanceRate: 70568 },
    { Rarity: 3, Level: 46, EnhanceRate: 72136 },
    { Rarity: 3, Level: 47, EnhanceRate: 73704 },
    { Rarity: 3, Level: 48, EnhanceRate: 75272 },
    { Rarity: 3, Level: 49, EnhanceRate: 76840 },
    { Rarity: 3, Level: 50, EnhanceRate: 78408 },
    { Rarity: 3, Level: 51, EnhanceRate: 79977 },
    { Rarity: 3, Level: 52, EnhanceRate: 81545 },
    { Rarity: 3, Level: 53, EnhanceRate: 83113 },
    { Rarity: 3, Level: 54, EnhanceRate: 84681 },
    { Rarity: 3, Level: 55, EnhanceRate: 86249 },
    { Rarity: 3, Level: 56, EnhanceRate: 87817 },
    { Rarity: 3, Level: 57, EnhanceRate: 89386 },
    { Rarity: 3, Level: 58, EnhanceRate: 90954 },
    { Rarity: 3, Level: 59, EnhanceRate: 92522 },
    { Rarity: 3, Level: 60, EnhanceRate: 94090 },
    { Rarity: 4, Level: 0, EnhanceRate: 0 },
    { Rarity: 4, Level: 1, EnhanceRate: 1568 },
    { Rarity: 4, Level: 2, EnhanceRate: 3136 },
    { Rarity: 4, Level: 3, EnhanceRate: 4705 },
    { Rarity: 4, Level: 4, EnhanceRate: 6273 },
    { Rarity: 4, Level: 5, EnhanceRate: 7841 },
    { Rarity: 4, Level: 6, EnhanceRate: 9409 },
    { Rarity: 4, Level: 7, EnhanceRate: 10977 },
    { Rarity: 4, Level: 8, EnhanceRate: 12545 },
    { Rarity: 4, Level: 9, EnhanceRate: 14114 },
    { Rarity: 4, Level: 10, EnhanceRate: 15682 },
    { Rarity: 4, Level: 11, EnhanceRate: 17250 },
    { Rarity: 4, Level: 12, EnhanceRate: 18818 },
    { Rarity: 4, Level: 13, EnhanceRate: 20386 },
    { Rarity: 4, Level: 14, EnhanceRate: 21954 },
    { Rarity: 4, Level: 15, EnhanceRate: 23523 },
    { Rarity: 4, Level: 16, EnhanceRate: 25091 },
    { Rarity: 4, Level: 17, EnhanceRate: 26659 },
    { Rarity: 4, Level: 18, EnhanceRate: 28227 },
    { Rarity: 4, Level: 19, EnhanceRate: 29795 },
    { Rarity: 4, Level: 20, EnhanceRate: 31363 },
    { Rarity: 4, Level: 21, EnhanceRate: 32932 },
    { Rarity: 4, Level: 22, EnhanceRate: 34500 },
    { Rarity: 4, Level: 23, EnhanceRate: 36068 },
    { Rarity: 4, Level: 24, EnhanceRate: 37636 },
    { Rarity: 4, Level: 25, EnhanceRate: 39204 },
    { Rarity: 4, Level: 26, EnhanceRate: 40772 },
    { Rarity: 4, Level: 27, EnhanceRate: 42341 },
    { Rarity: 4, Level: 28, EnhanceRate: 43909 },
    { Rarity: 4, Level: 29, EnhanceRate: 45477 },
    { Rarity: 4, Level: 30, EnhanceRate: 47045 },
    { Rarity: 4, Level: 31, EnhanceRate: 48613 },
    { Rarity: 4, Level: 32, EnhanceRate: 50181 },
    { Rarity: 4, Level: 33, EnhanceRate: 51750 },
    { Rarity: 4, Level: 34, EnhanceRate: 53318 },
    { Rarity: 4, Level: 35, EnhanceRate: 54886 },
    { Rarity: 4, Level: 36, EnhanceRate: 56454 },
    { Rarity: 4, Level: 37, EnhanceRate: 58022 },
    { Rarity: 4, Level: 38, EnhanceRate: 59590 },
    { Rarity: 4, Level: 39, EnhanceRate: 61159 },
    { Rarity: 4, Level: 40, EnhanceRate: 62727 },
    { Rarity: 4, Level: 41, EnhanceRate: 64295 },
    { Rarity: 4, Level: 42, EnhanceRate: 65863 },
    { Rarity: 4, Level: 43, EnhanceRate: 67431 },
    { Rarity: 4, Level: 44, EnhanceRate: 68999 },
    { Rarity: 4, Level: 45, EnhanceRate: 70568 },
    { Rarity: 4, Level: 46, EnhanceRate: 72136 },
    { Rarity: 4, Level: 47, EnhanceRate: 73704 },
    { Rarity: 4, Level: 48, EnhanceRate: 75272 },
    { Rarity: 4, Level: 49, EnhanceRate: 76840 },
    { Rarity: 4, Level: 50, EnhanceRate: 78408 },
    { Rarity: 4, Level: 51, EnhanceRate: 79977 },
    { Rarity: 4, Level: 52, EnhanceRate: 81545 },
    { Rarity: 4, Level: 53, EnhanceRate: 83113 },
    { Rarity: 4, Level: 54, EnhanceRate: 84681 },
    { Rarity: 4, Level: 55, EnhanceRate: 86249 },
    { Rarity: 4, Level: 56, EnhanceRate: 87817 },
    { Rarity: 4, Level: 57, EnhanceRate: 89386 },
    { Rarity: 4, Level: 58, EnhanceRate: 90954 },
    { Rarity: 4, Level: 59, EnhanceRate: 92522 },
    { Rarity: 4, Level: 60, EnhanceRate: 94090 },
  ],
  r = { ascension: e, professions: o, engines: a, leveling: t };

fs = require("fs");
fs.writeFileSync("./zzz.gg.weapons.json", JSON.stringify(r, null, 2), "utf-8");
