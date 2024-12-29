/**
 * @author bot_undefined
 * @name UndKJS-PlayerEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-PlayerEvent.js"');
// 玩家事件
PlayerEvents.tick((event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    const number1 = player.stats.getKilled("zombiefied_piglin");
    const number2 = player.stats.getKilled("enderman");
    const number3 = player.stats.getKilled("wither_skeleton");
    const number4 = player.stats.getKilled("zombie");
    if (player.isFake()) return;
    if (number1 >= 10000 && number1 <= 10050) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:pigman_kill`
        );
    }
    if (number2 >= 10000 && number2 <= 10050) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:enderman_kill`
        );
    }
    if (number3 >= 10000 && number3 <= 10050) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:wither_skeleton_kill`
        );
    }
    if (number4 >= 10000 && number4 <= 10050) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:zombie_kill`
        );
    } else return;
});
PlayerEvents.tick((event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    if (player.hasEffect("kubejs:radiation")) {
        if (player.hasEffect("kubejs:anti_radiation")) {
            server.runCommandSilent(
                `advance grant ${player.username} only createadvance:anti_radiation`
            );
        }
        server.runCommandSilent(
            `mek radiation addEntity ${player.uuid} ${
                player.getEffect("kubejs:radiation").amplifier
            }`
        );
        server.runCommandSilent(
            `advance grant ${player.username} only createadvance:radiation_bread`
        );
        player.removeEffect("kubejs:radiation");
    } else return;
});

// 聊天事件
PlayerEvents.chat((event) => {
    if (
        event.message == "KubeJS" ||
        event.message == "KJS" ||
        event.message == "!!KJS" ||
        event.message == "!!KubeJS"
    ) {
        // Schedule task in 1 tick, because if you reply immediately, it will print before player's message
        event.server.scheduleInTicks(2, () => {
            event.player.tell(Text.gold(Text.translate("event.kubejs.info.0")));
            event.server.scheduleInTicks(2, () => {
                event.player.tell(
                    Text.blue(Text.translate("event.kubejs.info.1"))
                );
                event.player.tell(
                    Text.green(Text.translate("event.kubejs.info.2"))
                );
                event.player.tell(
                    Text.darkPurple(Text.translate("event.kubejs.info.3"))
                );
                event.player.tell(
                    Text.red(Text.translate("event.kubejs.info.4"))
                );
                event.player.tell(
                    Text.lightPurple(Text.translate("event.kubejs.info.5"))
                );
                event.player.tell(
                    Text.aqua(Text.translate("event.kubejs.info.6"))
                );
                event.player.tell(
                    Text.yellow(Text.translate("event.kubejs.info.7"))
                );
            });
        });
    }
});
PlayerEvents.chat((event) => {
    if (event.message == "!!KJS Craft" || event.message == "!!KubeJS Craft") {
        event.server.scheduleInTicks(2, () => {
            event.player.tell(Text.translate("event.kubejs.craft.0").green());
            event.server.scheduleInTicks(2, () => {
                event.player.tell(
                    Text.translate("event.kubejs.craft.1").aqua()
                );
                event.player.tell(
                    Text.translate("event.kubejs.craft.2").aqua()
                );
            });
        });
    }
});
PlayerEvents.chat((event) => {
    if (event.message == "!!KJS Music" || event.message == "!!KubeJS Music") {
        event.server.scheduleInTicks(2, () => {
            event.player.tell(Text.translate("event.kubejs.music.0").green());
            event.server.scheduleInTicks(2, () => {
                event.player.tell(
                    Text.translate("event.kubejs.music.1").aqua()
                );
            });
        });
    }
});
PlayerEvents.chat((event) => {
    if (event.message == "Creeper?" || event.message == "creeper?") {
        event.server.scheduleInTicks(2, () => {
            event.server.tell(Text.of("Aw Man!").bold().green());
        });
    }
});
PlayerEvents.chat((event) => {
    if (
        event.message.includes("香蕉") ||
        event.message.includes("banana") ||
        event.message.includes("睡蕉小猴") ||
        event.message.includes("蕉蕉")
    ) {
        event.server.scheduleInTicks(2, () => {
            event.player.tell(Text.translate("event.kubejs.banana").yellow());
            event.server.runCommand(
                `execute at ${event.player.username} run playsound kubejs:music.banana master @a`
            );
        });
    }
});
PlayerEvents.chat((event) => {
    if (
        event.message.includes("米爹") ||
        event.message.includes("颗粒鸡块") ||
        event.message.includes("小仙女") ||
        event.message.includes("郭楠") ||
        event.message.includes("傻逼吧你") ||
        event.message.includes("米哈游株式会社") ||
        event.message.includes("桌饺") ||
        event.message.includes("索嗨") ||
        event.message.includes("操你妈") ||
        event.message.includes("傻逼服主") ||
        event.message.includes("傻逼管理") ||
        event.message.includes("死妈") ||
        event.message.includes("你妈死了") ||
        event.message.includes("脑瘫吧你") ||
        event.message.includes("快开我盒") ||
        event.message.includes("散兵夫人")
    ) {
        event.player.tell(
            Text.red(
                "您发送的信息疑似包含引战信息或攻击性言论，请修改后重新发送"
            )
        );
        event.cancel();
    }
});
PlayerEvents.chat((event) => {
    if (
        event.message.includes("原神") ||
        event.message.includes("幻塔") ||
        event.message.includes("散兵") ||
        event.message.includes("忌炎") ||
        event.message.includes("鸣潮") ||
        event.message.includes("仙家军") ||
        event.message.includes("利刃") ||
        event.message.includes("明日方舟") ||
        event.message.includes("迷你世界") ||
        event.message.includes("米学长") ||
        event.message.includes("米孝子") ||
        event.message.includes("mxz") ||
        event.message.includes("NGA") ||
        event.message.includes("塞尔达")
    ) {
        event.server.scheduleInTicks(2, () => {
            event.player.tell(
                Text.of(
                    "（仅你可见）检测到可能引发争议的游戏或其相关内容，请尽量避免讨论，以避免可能的争执。如果你并未讨论争议游戏内容，请忽略此信息"
                ).aqua()
            );
        });
    }
});
PlayerEvents.chat((event) => {
    if (
        event.message.includes("无尽星空") ||
        event.message.includes("wjxk") ||
        event.message.includes("Real_Infinistar") ||
        event.message.includes("Infinistar")
    ) {
        event.player.tell(
            Text.of(
                "根据管理委员会相关决定，CIR服务器不支持讨论此人相关内容，敬请谅解"
            ).red()
        );
        event.player.tell(
            Text.of(
                "该争议玩家已于2024年10月4日退出本服，此人退服后一切行为与本服无关"
            ).gold()
        );
        event.cancel();
    }
});
PlayerEvents.chat((event) => {
    if (
        event.message.includes("恭喜发财") ||
        event.message.includes("刘德华") ||
        event.message.includes("解冻")
    ) {
        event.server.scheduleInTicks(2, () => {
            event.player.tell(Text.of("正在解冻，请等待").gold());
            event.server.scheduleInTicks(20, () => {
                event.server.runCommand(
                    `execute at ${event.player.username} run playsound kubejs:music.gong_xi_fa_cai master @a`
                );
            });
        });
    }
});
PlayerEvents.chat((event) => {
    if (
        event.message.includes("Expecto Patronum") ||
        event.message.includes("EXPECTO PATRONUM")
    ) {
        event.server.scheduleInTicks(2, () => {
            if (event.player.hasEffect("kubejs:golem")) {
                event.player.tell(
                    Text.translate("event.kubejs.expecto").green()
                );
                event.server.runCommand(
                    `execute at ${event.player.username} run summon minecraft:iron_golem ~ ~1 ~ {PlayerCreated:1b}`
                );
                event.server.tell(
                    Text.translate(
                        "event.kubejs.expecto.1",
                        event.player.username
                    )
                        .aqua()
                        .bold()
                );
                event.server.runCommandSilent(
                    `effect clear ${event.player.username} kubejs:golem`
                );
            } else return;
        });
    }
});
// 玩家登陆事件
PlayerEvents.loggedIn((event) => {
    const player = event.getPlayer();
    const playtime = player.stats.getPlayTime();
    const server = event.getServer();
    server.scheduleInTicks(20, () => {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:root`
        );
        player.tell(Text.translate("event.kubejs.login").gold());
        player.tell(Text.translate("event.kubejs.login.2").gold());
        player.tell(Text.translate("event.kubejs.login.3").gold());
        server.scheduleInTicks(20, () => {
            if (playtime >= 7.2e5) {
                server.runCommandSilent(
                    `advancement grant ${player.username} only createadvance:playtime`
                );
            }
            if (playtime >= 7.2e6) {
                server.runCommandSilent(
                    `advancement grant ${player.username} only createadvance:playtime2`
                );
            }
            if (playtime >= 7.2e7) {
                server.runCommandSilent(
                    `advancement grant ${player.username} only createadvance:playtime3`
                );
            }
            if (playtime >= 1.44e8) {
                server.runCommandSilent(
                    `advancement grant ${player.username} only createadvance:playtime4`
                );
            } else return;
        });
    });
});
//成就触发事件
PlayerEvents.inventoryChanged((event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    const item = event.getItem();
    if (
        item.getId() == "minecraft:enchanted_book" &&
        item.getNbtString() ==
            '{StoredEnchantments:[{id:"kubejs:damage_bonus",lvl:5s}]}'
    ) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:lucky_all`
        );
    }
    if (
        item.getId() == "minecraft:netherite_sword" &&
        String(item.getNbtString()).includes('{id:"minecraft:looting",lvl:5s}')
    ) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:lucky_all_2`
        );
    }
    if (
        item.getId() == "minecraft:netherite_pickaxe" &&
        String(item.getNbtString()).includes(
            '{id:"minecraft:efficiency",lvl:6s}'
        )
    ) {
        server.runCommandSilent(
            `advancement grant ${player.username} only createadvance:pickaxe`
        );
    } else return;
});
