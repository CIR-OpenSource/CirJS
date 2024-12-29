console.log('Loading KubeJS Code: "new_sign.js"');
StartupEvents.registry("block", (event) => {
    event
        .create("kubejs:warning_sign", "cardinal")
        .box(2, 2, 16, 14, 14, 14)
        .soundType("metal")
        .placementState((callback) => {
            callback.set(
                BlockProperties.FACING,
                callback.horizontalDirection.opposite
            );
        })
        .displayName("Power Sign")
        .tag("kubejs:sign")
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .hardness(6.0)
        .resistance(1.0);
});
