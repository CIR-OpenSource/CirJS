console.log('Loading KubeJS Code: "new_item.js"');
StartupEvents.registry("item", (event) => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event
        .create("kubejs:melon_juice_bucket")
        .displayName("Melon Juice Bucket")
        .modelJson("kubejs:item/melon_juice_bucket")
        .containerItem("bucket")
        .parentModel("minecraft:milk_bucket")
        .unstackable()
        .tag("minecraft:bucket")
        .food((food) => {
            food.hunger(8)
                .saturation(1)
                .effect("minecraft:slowness", 2400, 1, 0.6)
                .effect("minecraft:regeneration", 300, 1, 1)
                .effect("minecraft:mining_fatigue", 2400, 1, 0.4)
                .effect("minecraft:nausea", 200, 0, 0.6)
                .eaten((foodEaten) => {
                    let player = foodEaten.getPlayer();
                    let server = foodEaten.getServer();
                    if (player != null) {
                        player.give("bucket");
                        server.tell(
                            Text.gold(
                                Text.translate(
                                    "item.kubejs.melon_juice_bucket.eaten",
                                    player.username
                                )
                            )
                        );
                        server.runCommand(
                            "playsound minecraft:entity.arrow.hit_player master @a"
                        );
                    }
                });
        })
        .useAnimation("drink");
    event
        .create("kubejs:powered_milk_bar")
        .displayName("Powered Milk Bar")
        .tooltip(Text.translate("tooltip.kubejs.powered_milk_bar"))
        .food((food) => {
            food.hunger(2)
                .alwaysEdible()
                .saturation(1.5)
                .effect("kubejs:antitoxic", 20 * 300, 0, 1);
        })
        .useAnimation("eat");
    event
        .create("kubejs:radiation_bread")
        .displayName("Radiation Bread")
        .tooltip(Text.translate("tooltip.kubejs.radiation_bread").red())
        .food((food) => {
            food.hunger(10)
                .alwaysEdible()
                .saturation(1.5)
                .effect("minecraft:strength", 20 * 120, 4, 1)
                .effect("minecraft:speed", 20 * 120, 3, 1)
                .effect("minecraft:haste", 20 * 120, 3, 1)
                .effect("ars_nouveau:mana_regen", 20 * 120, 1, 1)
                .effect("vinery:health_effect", 20 * 120, 3, 1)
                .effect("kubejs:radiation", 20 * 1, 1, 1)
                .eaten((foodEaten) => {
                    let player = foodEaten.getPlayer();
                    let server = foodEaten.getServer();
                    if (player != null) {
                        server.tell(
                            Text.red(
                                Text.translate(
                                    "item.kubejs.radiation_bread.eaten",
                                    player.username
                                )
                            )
                        );
                    }
                });
        })
        .useAnimation("eat");
    event
        .create("kubejs:radiation_resistant_capsule")
        .displayName("Radiation Resistant Capsule")
        .tooltip(Text.translate("tooltip.kubejs.radiation_resistant_capsule"))
        .rarity("epic")
        .food((food) => {
            food.hunger(2)
                .alwaysEdible()
                .saturation(1.5)
                .effect("minecraft:regeneration", 20 * 60, 0, 1)
                .effect("kubejs:anti_radiation", 20 * 60, 1, 1);
        })
        .useAnimation("eat");
    event
        .create("kubejs:iron_patronus")
        .displayName("Iron Patronus")
        .tooltip(Text.translate("tooltip.kubejs.iron_patronus"))
        .rarity("rare");
    event
        .create(
            "kubejs:incomplete_reinforced_deepslate",
            "create:sequenced_assembly"
        )
        .displayName("Incomplete Reinforced Deepslate")
        .modelJson("kubejs:item/incomplete_reinforced_deepslate");
    event
        .create(
            "kubejs:incomplete_budding_amethyst",
            "create:sequenced_assembly"
        )
        .displayName("Incomplete Budding Amethyst")
        .modelJson("kubejs:incomplete_budding_amethyst")
        .rarity("rare");
    event
        .create("kubejs:incomplete_infinity_cell", "create:sequenced_assembly")
        .displayName("Incomplete Infinite Cell")
        .rarity("uncommon");
    event
        .create("kubejs:oxidized_iron_ingot")
        .texture("kubejs:item/oxidized_iron_ingot")
        .displayName("Oxidized Iron Ingot");
    event
        .create("kubejs:raw_humanmade_diamond")
        .texture("kubejs:item/raw_humanmade_diamond")
        .displayName("Raw Humanmade Diamond")
        .tooltip(Text.translate("tooltip.kubejs.raw_humanmade_diamond"));
    event
        .create(
            "kubejs:incomplete_humanmade_diamond",
            "create:sequenced_assembly"
        )
        .texture("kubejs:item/incomplete_humanmade_diamond")
        .displayName("Incomplete Humammade Diamond");
    event
        .create("kubejs:c_coin")
        .displayName("Junior Coin")
        .rarity("rare")
        .tag("kubejs:coins");
    event
        .create("kubejs:incomplete_c_coin", "create:sequenced_assembly")
        .displayName("Incomplete Junior Coin")
        .rarity("uncommon");
    event
        .create("kubejs:s_coin")
        .displayName("Senior Coin")
        .rarity("epic")
        .tag("kubejs:coins");
    event
        .create("kubejs:incomplete_s_coin", "create:sequenced_assembly")
        .displayName("Incomplete Senior Coin")
        .rarity("rare");
    event
        .create("kubejs:raw_teleportation_core")
        .displayName("Raw Teleportation Core")
        .tooltip(Text.translate("tooltip.kubejs.raw_teleportation_core"))
        .rarity("uncommon");
    event
        .create(
            "kubejs:incomplete_teleportation_core",
            "create:sequenced_assembly"
        )
        .displayName("Incomplete Teleportation Core")
        .rarity("uncommon");
    event
        .create("kubejs:firstmade_cell_component_256k")
        .displayName("Firstmade Cell Component 256k")
        .tooltip(Text.translate("tooltip.kubejs.firstmade_cell_component_256k"))
        .rarity("rare");
    event
        .create(
            "kubejs:incomplete_cell_component_256k",
            "create:sequenced_assembly"
        )
        .displayName("Incomplete Cell Component 256k")
        .rarity("rare");
    event
        .create("kubejs:raw_warp_scroll")
        .displayName("Raw Warp Scroll")
        .tooltip(Text.translate("tooltip.kubejs.raw_warp_scroll"));
    event
        .create("kubejs:incomplete_warp_scroll", "create:sequenced_assembly")
        .displayName("Incomplete Warp Scroll");
    event
        .create("kubejs:redstone_reinforce_gem")
        .displayName("Redstone Reinforce Gem")
        .tooltip(Text.translate("tooltip.kubejs.redstone_reinforce_gem"))
        .rarity("rare");
    event
        .create("kubejs:degeneration_gem")
        .displayName("Degeneration Gem")
        .tooltip(Text.translate("tooltip.kubejs.degeneration_gem").red())
        .rarity("rare");
    event
        .create("kubejs:eternal_certus_gem")
        .displayName("Eternal Certus Gem")
        .tooltip(Text.translate("tooltip.kubejs.eternal_certus_gem"))
        .rarity("epic");
    event
        .create("kubejs:reinforced_redstone_dust")
        .displayName("Reinforced Redstone Dust")
        .tooltip(Text.translate("tooltip.kubejs.reinforced_redstone_dust"))
        .rarity("rare")
        .maxStackSize(16);
    event.create("kubejs:raw_fluorite").displayName("Raw Fluorite");
    event.create("kubejs:sulfur").displayName("Sulfur");
    event
        .create("kubejs:magic_weather_ball_rain")
        .tooltip("§b雨 Rain")
        .displayName("Magic Weather Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .modelJson("kubejs:magic_weather_ball_rain")
        .maxStackSize(16);
    event
        .create("kubejs:magic_weather_ball_storm")
        .tooltip("§b雷 Thunder")
        .displayName("Magic Weather Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .modelJson("kubejs:magic_weather_ball_storm")
        .maxStackSize(16);
    event
        .create("kubejs:magic_weather_ball_clear")
        .tooltip("§b晴 Clear")
        .displayName("Magic Weather Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .modelJson("kubejs:magic_weather_ball_clear")
        .maxStackSize(16);
    event
        .create("kubejs:magic_time_ball_day")
        .tooltip("§e昼 Day")
        .displayName("Magic Time Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .modelJson("kubejs:magic_time_ball_day")
        .maxStackSize(16);
    event
        .create("kubejs:magic_time_ball_night")
        .tooltip("§5夜 Night")
        .displayName("Magic Time Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .modelJson("kubejs:magic_time_ball_night")
        .maxStackSize(16);
    event
        .create("kubejs:magic_storm_ball_clear")
        .tooltip("§b风暴清除 Storm Clear")
        .tooltip(Text.translate("tooltip.kubejs.magic_storm_ball_clear"))
        .displayName("Magic Storm Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .texture("kubejs:item/tickball")
        .maxStackSize(16);
    event
        .create("kubejs:magic_storm_ball_tornado")
        .tooltip("§b龙卷风 tornado")
        .tooltip(Text.translate("tooltip.kubejs.magic_storm_ball_tornado"))
        .displayName("Magic Storm Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .texture("kubejs:item/tickball")
        .maxStackSize(16);
    event
        .create("kubejs:magic_storm_ball_snow")
        .tooltip("§b暴风雪 Snow Storm")
        .tooltip(Text.translate("tooltip.kubejs.magic_storm_ball_snow"))
        .displayName("Magic Storm Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .texture("kubejs:item/tickball")
        .maxStackSize(16);
    event
        .create("kubejs:magic_storm_ball_sand")
        .tooltip("§b沙尘暴 Sand Storm")
        .tooltip(Text.translate("tooltip.kubejs.magic_storm_ball_sand"))
        .texture("kubejs:item/tickball")
        .displayName("Magic Storm Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_action_ball_reinforce")
        .tooltip("§6强化 Reinforce")
        .tooltip(
            Text.translate("tooltip.kubejs.magic_action_ball_reinforce").red()
        )
        .texture("kubejs:item/special_ball")
        .displayName("Magic Action Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_action_ball_speed")
        .tooltip("§6速度 Speed")
        .tooltip(Text.translate("tooltip.kubejs.magic_action_ball_speed").red())
        .texture("kubejs:item/special_ball")
        .displayName("Magic Action Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_action_ball_magnet")
        .tooltip("§6磁力 Magnet")
        .tooltip(
            Text.translate("tooltip.kubejs.magic_action_ball_magnet").red()
        )
        .texture("kubejs:item/special_ball")
        .displayName("Magic Action Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_action_ball_teleport")
        .tooltip("§6传送 Teleport")
        .tooltip(
            Text.translate("tooltip.kubejs.magic_action_ball_teleport").red()
        )
        .texture("kubejs:item/special_ball")
        .displayName("Magic Action Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_devil_ball_kill")
        .tooltip("§c击杀 Kill")
        .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_kill"))
        .texture("kubejs:item/devil_ball")
        .displayName("Magic Devil Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_devil_ball_poison")
        .tooltip("§c中毒 Poison")
        .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_poison"))
        .texture("kubejs:item/devil_ball")
        .displayName("Magic Devil Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_devil_ball_undying")
        .tooltip("§c死缓 Temp-Undying")
        .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_undying"))
        .texture("kubejs:item/devil_ball")
        .displayName("Magic Devil Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_devil_ball_fluid_clear")
        .tooltip("§c清理流体 Clear Fluid")
        .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_fluid_clear"))
        .texture("kubejs:item/devil_ball")
        .displayName("Magic Devil Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:magic_devil_ball_fill")
        .tooltip("§c填充 Fill")
        .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_fill"))
        .texture("kubejs:item/devil_ball")
        .displayName("Magic Devil Ball")
        .tag("kubejs:magic_balls")
        .rarity("epic")
        .maxStackSize(16);
    event
        .create("kubejs:empty_music_disc", "music_disc")
        .displayName("Empty Music Disc")
        .tooltip("§7For Crafting Special Music Discs")
        .rarity("uncommon")
        .song("weather.rain", 10)
        .tag("kubejs:custom_discs_v4");
});
