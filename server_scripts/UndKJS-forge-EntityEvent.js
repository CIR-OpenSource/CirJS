/**
 * @author bot_undefined
 * @name UndKJS-EntityEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-EntityEvent.js"');
// 受伤事件
EntityEvents.hurt((event) => {
    const damage = event.getDamage();
    const sourc = event.getSource();
    const target = event.getEntity();
    const fake = event.getPlayer();
    const server = event.getServer();
    const player = target.isPlayer() ? target : null;
    if (sourc.actual && sourc.actual.isPlayer()) {
        if (damage > 26 && player != null) {
            if (fake.isFake()) return;
            sourc.actual.give(Item.playerHead(player.username));
            sourc.actual.tell(
                Text.translate(
                    "event.kubejs.player_get_head",
                    player.username
                ).green()
            );
            server.tell(
                Text.translate(
                    "event.kubejs.player_get_head_server",
                    sourc.actual.username,
                    player.username
                ).gold()
            );
        }
    }
});
EntityEvents.hurt((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.actual && sourc.actual.isPlayer()) {
        if (target.getType() == "minecraft:panda") {
            server.runCommandSilent(
                `effect give ${sourc.actual.username} minecraft:instant_damage 1 1`
            );
            sourc.actual.tell(
                Text.translate("event.kubejs.player_hit_panda").red()
            );
            server.tell(
                Text.translate(
                    "event.kubejs.player_hit_panda_server",
                    sourc.actual.username
                ).gold()
            );
        }
    }
});
EntityEvents.hurt((event) => {
    let entity = event.entity;
    if (
        entity.hasEffect("kubejs:vulnerable") &&
        event.getSource().getType() != "magic"
    ) {
        let a = entity.getEffect("kubejs:vulnerable").amplifier;
        let nd = event.damage + event.damage * (a + 1) * 0.1;
        event.server.runCommandSilent(
            `damage ${entity.getUuid()} ${nd} minecraft:magic`
        );
        event.cancel();
    }
});
EntityEvents.hurt((event) => {
    let entity = event.entity;
    if (
        entity.hasEffect("kubejs:golem") &&
        entity.getType() == "minecraft:player"
    ) {
        if (entity.health < 11) {
            event.server.runCommandSilent(
                `execute at ${entity.getUuid()} run summon minecraft:iron_golem ~ ~1 ~ {PlayerCreated:1b}`
            );
            entity.removeEffect("kubejs:golem");
            entity.tell(Text.translate("event.kubejs.player_golem").aqua());
        }
    }
});
EntityEvents.hurt((event) => {
    let entity = event.entity;
    if (entity.hasEffect("kubejs:antitoxic")) {
        if (entity.hasEffect("minecraft:wither")) {
            entity.removeEffect("minecraft:wither");
            event.cancel();
        } else if (entity.hasEffect("minecraft:poison")) {
            entity.removeEffect("minecraft:poison");
            event.cancel();
        }
    }
});

EntityEvents.hurt((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.actual && sourc.actual.isPlayer()) {
        if (target.getType() == "minecraft:villager") {
            server.runCommandSilent(
                `effect give ${sourc.actual.username} minecraft:wither 100 4`
            );
            sourc.actual.tell(
                Text.translate("event.kubejs.player_hit_villager").red()
            );
            server.tell(
                Text.translate(
                    "event.kubejs.player_hit_villager_server",
                    sourc.actual.username
                ).gold()
            );
        }
    }
});
EntityEvents.hurt((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.getType() == "lightningBolt") {
        if (target.getType() == "minecraft:creeper") {
            server.runCommandSilent(`effect give @a minecraft:luck 1 3`);
        }
    }
});
EntityEvents.death((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.actual && sourc.actual.isPlayer()) {
        if (target.getType() == "minecraft:villager") {
            server.tell(
                Text.translate(
                    "event.kubejs.player_kill_villager_server",
                    sourc.actual.username
                ).lightPurple()
            );
            if (String(target.nbt).includes("librarian")) {
                server.scheduleInTicks(10, () => {
                    server.tell(
                        Text.translate(
                            "event.kubejs.player_kill_librarian_server",
                            sourc.actual.username
                        ).red()
                    );
                    server.runCommandSilent(
                        `effect give ${sourc.actual.username} minecraft:darkness 100 0`
                    );
                    server.scheduleInTicks(90, () => {
                        sourc.actual.kill();
                    });
                });
            } else {
                server.tell(
                    Text.translate(
                        "event.kubejs.player_kill_other_server",
                        sourc.actual.username
                    ).aqua()
                );
            }
        }
    }
});
EntityEvents.hurt((event) => {
    const target = event.getEntity();
    const player = target.isPlayer() ? target : null;
    const server = event.getServer();
    if ((target = null)) return;
    if (target.hasEffect("kubejs:anti_radiation")) {
        server.runCommandSilent(`mek radiation heal ${player.uuid}`);
    } else return;
});
//死亡事件
EntityEvents.death((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    const player = target.isPlayer() ? target : null;
    if (sourc.actual && sourc.actual.getType() == "minecraft:creeper") {
        if (String(sourc.actual.nbt).includes("powered")) {
            server.runCommandSilent(
                `advancement grant ${player.username} only createadvance:creeperkill`
            );
            server.tell(Text.of(`R.I.P. ${player.username}`).yellow());
        }
    }
});
EntityEvents.death((event) => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (
        target.getType() == "minecraft:villager" &&
        target.getLevel().getDimension() == "the_end"
    ) {
        if (
            sourc.actual.getType() == "minecraft:pillager" ||
            sourc.actual.getType() == "minecraft:vindicator" ||
            sourc.actual.getType() == "minecraft:evoker" ||
            sourc.actual.getType() == "minecraft:vex"
        ) {
            server.runCommandSilent(
                'title @a title [{"text":"末地有村民在袭击中丧生","color":"red","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]'
            );
            server.runCommandSilent(
                "advancement grant @a only createadvance:endraid_kill"
            );
        }
    }
});
