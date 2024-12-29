let c_item = [
    "create:creative_blaze_cake",
    "create:creative_crate",
    "create:creative_motor",
    "create:creative_fluid_tank",
    "minecraft:command_block_minecart",
    "minecraft:villager_spawn_egg",
    "minecraft:ender_dragon_spawn_egg",
    "minecraft:command_block",
    "create:handheld_worldshaper",
    "minecraft:barrier",
    "minecraft:bedrock",
];

let c_block = [
    "create:creative_fluid_tank",
    "create:creative_crate",
    "create:creative_motor",
    "minecraft:command_block",
    "minecraft:barrier",
    "minecraft:bedrock",
];

// 需要新建一个计分板存储触发者id /scoreboard objectives add Cheater dummy ["Cheater"]
PlayerEvents.inventoryChanged((event) => {
    const { item, player, server } = event;
    if (c_item.includes(item.id) && !player.hasPermissions(4)) {
        player.inventory.clear();
        server.runCommand(`whitelist remove ${player.name.string}`);
        server.tell(
            `§a检测到玩家 §6${player.name.string} §a持有§c非法物品\n非法物品ID：${item.id}\n§7清除全身物品并移除白名\n请联系管理员进行处理（如果可以请顺便截屏通知服主）`
        );
        server.runCommand(
            `scoreboard players add ${player.name.string} Cheater 1`
        );
    } else {
        item.enchantmentTags.forEach((ench) => {
            if (ench.lvl > 10 && !player.hasPermissions(4)) {
                server.tell(
                    `§a检测到玩家 §6${player.name.string} §a持有§c非法附魔物品\n物品ID：${item.id}\n非法附魔ID：${ench.id}\n非法附魔等级：${ench.lvl}\n§7清除全身物品并移除白名\n请联系管理员进行处理（如果可以请顺便截屏通知服主）`
                );
                player.inventory.clear();
                server.runCommand(`whitelist remove ${player.name.string}`);
                server.runCommand(
                    `scoreboard players add ${player.name.string} Cheater 1`
                );
            } else return;
        });
    }
});
PlayerEvents.inventoryChanged((event) => {
    const { player, server } = event;
    if (!player.hasPermissions(4) && player.isCreative()) {
        server.runCommandSilent(`gamemode survival ${player.name.string}`);
        server.tell(
            `§a检测到玩家 §6${player.name.string} §a游戏模式异常，已自动切换为生存模式`
        );
    }
});
PlayerEvents.loggedIn((event) => {
    const { player, server } = event;
    if (!player.hasPermissions(4) && player.isCreative()) {
        server.runCommandSilent(`gamemode survival ${player.name.string}`);
        server.tell(
            `§a检测到玩家 §6${player.name.string} §a游戏模式异常，已自动切换为生存模式`
        );
    }
});
BlockEvents.placed((event) => {
    const { player, block } = event;
    if (c_block.includes(block.id) && player.isFake()) {
        event.cancel();
    } else return;
});
