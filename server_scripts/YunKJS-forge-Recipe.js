// priority: 0

/**
 * @author LingyunAwA, bot_undefined
 * @name YunKJS-Recipe
 * @description 普通配方相关 KubeJS 脚本
 */

console.log('Loading KubeJS Code: "YunKJS-Recipe.js"');

ServerEvents.recipes((e) => {
    // 无序合成
    e.shapeless("create:dough", "farmersdelight:wheat_dough");
    e.shapeless("farmersdelight:wheat_dough", "create:dough");
    e.shapeless("kubejs:radiation_bread", [
        "minecraft:bread",
        "mekanism:yellow_cake_uranium",
        "minecraft:sugar",
        "minecraft:blaze_powder",
    ]);
    //切石机
    e.stonecutting("kubejs:warning_sign", "create:iron_sheet");
    // 熔炉
    e.smelting("create:scorchia", "create:scoria", 0.1, 20 * 10);
    //有序合成
    e.shaped(
        Item.of("minecraft:elytra", 1), // arg 1: output
        [
            "ADA",
            "BCB", // arg 2: the shape (array of strings)
            "BEB",
        ],
        {
            A: "minecraft:feather",
            B: "minecraft:phantom_membrane", //arg 3: the mapping object
            C: "minecraft:nether_star",
            D: "minecraft:diamond",
            E: "minecraft:netherite_ingot",
        }
    );
    e.shaped(
        Item.of("minecraft:heart_of_the_sea", 1), // arg 1: output
        [
            "ABA",
            "BCB", // arg 2: the shape (array of strings)
            "ABA",
        ],
        {
            A: "minecraft:diamond",
            B: "botania:elementium_ingot", //arg 3: the mapping object
            C: "minecraft:beacon",
        }
    );
    e.shaped(
        Item.of("kubejs:empty_music_disc", 1), // arg 1: output
        [
            "ABA",
            "BCB", // arg 2: the shape (array of strings)
            "ABA",
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:diamond", //arg 3: the mapping object
            C: "kubejs:c_coin",
        }
    );
    e.shaped(
        Item.of("kubejs:raw_teleportation_core", 1), // arg 1: output
        [
            "ADA",
            "BCB", // arg 2: the shape (array of strings)
            "ADA",
        ],
        {
            A: "minecraft:lapis_lazuli",
            B: "minecraft:gold_ingot", //arg 3: the mapping object
            C: "kubejs:s_coin",
            D: "mekanism:alloy_atomic",
        }
    );
    e.shaped(Item.of("kubejs:raw_warp_scroll", 1), ["AAA", "ACB", "BBB"], {
        A: "#forge:gems/lapis",
        C: "ars_nouveau:blank_parchment",
        B: "#forge:gems/source",
    });
    e.shaped(Item.of("ae2:wireless_booster", 1), ["ABC", "DED", " D "], {
        A: "#forge:dusts/fluix",
        B: "#ae2:all_certus_quartz",
        C: "#forge:dusts/ender_pearl",
        D: "#forge:ingots/iron",
        E: "kubejs:c_coin",
    });
    e.shaped(Item.of("ae2:wireless_receiver", 1), ["DAD", "BCB", "EBE"], {
        A: "ae2:fluix_pearl",
        B: "#forge:ingots/iron",
        C: "ae2:quartz_fiber",
        D: "mekanism:hdpe_sheet",
        E: "#forge:storage_blocks/coal",
    });
    e.shaped(Item.of("ae2:cell_component_64k", 1), ["ABA", "DCD", "ADA"], {
        A: "#forge:dusts/glowstone",
        B: "ae2:calculation_processor",
        C: "kubejs:reinforced_quartz_glass",
        D: "ae2:cell_component_16k",
    });
    e.shaped(
        Item.of("create_mechanical_extruder:mechanical_extruder"),
        [" A ", "BCB", " B "],
        {
            A: "create:shaft",
            B: "#forge:glass",
            C: "create:andesite_casing",
        }
    );
});

