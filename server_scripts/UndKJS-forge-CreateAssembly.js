// priority: 0

/**
 * @author bot_undefined
 * @name UndKJS-CreateAssembly
 * @description 机械动力序列组装相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-CreateAssembly.js"');
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_humanmade_diamond";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("diamond").withChance(0.8),
                Item.of("coal_block", 6).withChance(0.2),
            ],
            "kubejs:raw_humanmade_diamond",
            [e.recipes.createPressing(inter, inter)]
        )
        .transitionalItem(inter)
        .loops(10); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_reinforced_deepslate";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("reinforced_deepslate").withChance(0.5),
                Item.of("diamond_block").withChance(0.2),
                Item.of("coal_block").withChance(0.2),
                Item.of("deepslate").withChance(0.1),
            ],
            "kubejs:raw_reinforced_deepslate",
            [
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("lava", 100 * 1),
                ]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of(
                        "create_enchantment_industry:hyper_experience",
                        100 * 1
                    ),
                ]),
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("createdeco:netherite_sheet"),
                ]),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(5); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_c_coin";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("kubejs:c_coin").withChance(0.8),
                Item.of("gold_ingot", 2).withChance(0.2),
            ],
            "create:golden_sheet",
            [
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("lava", 100 * 1),
                ]),
                e.recipes.createPressing(inter, inter),
                e.recipes.createCutting(inter, inter),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("create_enchantment_industry:experience", 100 * 1),
                ]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("create_enchantment_industry:ink", 100 * 1),
                ]),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(5); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_s_coin";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("kubejs:s_coin").withChance(0.7),
                Item.of("netherite_ingot", 3).withChance(0.3),
            ],
            "kubejs:c_coin",
            [
                e.recipes.createDeploying(inter, [inter, Item.of("diamond")]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("lava", 100 * 1),
                ]),
                e.recipes.createPressing(inter, inter),
                e.recipes.createCutting(inter, inter),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of(
                        "create_enchantment_industry:hyper_experience",
                        100 * 1
                    ),
                ]),
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("netherite_ingot"),
                ]),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(5); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_teleportation_core";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("mekanism:teleportation_core").withChance(0.8),
                Item.of("kubejs:s_coin").withChance(0.2),
            ],
            "kubejs:raw_teleportation_core",
            [
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("mekanism:hdpe_sheet"),
                ]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of(
                        "create_enchantment_industry:hyper_experience",
                        100 * 2
                    ),
                ]),
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("minecraft:ender_pearl"),
                ]),
                e.recipes.createPressing(inter, inter),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(2); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_warp_scroll";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("ars_nouveau:warp_scroll").withChance(0.8),
                Item.of("ars_nouveau:blank_parchment", 1).withChance(0.2),
            ],
            "kubejs:raw_warp_scroll",
            [
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("botania:terrasteel_ingot"),
                ]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of(
                        "create_enchantment_industry:hyper_experience",
                        100 * 1
                    ),
                ]),
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("minecraft:ender_pearl"),
                ]),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(2); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_budding_amethyst";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("budding_amethyst").withChance(0.5),
                Item.of("obsidian", 4).withChance(0.2),
                Item.of("amethyst_block", 8).withChance(0.2),
                Item.of("netherite_ingot").withChance(0.1),
            ],
            "kubejs:manmade_budding_amethyst",
            [
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("lava", 100 * 1),
                ]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of(
                        "create_enchantment_industry:hyper_experience",
                        100 * 1
                    ),
                ]),
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("createdeco:netherite_sheet"),
                ]),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(5); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_cell_component_256k";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of("ae2:cell_component_256k").withChance(0.8),
                Item.of("ae2:cell_component_64k", 8).withChance(0.2),
            ],
            "kubejs:firstmade_cell_component_256k",
            [
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("kubejs:eternal_certus_gem"),
                ]),
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("mekanism:heavy_water", 100 * 1),
                ]),
                e.recipes.createDeploying(inter, [
                    inter,
                    Item.of("mekanism:pellet_antimatter"),
                ]),
                e.recipes.createPressing(inter, inter),
                e.recipes.createPressing(inter, inter),
            ]
        )
        .transitionalItem(inter)
        .loops(3); // set the transitional item and the number of loops
});
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_infinity_cell";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of(
                    "expatternprovider:infinity_cell",
                    '{record:{"#c":"ae2:f",id:"minecraft:water"}}'
                ),
            ],
            "ae2:cell_component_256k",
            [
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("minecraft:water", 1000 * 1),
                ]),
            ]
        )
        .transitionalItem(inter)
        .loops(10000);
});
/* ServerEvents.recipes((e) => {
    let inter  = "kubejs:incomplete_infinity_cell";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}')
            ],
            "ae2:cell_component_256k",
            [
                e.recipes.createDeploying(
                    inter, 
                    [
                        inter,
                        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')
                    ]
                ),
                e.recipes.createDeploying(
                    inter, 
                    [
                        inter,
                        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:lava"}}')
                    ]
                )
            ]
        )
        .transitionalItem(inter)
        .loops(1)
}) */
ServerEvents.recipes((e) => {
    let inter = "kubejs:incomplete_infinity_cell";
    e.recipes.create
        .sequenced_assembly(
            [
                Item.of(
                    "expatternprovider:infinity_cell",
                    '{record:{"#c":"ae2:f",id:"minecraft:lava"}}'
                ),
            ],
            "ae2:cell_component_256k",
            [
                e.recipes.createFilling(inter, [
                    inter,
                    Fluid.of("minecraft:lava", 1000 * 1),
                ]),
            ]
        )
        .transitionalItem(inter)
        .loops(10000);
});

