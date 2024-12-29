console.log('Loading KubeJS Code: "mob_effect.js"');
StartupEvents.registry("mob_effect", (event) => {
    event
        .create("kubejs:vulnerable")
        .harmful()
        .displayName("Vulnerable")
        .color("yellow");
    event
        .create("kubejs:golem")
        .beneficial()
        .displayName("Golem's Help")
        .color(0xffb266);
    event
        .create("kubejs:antitoxic")
        .beneficial()
        .displayName("Antitoxic")
        .color(0xff6262);
    event
        .create("kubejs:radiation")
        .harmful()
        .displayName("Radiation")
        .color(0x00bbbb);
    event
        .create("kubejs:anti_radiation")
        .beneficial()
        .displayName("Anti-Radiation")
        .color(0x00ff00);
});
