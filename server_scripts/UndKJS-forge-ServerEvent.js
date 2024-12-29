/**
 * @author bot_undefined
 * @name UndKJS-ServerEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-ServerEvent.js"');
// 修改战利品表
ServerEvents.entityLootTables((event) => {
    event.modifyEntity("creeper", (Loot) => {
        Loot.addPool((pool) => {
            pool.entityProperties("killer", {
                type: "minecraft:player",
                equipment: {
                    mainhand: {
                        items: ["minecraft:bow"],
                    },
                },
            });
            pool.addTag("kubejs:custom_discs", true).weight(1);
            pool.addEmpty(9);
        });
    });
});
// 自定义指令
ServerEvents.customCommand("stopmusic", (event) => {
    event.server.runCommand(`stopsound ${event.player.username} record`);
    event.player.tell("Music stopped.").green();
});
// 自定义标签
ServerEvents.tags("item", (event) => {
    event.add("c:storage_blocks", "#forge:storage_blocks");
    event.add("c:glass_blocks", "#forge:glass");
    event.add("c:ingots", "#forge:ingots");
    event.add("c:nuggets", "#forge:nuggets");
    event.add("c:ores", "#forge:ores");
    event.add("c:plates", "#forge:plates");
    event.add("c:dyes", "#forge:dyes");
    event.add("c:tools", "#forge:tools");
    event.add("c:weapons", "#forge:weapons");
    event.add("c:armors", "#forge:armors");
    event.add("c:stone", "#create:stonetypes");
    event.add("c:seeds", "#forge:seeds");
    event.add("c:cape", "#trinkets:chest/cape");
    event.add("forge:crude_oil", "createdieselgenerators:crude_oil"),
        event.add(
            "forge:crude_oil",
            "createdieselgenerators:flowing_crude_oil"
        ),
        event.add("minecraft:creeper_drop_music_discs", "#kubejs:custom_discs");
    event.add("forge:fruits/grape", [
        "vinery:red_grape",
        "vinery:white_grape",
        "vinery:red_taiga_grape",
        "vinery:white_taiga_grape",
        "vinery:red_jungle_grape",
        "vinery:white_jungle_grape",
        "vinery:red_savanna_grape",
        "vinery:white_savanna_grape",
    ]);
    event.add("create:upright_on_belt", "kubejs:melon_juice_bucket");
    event.add("create:upright_on_belt", "farmersdelight:apple_cider");
    event.add("create:upright_on_belt", "farmersdelight:melon_juice");
    event.add("create:upright_on_belt", "vinery:apple_juice");
    event.add("create:upright_on_belt", "vinery:wine_bottle");
    event.add("create:upright_on_belt", "vinery:red_grapejuice");
    event.add("create:upright_on_belt", "vinery:white_grapejuice");
    event.add("create:upright_on_belt", "vinery:red_taiga_grapejuice");
    event.add("create:upright_on_belt", "vinery:white_taiga_grapejuice");
    event.add("create:upright_on_belt", "vinery:red_jungle_grapejuice");
    event.add("create:upright_on_belt", "vinery:white_jungle_grapejuice");
    event.add("create:upright_on_belt", "vinery:red_savanna_grapejuice");
    event.add("create:upright_on_belt", "vinery:white_savanna_grapejuice");
});
// 自定义方块掉落
ServerEvents.blockLootTables((e) => {
    e.addBlock("kubejs:random_block", (loot) => {
        loot.addPool((pool) => {
            pool.addTag("c:dyes", true).weight(10);
            pool.addTag("c:storage_blocks", true).weight(2);
            pool.addTag("c:glass_blocks", true).weight(20);
            pool.addTag("c:stone", true).weight(20);
            pool.addTag("c:ingots", true).weight(5);
            pool.addTag("c:nuggets", true).weight(12);
            pool.addTag("c:ores", true).weight(4);
            pool.addTag("c:plates", true).weight(4);
            pool.addTag("c:tools", true).weight(1);
            pool.addTag("c:weapons", true).weight(1);
            pool.addTag("c:armors", true).weight(1);
            pool.addTag("c:cape", true).weight(1);
            pool.addTag("kubejs:coins", true).weight(1);
            pool.addTag("kubejs:magic_balls", true).weight(1);
            pool.addTag("kubejs:custom_discs_v3", true).weight(2);
            pool.addItem("create:precision_mechanism").weight(5).count(2);
            pool.addItem("create:electron_tube").weight(5).count(2);
            pool.addItem("minecraft:tnt").weight(6).count(2);
            pool.addItem("minecraft:ender_pearl").weight(8).count(4);
            pool.addItem("minecraft:packed_ice").weight(20).count(16);
            pool.addItem("minecraft:blaze_powder").weight(10).count(2);
            pool.addItem("minecraft:ghast_tear").weight(5).count(2);
            pool.addItem("minecraft:magma_cream").weight(10).count(2);
            pool.addItem("minecraft:quartz").weight(10).count(4);
            pool.addItem("minecraft:diamond").weight(8).count(8);
            pool.addItem("minecraft:elytra").weight(2);
            pool.addItem("minecraft:phantom_membrane").weight(15).count(4);
            pool.addItem("minecraft:netherite_upgrade_smithing_template")
                .weight(3)
                .count(2);
            pool.addItem("minecraft:netherite_ingot").weight(1).count(4);
            pool.addItem("minecraft:bookshelf").weight(10);
            pool.addItem("minecraft:heart_of_the_sea").weight(1);
            pool.addItem("kubejs:superblock").weight(30).count(1);
            pool.addItem("kubejs:empty_music_disc").weight(8);
            pool.addItem(
                Item.of(
                    "minecraft:netherite_sword",
                    '{Enchantments:[{id:"minecraft:looting",lvl:5s},{id:"kubejs:damage_bonus",lvl:6s}]}'
                )
            ).weight(1);
            pool.addItem(
                Item.of(
                    "minecraft:netherite_axe",
                    '{Enchantments:[{id:"minecraft:fire_aspect",lvl:4s},{id:"kubejs:damage_bonus",lvl:6s},{id:"kubejs:rapid_cooldown",lvl:4s}]}'
                )
            ).weight(1);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:damage_bonus",lvl:4s}]}'
                )
            ).weight(3);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:damage_bonus",lvl:5s}]}'
                )
            ).weight(2);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:health_theft",lvl:3s}]}'
                )
            ).weight(3);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:health_theft",lvl:4s}]}'
                )
            ).weight(2);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:toxic",lvl:1s}]}'
                )
            ).weight(5);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:toxic",lvl:2s}]}'
                )
            ).weight(4);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:wither",lvl:1s}]}'
                )
            ).weight(5);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:wither",lvl:2s}]}'
                )
            ).weight(4);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:magic_attack",lvl:1s}]}'
                )
            ).weight(4);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:magic_attack",lvl:2s}]}'
                )
            ).weight(3);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:rapid_cooldown",lvl:1s}]}'
                )
            ).weight(5);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:rapid_cooldown",lvl:2s}]}'
                )
            ).weight(4);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:duel",lvl:2s}]}'
                )
            ).weight(8);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:duel",lvl:3s}]}'
                )
            ).weight(8);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:blood_thirsty",lvl:2s}]}'
                )
            ).weight(5);
            pool.addItem(
                Item.of(
                    "minecraft:enchanted_book",
                    '{Enchantments:[{id:"kubejs:blood_thirsty",lvl:3s}]}'
                )
            ).weight(4);
        });
    });
});
ServerEvents.chestLootTables((event) => {
    event.modify("minecraft:end_city_treasure", (loot) => {
        loot.addPool((pool) => {
            pool.addItem("kubejs:radiation_resistant_capsule").weight(3);
            pool.addItem("kubejs:redstone_reinforce_gem").weight(3);
            pool.addItem("kubejs:c_coin").weight(1);
            pool.addItem("kubejs:s_coin").weight(1);
            pool.addEmpty(2);
        });
        loot.addPool((pool) => {
            pool.addItem("kubejs:radiation_resistant_capsule").weight(2);
            pool.addItem("kubejs:radiation_resistant_capsule")
                .count(2)
                .weight(1);
            pool.addItem("kubejs:redstone_reinforce_gem").weight(2);
            pool.addItem("kubejs:degeneration_gem").weight(2);
            pool.addTag("forge:gems", true).weight(2);
            pool.addItem("kubejs:c_coin").weight(2);
            pool.addItem("kubejs:s_coin").weight(1);
        });
    });
});
ServerEvents.chestLootTables((event) => {
    event.modify("minecraft:buried_treasure", (loot) => {
        loot.addPool((pool) => {
            pool.addTag("forge:gems", true).weight(5);
            pool.addItem("kubejs:redstone_reinforce_gem").weight(4);
            pool.addItem("kubejs:degeneration_gem").weight(3);
            pool.addItem("kubejs:eternal_certus_gem").weight(2);
        });
        loot.addPool((pool) => {
            pool.addTag("kubejs:coins", true).weight(5);
            pool.addItem("kubejs:redstone_reinforce_gem").weight(4);
            pool.addItem("kubejs:eternal_certus_gem").weight(1);
        });
    });
});
ServerEvents.chestLootTables((event) => {
    event.modify("minecraft:woodland_mansion", (loot) => {
        loot.addPool((pool) => {
            pool.addTag("forge:gems", true).weight(10);
            pool.addItem("kubejs:degeneration_gem").weight(15);
            pool.addItem("kubejs:eternal_certus_gem").weight(3);
            pool.addItem("kubejs:eternal_certus_gem").count(2).weight(1);
        });
        loot.addPool((pool) => {
            pool.addTag("forge:gems", true).weight(3);
            pool.addTag("forge:storage_blocks", true).weight(4);
            pool.addItem("kubejs:eternal_certus_gem").weight(2);
            pool.addItem("kubejs:eternal_certus_gem").count(2).weight(1);
        });
        loot.addPool((pool) => {
            pool.addTag("forge:gems", true).weight(2);
            pool.addTag("kubejs:coins", true).weight(3);
            pool.addItem("kubejs:eternal_certus_gem").weight(2);
            pool.addItem("kubejs:eternal_certus_gem").count(2).weight(1);
        });
    });
});
