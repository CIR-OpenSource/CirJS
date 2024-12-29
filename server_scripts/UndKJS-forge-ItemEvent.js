/**
 * @author bot_undefined
 * @name UndKJS-ItemEvent
 * @description 物品事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-ItemEvent.js"');
ItemEvents.rightClicked("kubejs:iron_patronus", (event) => {
    event.item.count--;
    event.player.tell(Text.translate("event.kubejs.iron_patronus.0").aqua());
    event.player.potionEffects.add("kubejs:golem", 24000, 0);
});
ItemEvents.rightClicked("kubejs:magic_weather_ball_rain", (event) => {
    event.item.count--;
    event.player.giveInHand("minecraft:snowball");
    event.server.runCommand("weather rain");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:weather`
    );
    event.server.tell(Text.translate("event.kubejs.magic_weather_ball_rain.0"));
});
ItemEvents.rightClicked("kubejs:magic_weather_ball_storm", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommand("weather thunder");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:weather`
    );
    event.server.tell(
        Text.translate("event.kubejs.magic_weather_ball_storm.0")
    );
});
ItemEvents.rightClicked("kubejs:magic_weather_ball_clear", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommand("weather clear");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:weather`
    );
    event.server.tell(
        Text.translate("event.kubejs.magic_weather_ball_clear.0")
    );
});
ItemEvents.rightClicked("kubejs:magic_time_ball_day", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommand("time set day");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:day`
    );
    event.server.tell(Text.translate("event.kubejs.magic_time_ball_day.0"));
});
ItemEvents.rightClicked("kubejs:magic_time_ball_night", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommand("time set night");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:day`
    );
    event.server.tell(Text.translate("event.kubejs.magic_time_ball_night.0"));
});
ItemEvents.rightClicked("kubejs:magic_storm_ball_clear", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommand("weather2 kill_all_storms");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:storm`
    );
    event.server.tell(Text.translate("event.kubejs.magic_storm_ball_clear.0"));
});
ItemEvents.rightClicked("kubejs:magic_storm_ball_tornado", (event) => {
    let x = event.player.getX();
    let z = event.player.getZ();
    if (event.player.hasPermissions(1) || event.player.hasPermissions(4)) {
        event.item.count--;
        event.player.give("minecraft:snowball");
        event.server.runCommand(
            `execute at ${event.player.username} run weather2 summon tornado_f2`
        );
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:storm`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_storm_ball_tornado.0",
                event.player.username,
                x,
                z
            )
                .red()
                .bold()
        );
    } else {
        event.item.count--;
        event.player.give("kubejs:s_coin");
        event.player.tell(
            Text.translate("event.kubejs.magic_storm_ball_tornado.1")
        );
    }
});
ItemEvents.rightClicked("kubejs:magic_storm_ball_snow", (event) => {
    let x = event.player.getX();
    let z = event.player.getZ();
    if (event.player.hasPermissions(1) || event.player.hasPermissions(4)) {
        event.item.count--;
        event.player.give("minecraft:snowball");
        event.server.runCommand(
            `execute at ${event.player.username} run weather2 summon snowstorm_try`
        );
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:storm`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_storm_ball_snow.0",
                event.player.username,
                x,
                z
            )
                .red()
                .bold()
        );
    } else {
        event.item.count--;
        event.player.give("kubejs:s_coin");
        event.player.tell(
            Text.translate("event.kubejs.magic_storm_ball_tornado.1")
        );
    }
});
ItemEvents.rightClicked("kubejs:magic_storm_ball_sand", (event) => {
    let x = event.player.getX();
    let z = event.player.getZ();
    if (event.player.hasPermissions(1) || event.player.hasPermissions(4)) {
        event.item.count--;
        event.player.give("minecraft:snowball");
        event.server.runCommand(
            `execute at ${event.player.username} run weather2 summon sandstorm_try`
        );
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:storm`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_storm_ball_sand.0",
                event.player.username,
                x,
                z
            )
                .red()
                .bold()
        );
    } else {
        event.item.count--;
        event.player.give("kubejs:s_coin");
        event.player.tell(
            Text.translate("event.kubejs.magic_storm_ball_tornado.1")
        );
    }
});

/*
  ItemEvents.rightClicked(
    "kubejs:magic_storm_ball_snow", event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommandSilent(`advancement grant ${event.player.username} only createadvance:tick`)
      event.server.tell(Text.translate("event.kubejs.magic_storm_ball_snow.0",event.player.username))
      event.server.scheduleInTicks(100,() =>{
        event.server.tell(Text.translate("event.kubejs.magic_storm_ball_snow.1"))
        event.server.scheduleInTicks(100,() =>{
          event.server.tell(Text.translate("event.kubejs.magic_storm_ball_snow.2"))
          event.server.runCommand('tick warp 12000')
        })
    })})
  ItemEvents.rightClicked(
    "kubejs:magic_storm_ball_sand", event => {
        event.item.count--
        event.player.give('minecraft:snowball')
        event.server.runCommandSilent(`advancement grant ${event.player.username} only createadvance:tick`)
        event.server.tell(Text.translate("event.kubejs.magic_storm_ball_sand.0",event.player.username))
        event.server.scheduleInTicks(100,() =>{
          event.server.tell(Text.translate("event.kubejs.magic_storm_ball_sand.1"))
          event.server.scheduleInTicks(100,() =>{
            event.server.tell(Text.translate("event.kubejs.magic_storm_ball_sand.2"))
            event.server.runCommand('tick rate 10')
            event.server.scheduleInTicks(600,() =>{
              event.server.tell(Text.translate("event.kubejs.magic_storm_ball_sand.3"))
              event.server.runCommand('tick rate 20')
        })
      })
  })})
      */
ItemEvents.rightClicked("kubejs:magic_action_ball_reinforce", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:action`
    );
    event.server.runCommandSilent(
        `effect give ${event.player.username} instant_damage 10 4`
    );
    event.server.scheduleInTicks(2, () => {
        event.server.runCommandSilent(
            `effect give ${event.player.username} resistance 600 5`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} conduit_power 600 0`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} strength 600 5`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} absorption 600 4`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} glowing 600 0`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} luck 600 0`
        );
        event.server.tell(
            Text.red(
                Text.translate(
                    "event.kubejs.magic_action_ball_reinforce.0",
                    event.player.username
                )
            )
        );
    });
});
ItemEvents.rightClicked("kubejs:magic_action_ball_speed", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:action`
    );
    event.server.runCommandSilent(
        `effect give ${event.player.username} instant_damage 10 2`
    );
    event.server.scheduleInTicks(2, () => {
        event.server.runCommandSilent(
            `effect give ${event.player.username} speed 600 5`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} jump_boost 600 2`
        );
        event.server.tell(
            Text.red(
                Text.translate(
                    "event.kubejs.magic_action_ball_speed.0",
                    event.player.username
                )
            )
        );
    });
});
ItemEvents.rightClicked("kubejs:magic_action_ball_magnet", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:action`
    );
    event.server.runCommandSilent(
        `effect give ${event.player.username} instant_damage 10 2`
    );
    event.server.scheduleInTicks(2, () => {
        event.server.runCommandSilent(
            `effect give ${event.player.username} vinery:magnet 600 3`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} speed 600 1`
        );
        event.server.tell(
            Text.red(
                Text.translate(
                    "event.kubejs.magic_action_ball_magnet.0",
                    event.player.username
                )
            )
        );
    });
});
ItemEvents.rightClicked("kubejs:magic_action_ball_teleport", (event) => {
    event.item.count--;
    event.player.give("minecraft:snowball");
    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only createadvance:action`
    );
    event.server.runCommandSilent(
        `effect give ${event.player.username} instant_damage 10 1`
    );
    event.server.scheduleInTicks(2, () => {
        event.server.runCommandSilent(
            `execute at ${event.player.username} run tp ${event.player.username} ~ ~100 ~`
        );
        event.server.runCommandSilent(
            `effect give ${event.player.username} slow_falling 60 0`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_action_ball_teleport.1",
                event.player.username
            ).green()
        );
    });
});
EntityEvents.hurt((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    const player = target.isPlayer() ? target : null;
    if (player != null && sourc.getType() == "outOfWorld") {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:void_hurt`
        );
        if (
            player.getOffHandItem().id == "kubejs:magic_devil_ball_undying" &&
            player.health < 9
        ) {
            player.teleportTo(0, 80, 0);
            player.getOffHandItem().count--;
            server.runCommandSilent(
                `advancement grant ${player.username} only createadvance:devil`
            );
            player.give("minecraft:snowball");
            player.tell(Text.translate("event.kubejs.magic_ball_auto").red());
            server.scheduleInTicks(2, () => {
                player.tell(
                    Text.green(
                        Text.translate(
                            "event.kubejs.magic_devil_ball_undying.0"
                        )
                    )
                );
                server.runCommandSilent(
                    `advancement grant ${player.username} only createadvance:void_rescue`
                );
                server.runCommandSilent(
                    `execute at ${player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 glass`
                );
                server.scheduleInTicks(2, () => {
                    server.runCommandSilent(
                        `execute at ${player.username} run fill ~-3 ~-2 ~-3 ~3 ~3 ~3 air`
                    );
                    server.scheduleInTicks(96, () => {
                        player.tell(
                            Text.green(
                                Text.translate(
                                    "event.kubejs.magic_devil_ball_undying.1"
                                )
                            )
                        );
                        server.scheduleInTicks(100, () => {
                            player.kill();
                            server.tell(
                                Text.green(
                                    Text.translate(
                                        "event.kubejs.magic_devil_ball_undying.2",
                                        player.username
                                    )
                                )
                            );
                        });
                    });
                });
            });
        }
    }
});
EntityEvents.death((event) => {
    const target = event.getEntity();
    const server = event.getServer();
    const player = target.isPlayer() ? target : null;
    if (player != null) {
        if (player.getOffHandItem().id == "kubejs:magic_devil_ball_undying") {
            player.teleportTo(0, 80, 0);
            player.getOffHandItem().count--;
            server.runCommandSilent(
                `advancement grant ${player.username} only createadvance:devil`
            );
            player.give("minecraft:snowball");
            player.tell(Text.translate("event.kubejs.magic_ball_auto").red());
            server.scheduleInTicks(1, () => {
                player.tell(
                    Text.green(
                        Text.translate(
                            "event.kubejs.magic_devil_ball_undying.0"
                        )
                    )
                );
                server.runCommandSilent(
                    `execute at ${player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 glass`
                );
                server.scheduleInTicks(1, () => {
                    server.runCommandSilent(
                        `execute at ${player.username} run fill ~-3 ~-2 ~-3 ~3 ~3 ~3 air`
                    );
                    server.scheduleInTicks(96, () => {
                        player.tell(
                            Text.green(
                                Text.translate(
                                    "event.kubejs.magic_devil_ball_undying.1"
                                )
                            )
                        );
                        server.scheduleInTicks(100, () => {
                            player.kill();
                            server.tell(
                                Text.green(
                                    Text.translate(
                                        "event.kubejs.magic_devil_ball_undying.2",
                                        player.username
                                    )
                                )
                            );
                        });
                    });
                });
            });
        }
    }
});
ItemEvents.entityInteracted("kubejs:magic_devil_ball_kill", (event) => {
    const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return;
    if (target.type == "minecraft:player") {
        const victim = target.isPlayer() ? target : null;
        event.player.tell(
            Text.translate("event.kubejs.magic_devil_ball_kill.1").yellow()
        );
        event.server.tell(
            Text.blue(
                Text.translate(
                    "event.kubejs.magic_devil_ball_kill.2",
                    event.player.username,
                    victim.username
                )
            )
        );
        event.server.runCommandSilent(
            `advancement grant ${victim.username} only createadvance:survive`
        );
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:kill_fail`
        );
    } else if (target.type == "minecraft:villager") {
        event.server.runCommandSilent(
            `effect give ${event.player.username} poison 10 2`
        );
        event.player.tell(
            Text.translate("event.kubejs.magic_devil_ball_kill.3").yellow()
        );
        event.server.tell(
            Text.blue(
                Text.translate(
                    "event.kubejs.magic_devil_ball_kill.4",
                    event.player.username
                )
            )
        );
    } else if (target.customName != null) {
        event.player.tell(
            Text.translate("event.kubejs.magic_devil_ball_kill.5").yellow()
        );
    } else {
        event.item.count--;
        event.player.give("minecraft:snowball");
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:devil`
        );
        target.kill();
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:kill_success`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_devil_ball_kill.0",
                event.player.username,
                target.name
            ).aqua()
        );
    }
});
ItemEvents.entityInteracted("kubejs:magic_devil_ball_poison", (event) => {
    const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return;
    if (target.type != "minecraft:player") {
        event.player.tell(
            Text.translate("event.kubejs.magic_devil_ball_poison.0").yellow()
        );
    } else {
        event.item.count--;
        event.player.give("minecraft:snowball");
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:devil`
        );
        event.server.runCommandSilent(
            `effect give ${target.username} poison 60 3`
        );
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:poison_success`
        );
        event.server.runCommandSilent(
            `advancement grant ${target.username} only createadvance:poisoned`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_devil_ball_poison.1",
                event.player.username,
                target.name
            ).lightPurple()
        );
    }
});
ItemEvents.rightClicked("kubejs:magic_devil_ball_fluid_clear", (event) => {
    const leftitem = event.player.getOffHandItem();
    if (event.hand != "MAIN_HAND") return;
    if (
        leftitem.id != "minecraft:lava_bucket" &&
        leftitem.id != "minecraft:water_bucket"
    ) {
        event.player.tell(
            Text.translate(
                "event.kubejs.magic_devil_ball_fluid_clear.0"
            ).yellow()
        );
    } else if (leftitem.id == "minecraft:lava_bucket") {
        event.item.count--;
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:devil`
        );
        event.player.give("minecraft:snowball");
        event.server.runCommandSilent(
            `execute at ${event.player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 air replace minecraft:lava`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_devil_ball_fluid_clear.1",
                event.player.username
            ).green()
        );
    } else if (leftitem.id == "minecraft:water_bucket") {
        event.item.count--;
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:devil`
        );
        event.player.give("minecraft:snowball");
        event.server.runCommandSilent(
            `execute at ${event.player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 air replace minecraft:water`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_devil_ball_fluid_clear.2",
                event.player.username
            ).green()
        );
    }
});
ItemEvents.rightClicked("kubejs:magic_devil_ball_fill", (event) => {
    const leftitem = event.player.getOffHandItem();
    if (event.hand != "MAIN_HAND") return;
    if (leftitem.id == "minecraft:debug_stick") {
        event.item.count--;
        event.server.runCommandSilent(
            `advancement grant ${event.player.username} only createadvance:devil`
        );
        event.player.give("minecraft:snowball");
        event.server.runCommandSilent(
            `execute at ${event.player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 air`
        );
        event.server.tell(
            Text.translate(
                "event.kubejs.magic_devil_ball_fill.0",
                event.player.username
            ).gold()
        );
    } else {
        event.item.count--;
        event.player.give("kubejs:s_coin");
        event.player.tell(
            Text.translate("event.kubejs.magic_devil_ball_fill.1").yellow()
        );
    }
});
