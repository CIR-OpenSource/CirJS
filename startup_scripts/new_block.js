console.log('Loading KubeJS Code: "new_block.js"');
StartupEvents.registry("block", (event) => {
    event
        .create("kubejs:raw_reinforced_deepslate")
        .displayName("Raw Reinforced Deepslate")
        .soundType("deepslate")
        .hardness(30.0) // Set hardness (affects mining time)
        .resistance(4.0) // Set resistance (to explosions, etc)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool");
    event
        .create("kubejs:manmade_budding_amethyst")
        .displayName("Manmade Budding Amethyst")
        .soundType("amethyst")
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe");
    event
        .create("kubejs:superblock", "cardinal")
        .noValidSpawns(true)
        .displayName("Super Block(SB)")
        .placementState((callback) => {
            callback.set(
                BlockProperties.FACING,
                callback.horizontalDirection.opposite
            );
        })
        .soundType("grass")
        .requiresTool(true)
        .tagBlock("minecraft:mineable/axe");
    event
        .create("kubejs:raw_random_block")
        .noValidSpawns(true)
        .noDrops()
        .soundType("glass")
        .displayName("Raw Random Block");
    event
        .create("kubejs:random_block", "cardinal")
        .noValidSpawns(true)
        .displayName("Random Block")
        .placementState((callback) => {
            callback.set(
                BlockProperties.FACING,
                callback.horizontalDirection.opposite
            );
        })
        .soundType("glass")
        .hardness(8)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe");
    event
        .create("kubejs:nuclear_warning_detector", "falling")
        .noValidSpawns(true)
        .displayName("Nuclear Plant Warning Detector")
        .soundType("sand")
        .noDrops()
        .noItem()
        .unbreakable();
    event
        .create("kubejs:reinforced_quartz_glass")
        .noValidSpawns(true)
        .displayName("Reinforced Quartz Glass")
        .soundType("glass")
        .defaultTranslucent()
        .transparent(true)
        .hardness(6.0)
        .resistance(20.0)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .noDrops();
});
