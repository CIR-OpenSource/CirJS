console.log('Loading KubeJS Code: "new_fluid.js"');
StartupEvents.registry("fluid", (event) => {
    // Basic "thick" (looks like lava) fluid with red tint
    event
        .create("melon_juice")
        .displayName("Melon Juice")
        .thinTexture(0xff3333)
        .noBucket()
        .noBlock();
    event
        .create("apple_juice")
        .displayName("Apple Juice")
        .thinTexture(0xf5cb50)
        .noBucket()
        .noBlock();
    event
        .create("red_grapejuice")
        .displayName("Red Grape Juice")
        .thinTexture(0x8800b2)
        .noBucket()
        .noBlock();
    event
        .create("white_grapejuice")
        .displayName("White Grape Juice")
        .thinTexture(0xb0e166)
        .noBucket()
        .noBlock();
    event
        .create("red_taiga_grapejuice")
        .displayName("Taiga Red Grape Juice")
        .thinTexture(0x8900b7)
        .noBucket()
        .noBlock();
    event
        .create("white_taiga_grapejuice")
        .displayName("Taiga White Grape Juice")
        .thinTexture(0xb3e369)
        .noBucket()
        .noBlock();
    event
        .create("red_jungle_grapejuice")
        .displayName("Jungle Red Grape Juice")
        .thinTexture(0x8500b0)
        .noBucket()
        .noBlock();
    event
        .create("white_jungle_grapejuice")
        .displayName("Jungle White Grape Juice")
        .thinTexture(0xace062)
        .noBucket()
        .noBlock();
    event
        .create("red_savanna_grapejuice")
        .displayName("Savanna Red Grape Juice")
        .thinTexture(0x8000ab)
        .noBucket()
        .noBlock();
    event
        .create("white_savanna_grapejuice")
        .displayName("Savanna White Grape Juice")
        .thinTexture(0xa7db60)
        .noBucket()
        .noBlock();
    event
        .create("mysterious_liquid")
        .displayName("Mysterious Liquid")
        .thickTexture(0x4f4f4f)
        .noBlock();
    event
        .create("reinforce_liquid")
        .displayName("Redstone Reinforce Liquid")
        .thickTexture(0xff44ed)
        .noBlock();
});
