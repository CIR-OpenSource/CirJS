/**
 * @author bot_undefined
 * @name UndKJS-BlockEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-BlockEvent.js"');
// 方块事件
BlockEvents.broken("kubejs:random_block", (event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    if (player != null) {
        server.runCommandSilent(
            `effect give ${player.username} minecraft:luck 1 1`
        );
    }
});
BlockEvents.rightClicked("minecraft:sand", (event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    const item = event.player.getMainHandItem();
    const x = event.block.getX();
    const y = event.block.getY();
    const z = event.block.getZ();
    if (player != null && item.getId() == "kubejs:reinforced_redstone_dust") {
        item.count--;
        event.block.set("kubejs:nuclear_warning_detector");
        console.log(
            `[MCDR_warning]Nuclear Placement Detector at ${x} ${y} ${z}`
        );
        server.tell(
            Text.translate(
                "event.kubejs.nuclear_warning_detector_set",
                player.username,
                x,
                y,
                z
            )
                .gold()
                .bold()
        );
    } else return;
});
BlockEvents.rightClicked("minecraft:reinforced_deepslate", (event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    const level = event.block.getLevel();
    const item = event.player.getMainHandItem();
    const x = event.block.getX();
    const y = event.block.getY();
    const z = event.block.getZ();
    if (player != null && item.getId() == "kubejs:degeneration_gem") {
        item.count--;
        event.block.set("minecraft:deepslate");
        server.runCommandSilent(
            `execute in ${level.getDimension()} run fill ${x - 4} ${y - 4} ${
                z - 4
            } ${x + 4} ${y + 4} ${
                z + 4
            } minecraft:deepslate replace minecraft:reinforced_deepslate`
        );
    }
});
BlockEvents.rightClicked("kubejs:reinforced_quartz_glass", (event) => {
    const player = event.getPlayer();
    const server = event.getServer();
    const level = event.block.getLevel();
    const item = event.player.getMainHandItem();
    const x = event.block.getX();
    const y = event.block.getY();
    const z = event.block.getZ();
    if (player != null && item.getId() == "kubejs:degeneration_gem") {
        item.count--;
        event.block.set("ae2:quartz_glass");
        server.runCommandSilent(
            `execute in ${level.getDimension()} run fill ${x - 4} ${y - 4} ${
                z - 4
            } ${x + 4} ${y + 4} ${
                z + 4
            } ae2:quartz_glass replace kubejs:reinforced_quartz_glass`
        );
    }
});
// 下落方块事件
EntityEvents.spawned((event) => {
    const entity = event.getEntity();
    const server = event.getServer();
    const x = entity.getX();
    const y = entity.getY();
    const z = entity.getZ();
    if (
        entity.getType() == "minecraft:falling_block" &&
        String(entity.nbt).includes("kubejs:nuclear_warning_detector")
    ) {
        console.log(`[MCDR_warning]Nuclear Warning Detector at ${x} ${y} ${z}`);
        server.tell(
            Text.translate(
                "event.kubejs.nuclear_warning_detector_spawn",
                x,
                y,
                z
            )
                .red()
                .bold()
        );
    }
});
