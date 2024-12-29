// priority: 0

/**
 * @author LingyunAwA, bot_undefined
 * @name YunKJS-CreateRecipe
 * @description 机械动力配方相关 KubeJS 脚本
 */

console.log('Loading KubeJS Code: "YunKJS-CreateRecipe.js"');

ServerEvents.recipes((e) => {
    const create = e.recipes.create;
    // Mixing 混合搅拌配方
    create
        .mixing(
            [Item.of("netherrack", 4)],
            [Fluid.lava(100 * 1), Item.of("cobblestone", 3), "nether_brick"]
        )
        .superheated();
    create
        .mixing(Item.of("kubejs:raw_random_block", 4), [
            Fluid.of("create_enchantment_industry:experience", 100 * 1),
            Item.of("create:framed_glass", 16),
            Item.of("minecraft:gold_ingot", 16),
        ])
        .heated();
    create
        .mixing("calcite", [Fluid.lava(100 * 1), "create:limestone"])
        .heated();
    create
        .mixing("enchanted_golden_apple", [
            Item.of("gold_block", 8),
            Item.of("apple", 1),
        ])
        .superheated();
    create
        .mixing("enchanted_golden_apple", [
            Fluid.of("create_enchantment_industry:hyper_experience", 100 * 1),
            Item.of("golden_apple", 1),
        ])
        .superheated();
    create
        .mixing([Item.of("glass", 3)], [Item.of("glass_bottle", 4)])
        .superheated();
    create
        .mixing("sponge", [
            Fluid.lava(100 * 1),
            Item.of("stone", 4),
            Item.of("coal_block", 1),
        ])
        .heated();
    create.mixing(
        [Fluid.of("kubejs:melon_juice", 1000 / 3)],
        [Item.of("melon_slice", 4), Item.of("sugar", 1)]
    );
    create
        .mixing(
            [Fluid.of("kubejs:mysterious_liquid", 100 * 1)],
            [
                Item.of("netherite_ingot", 2),
                Item.of("diamond", 2),
                Item.of("kubejs:c_coin", 1),
            ]
        )
        .superheated();
    create
        .mixing(
            [
                Item.of("create:crimsite").withChance(0.8),
                Item.of("iron_ore").withChance(0.2),
            ],
            [
                Item.of("iron_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobblestone", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:crimsite").withChance(0.8),
                Item.of("deepslate_iron_ore").withChance(0.2),
            ],
            [
                Item.of("iron_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobbled_deepslate", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:asurine").withChance(0.8),
                Item.of("create:zinc_ore").withChance(0.2),
            ],
            [
                Item.of("create:zinc_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobblestone", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:asurine").withChance(0.8),
                Item.of("create:deepslate_zinc_ore").withChance(0.2),
            ],
            [
                Item.of("create:zinc_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobbled_deepslate", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:ochrum").withChance(0.8),
                Item.of("gold_ore").withChance(0.2),
            ],
            [
                Item.of("gold_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobblestone", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:ochrum").withChance(0.8),
                Item.of("deepslate_gold_ore").withChance(0.2),
            ],
            [
                Item.of("gold_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobbled_deepslate", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:veridium").withChance(0.8),
                Item.of("copper_ore").withChance(0.2),
            ],
            [
                Item.of("copper_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobblestone", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("create:veridium").withChance(0.8),
                Item.of("deepslate_copper_ore").withChance(0.2),
            ],
            [
                Item.of("copper_ingot", 1),
                Item.of("netherrack", 1),
                Item.of("cobbled_deepslate", 1),
                Fluid.water(100 * 1),
            ]
        )
        .heated();
    create.mixing(
        [Fluid.of("kubejs:apple_juice", 100 * 1)],
        [Item.of("vinery:apple_mash", 1)]
    );
    create
        .mixing(
            [Fluid.of("create_central_kitchen:apple_cider", 1000 / 3)],
            [Item.of("vinery:apple_mash", 2), Item.of("sugar", 1)]
        )
        .heated();
    create
        .mixing(
            [Fluid.of("create_central_kitchen:apple_cider", 1000 / 3)],
            [Fluid.of("kubejs:apple_juice", 1000 / 3), Item.of("sugar", 1)]
        )
        .heated();
    create
        .mixing(
            [
                Item.of("kubejs:s_coin", 2).withChance(0.7),
                Item.of("kubejs:c_coin", 2).withChance(0.3),
            ],
            [
                Fluid.of("kubejs:mysterious_liquid", 100 * 1),
                Fluid.of(
                    "create_enchantment_industry:hyper_experience",
                    100 * 1
                ),
                "#kubejs:magic_balls",
            ]
        )
        .superheated();
    create
        .mixing(
            [Item.of("mekanism:ingot_bronze", 4)],
            [Item.of("mekanism:ingot_tin", 1), Item.of("copper_ingot", 3)]
        )
        .heated();
    create
        .mixing("kubejs:manmade_budding_amethyst", [
            Fluid.of("create_enchantment_industry:hyper_experience", 100 * 1),
            Fluid.lava(100 * 1),
            Item.of("calcite", 16),
            Item.of("obsidian", 16),
            Item.of("amethyst_block", 16),
        ])
        .superheated();
    create
        .mixing(
            [Fluid.of("kubejs:reinforce_liquid", 100 * 1)],
            [
                Item.of("kubejs:redstone_reinforce_gem"),
                Item.of("create:experience_nugget", 4),
            ]
        )
        .superheated();
    create.mixing(
        [Fluid.of("createcafe:durian_tea", 100 * 5)],
        [
            Item.of("fruitsdelight:durian"),
            Fluid.of("minecraft:milk", 250),
            Fluid.of("createcafe:melted_sugar", 250),
        ]
    );
    // Compacting 压块
    create
        .compacting("kubejs:raw_humanmade_diamond", [
            Fluid.lava(),
            Item.of("coal_block", 8),
        ])
        .superheated();
    create
        .compacting(
            [
                Item.of("kubejs:oxidized_iron_ingot", 1).withChance(0.8),
                Item.of("create:crushed_raw_iron").withChance(0.2),
            ],
            [Fluid.water(100 * 1), Item.of("iron_ingot", 1)]
        )
        .heated();
    create
        .compacting(
            [
                Item.of("kubejs:raw_reinforced_deepslate").withChance(0.5),
                Item.of("deepslate", 8).withChance(0.5),
            ],
            [
                Fluid.lava(),
                Item.of("chiseled_deepslate", 8),
                Item.of("diamond", 8),
                Item.of("obsidian", 8),
            ]
        )
        .superheated();
    create
        .compacting(Item.of("kubejs:random_block", 8), [
            Fluid.lava(),
            Item.of("kubejs:raw_random_block", 8),
            Item.of("minecraft:diamond", 2),
        ])
        .superheated();
    create.compacting(Fluid.of("kubejs:red_grapejuice", 100 * 1), [
        Item.of("vinery:red_grape", 3),
    ]);
    create.compacting(Fluid.of("kubejs:white_grapejuice", 100 * 1), [
        Item.of("vinery:white_grape", 3),
    ]);
    create.compacting(Fluid.of("kubejs:red_taiga_grapejuice", 100 * 1), [
        Item.of("vinery:taiga_grapes_red", 3),
    ]);
    create.compacting(Fluid.of("kubejs:white_taiga_grapejuice", 100 * 1), [
        Item.of("vinery:taiga_grapes_white", 3),
    ]);
    create.compacting(Fluid.of("kubejs:red_jungle_grapejuice", 100 * 1), [
        Item.of("vinery:jungle_grapes_red", 3),
    ]);
    create.compacting(Fluid.of("kubejs:white_jungle_grapejuice", 100 * 1), [
        Item.of("vinery:jungle_grapes_white", 3),
    ]);
    create.compacting(Fluid.of("kubejs:red_savanna_grapejuice", 100 * 1), [
        Item.of("vinery:savanna_grapes_red", 3),
    ]);
    create.compacting(Fluid.of("kubejs:white_savanna_grapejuice", 100 * 1), [
        Item.of("vinery:savanna_grapes_white", 3),
    ]);
    create.compacting("kubejs:powered_milk_bar", [
        Fluid.of("minecraft:milk", 100 * 1),
        Item.of("minecraft:sugar", 1),
        Item.of("minecraft:paper", 1),
    ]);
    create.compacting("kubejs:iron_patronus", [
        Fluid.of("create_enchantment_industry:hyper_experience", 100 * 1),
        Item.of("iron_block", 4),
        Item.of("carved_pumpkin", 1),
    ]);
    // Pressing 辊压
    create.pressing(
        [
            Item.of(
                "kubejs:music_disc_if_i_can_stop_one_heart_from_breaking"
            ).withChance(0.02),
            Item.of("kubejs:music_disc_sway_to_my_beat_in_cosmos").withChance(
                0.02
            ),
            Item.of(
                "kubejs:music_disc_hope_is_the_thing_with_feathers"
            ).withChance(0.02),
            Item.of("kubejs:music_disc_had_i_not_seen_the_sun").withChance(
                0.02
            ),
            Item.of("kubejs:c_coin").withChance(0.42),
            Item.empty.withChance(0.5),
        ],
        "kubejs:empty_music_disc"
    );
    create.pressing(
        [
            Item.of("kubejs:empty_music_disc"),
            Item.of("kubejs:empty_music_disc").withChance(0.25),
        ],
        "#minecraft:creeper_drop_music_discs"
    );
    // Filling 注液
    create.filling("farmersdelight:hot_cocoa", [
        "glass_bottle",
        Fluid.of("create:chocolate", 1000 / 3),
    ]);
    create.filling("farmersdelight:melon_juice", [
        "glass_bottle",
        Fluid.of("kubejs:melon_juice", 1000 / 3),
    ]);
    create.filling("vinery:apple_juice", [
        Item.of("vinery:wine_bottle"),
        Fluid.of("kubejs:apple_juice", 100 * 1),
    ]);
    create.filling("vinery:apple_juice", [
        "glass_bottle",
        Fluid.of("kubejs:apple_juice", 1000 / 3),
    ]);
    create.filling("kubejs:melon_juice_bucket", [
        "bucket",
        Fluid.of("kubejs:melon_juice"),
    ]);
    create.filling("vinery:red_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:red_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:white_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:white_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:red_taiga_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:red_taiga_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:white_taiga_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:white_taiga_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:red_jungle_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:red_jungle_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:white_jungle_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:white_jungle_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:red_savanna_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:red_savanna_grapejuice", 100 * 1),
    ]);
    create.filling("vinery:white_savanna_grapejuice", [
        "vinery:wine_bottle",
        Fluid.of("kubejs:white_savanna_grapejuice", 100 * 1),
    ]);
    create.filling("kubejs:reinforced_redstone_dust", [
        "minecraft:redstone",
        Fluid.of("kubejs:reinforce_liquid", 100 * 5),
    ]);
    //Milling 用石墨磨制
    create.milling(
        [
            Item.of("raw_iron").withChance(0.5),
            Item.of("create:crushed_raw_iron").withChance(0.5),
        ],
        [Item.of("kubejs:oxidized_iron_ingot")]
    );
    create.milling(
        [
            Item.of("kubejs:c_coin").withChance(0.3),
            Item.of("hay_block").withChance(0.7),
        ],
        [Item.of("kubejs:superblock")]
    );
    create.milling(
        [
            Item.of("mekanism:dust_fluorite", 3),
            Item.of("mekanism:dust_fluorite", 2).withChance(0.5),
        ],
        [Item.of("kubejs:raw_fluorite")]
    );
    create.milling(["mekanism:dust_sulfur"], ["kubejs:sulfur"]);
    create.milling(["ae2:sky_dust"], ["ae2:sky_stone_block"]);
    //Deploying 机械手部署
    create.deploying(
        [Item.of("kubejs:reinforced_quartz_glass")],
        ["ae2:quartz_glass", "kubejs:reinforced_redstone_dust"]
    );
    //Crushing 粉碎
    //Mechanical Crafting 动力合成器合成
    create.mechanical_crafting(
        "cobweb",
        ["A A A", " AAA ", "AAAAA", " AAA ", "A A A"],
        {
            A: "string",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_weather_ball_rain",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "water_bucket",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_weather_ball_storm",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "lightning_rod",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_weather_ball_clear",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "lava_bucket",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_time_ball_day",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "farmersdelight:hot_cocoa",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_time_ball_night",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "farmersdelight:apple_cider",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_storm_ball_clear",
        ["ACACA", " AAA ", "AABAA", " AAA ", "ACACA"],
        {
            A: "ae2:quartz_glass",
            B: "kubejs:s_coin",
            C: "minecraft:lava_bucket",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_storm_ball_tornado",
        ["ACACA", " AAA ", "AABAA", " AAA ", "ACACA"],
        {
            A: "create:encased_fan",
            B: "kubejs:s_coin",
            C: "minecraft:water_bucket",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_storm_ball_snow",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "minecraft:snow_block",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_storm_ball_sand",
        ["A A A", " AAA ", "AABAA", " AAA ", "A A A"],
        {
            A: "minecraft:sand",
            B: "kubejs:s_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_action_ball_magnet",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "minecraft:sugar",
            B: "kubejs:s_coin",
            C: "minecraft:fermented_spider_eye",
            D: "vinery:magnetic_wine",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_action_ball_teleport",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "minecraft:feather",
            B: "kubejs:s_coin",
            C: "minecraft:fermented_spider_eye",
            D: "vinery:chorus_wine",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_action_ball_reinforce",
        ["A A A", " ACA ", "ACBCA", " ACA ", "A A A"],
        {
            A: "minecraft:golden_apple",
            B: "kubejs:s_coin",
            C: "minecraft:fermented_spider_eye",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_action_ball_speed",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "minecraft:sugar",
            B: "kubejs:s_coin",
            C: "minecraft:fermented_spider_eye",
            D: "minecraft:rabbit_foot",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_devil_ball_kill",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "minecraft:diamond_sword",
            B: "kubejs:s_coin",
            C: "minecraft:tnt",
            D: "kubejs:c_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_devil_ball_poison",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "minecraft:spider_eye",
            B: "kubejs:s_coin",
            C: "minecraft:pufferfish",
            D: "kubejs:c_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_devil_ball_undying",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "minecraft:totem_of_undying",
            B: "kubejs:s_coin",
            C: "minecraft:diamond_sword",
            D: "kubejs:c_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:magic_devil_ball_fluid_clear",
        ["A D A", " ACA ", "ACBCA", " ACA ", "A D A"],
        {
            A: "bucket",
            B: "kubejs:s_coin",
            C: "minecraft:sponge",
            D: "kubejs:c_coin",
        }
    );
    create.mechanical_crafting(
        "kubejs:firstmade_cell_component_256k",
        ["ABCBA", "FCGCF", "BDEDB", "FCDCF", "ABCBA"],
        {
            A: "ae2:sky_dust",
            B: "#forge:gems/source",
            C: "create:brass_sheet",
            D: "ae2:cell_component_64k",
            E: "kubejs:reinforced_quartz_glass",
            F: "create:precision_mechanism",
            G: "ae2:calculation_processor",
        }
    );
    //倒出液态
    create.emptying(
        [Fluid.of("kubejs:melon_juice", 1000 / 3), "glass_bottle"],
        "farmersdelight:melon_juice"
    );
    create.emptying(
        [Fluid.of("kubejs:apple_juice", 100 * 1), "vinery:wine_bottle"],
        "vinery:apple_juice"
    );
    create.emptying(
        [Fluid.of("create:chocolate", 1000 / 3), "glass_bottle"],
        "farmersdelight:hot_cocoa"
    );
    create.emptying(
        [Fluid.of("kubejs:melon_juice"), "bucket"],
        "kubejs:melon_juice_bucket"
    );
    create.emptying(
        [Fluid.of("kubejs:red_grapejuice", 100 * 1), "vinery:wine_bottle"],
        "vinery:red_grapejuice"
    );
    create.emptying(
        [Fluid.of("kubejs:white_grapejuice", 100 * 1), "vinery:wine_bottle"],
        "vinery:white_grapejuice"
    );
    create.emptying(
        [
            Fluid.of("kubejs:red_taiga_grapejuice", 100 * 1),
            "vinery:wine_bottle",
        ],
        "vinery:red_taiga_grapejuice"
    );
    create.emptying(
        [
            Fluid.of("kubejs:white_taiga_grapejuice", 100 * 1),
            "vinery:wine_bottle",
        ],
        "vinery:white_taiga_grapejuice"
    );
    create.emptying(
        [
            Fluid.of("kubejs:red_jungle_grapejuice", 100 * 1),
            "vinery:wine_bottle",
        ],
        "vinery:red_jungle_grapejuice"
    );
    create.emptying(
        [
            Fluid.of("kubejs:white_jungle_grapejuice", 100 * 1),
            "vinery:wine_bottle",
        ],
        "vinery:white_jungle_grapejuice"
    );
    create.emptying(
        [
            Fluid.of("kubejs:red_savanna_grapejuice", 100 * 1),
            "vinery:wine_bottle",
        ],
        "vinery:red_savanna_grapejuice"
    );
    create.emptying(
        [
            Fluid.of("kubejs:white_savanna_grapejuice", 100 * 1),
            "vinery:wine_bottle",
        ],
        "vinery:white_savanna_grapejuice"
    );
});
//动力造石机造石配方
ServerEvents.recipes((e) => {
    e.recipes.create_mechanical_extruder.extruding(
        Item.of("minecraft:cobblestone", 4),
        [Fluid.of("minecraft:lava", 1000), Fluid.of("minecraft:water", 1000)]
    );
    e.recipes.create_mechanical_extruder.extruding(
        Item.of("create:limestone", 4),
        [Fluid.of("minecraft:lava", 1000), Fluid.of("create:honey", 1000)]
    );
    e.recipes.create_mechanical_extruder.extruding(
        Item.of("create:scoria", 4),
        [Fluid.of("minecraft:lava", 1000), Fluid.of("create:chocolate", 1000)]
    );
    e.recipes.create_mechanical_extruder.extruding(
        Item.of("minecraft:basalt", 4),
        [Fluid.of("minecraft:lava", 1000), Item.of("minecraft:blue_ice")],
        Item.of("minecraft:soul_sand")
    );
});
//矿石开凿配方
ServerEvents.recipes((event) => {
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.uranium"), "mekanism:raw_uranium")
        .placement(384, 64, 64825186)
        .biomeWhitelist("minecraft:is_overworld")
        .id("kubejs:uranium_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.lead"), "mekanism:raw_lead")
        .placement(128, 8, 64833334)
        .biomeWhitelist("minecraft:is_overworld")
        .id("kubejs:lead_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.tin"), "mekanism:raw_tin")
        .placement(128, 8, 64833335)
        .biomeWhitelist("minecraft:is_overworld")
        .id("kubejs:tin_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.osmium"), "mekanism:raw_osmium")
        .placement(512, 32, 64833336)
        .biomeWhitelist("minecraft:is_overworld")
        .id("kubejs:osmium_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.fluorite"), "kubejs:raw_fluorite")
        .placement(128, 8, 64833337)
        .biomeWhitelist("minecraft:is_overworld")
        .id("kubejs:fluorite_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(
            Text.translate("vein.kubejs.reinforced_gem"),
            "kubejs:redstone_reinforce_gem"
        )
        .placement(512, 32, 64833338)
        .biomeWhitelist("minecraft:is_nether")
        .id("kubejs:reinforced_gem_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(
            Text.translate("vein.kubejs.degeneration_gem"),
            "kubejs:degeneration_gem"
        )
        .placement(512, 32, 64833339)
        .biomeWhitelist("minecraft:is_nether")
        .id("kubejs:degeneration_gem_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.sulfur"), "kubejs:sulfur")
        .placement(128, 16, 64833340)
        .biomeWhitelist("minecraft:is_nether")
        .id("kubejs:sulfur_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .vein(Text.translate("vein.kubejs.salt"), "mekanism:salt")
        .placement(128, 16, 64833341)
        .biomeWhitelist("minecraft:is_ocean")
        .id("kubejs:salt_vein")
        .priority(1000);
    event.recipes.createoreexcavation
        .drilling(
            [
                Item.of("mekanism:raw_uranium").withChance(0.4),
                Item.of("minecraft:cobblestone").withChance(0.6),
            ],
            "kubejs:uranium_vein",
            1800
        )
        .drill("createoreexcavation:netherite_drill")
        .fluid("minecraft:lava 10")
        .stress(1024)
        .id("kubejs:uranium_vein_excavation");
    event.recipes.createoreexcavation
        .drilling([Item.of("mekanism:raw_lead")], "kubejs:lead_vein", 1200)
        .drill("#createoreexcavation:drills")
        .stress(512)
        .id("kubejs:lead_vein_excavation");
    event.recipes.createoreexcavation
        .drilling([Item.of("mekanism:raw_tin")], "kubejs:tin_vein", 600)
        .drill("#createoreexcavation:drills")
        .stress(256)
        .id("kubejs:tin_vein_excavation");
    event.recipes.createoreexcavation
        .drilling([Item.of("mekanism:raw_osmium")], "kubejs:osmium_vein", 1200)
        .drill("createoreexcavation:netherite_drill")
        .stress(512)
        .id("kubejs:osmium_vein_excavation");
    event.recipes.createoreexcavation
        .drilling([Item.of("kubejs:raw_fluorite")], "kubejs:fluorite_vein", 600)
        .drill("#createoreexcavation:drills")
        .stress(256)
        .id("kubejs:fluorite_vein_excavation");
    event.recipes.createoreexcavation
        .drilling(
            [
                Item.of("kubejs:redstone_reinforce_gem").withChance(0.2),
                Item.of("minecraft:blackstone").withChance(0.8),
            ],
            "kubejs:reinforced_gem_vein",
            6000
        )
        .drill("createoreexcavation:netherite_drill")
        .fluid("minecraft:lava 10")
        .stress(1024)
        .id("kubejs:reinforced_gem_vein_excavation");
    event.recipes.createoreexcavation
        .drilling(
            [
                Item.of("kubejs:degeneration_gem").withChance(0.2),
                Item.of("minecraft:netherrack").withChance(0.8),
            ],
            "kubejs:degeneration_gem_vein",
            6000
        )
        .drill("createoreexcavation:netherite_drill")
        .fluid("minecraft:lava 10")
        .stress(1024)
        .id("kubejs:degeneration_gem_vein_excavation");
    event.recipes.createoreexcavation
        .drilling([Item.of("kubejs:sulfur")], "kubejs:sulfur_vein", 600)
        .drill("#createoreexcavation:drills")
        .stress(256)
        .id("kubejs:sulfur_vein_excavation");
    event.recipes.createoreexcavation
        .drilling([Item.of("mekanism:salt")], "kubejs:salt_vein", 300)
        .drill("#createoreexcavation:drills")
        .stress(256)
        .id("kubejs:salt_vein_excavation");
});

