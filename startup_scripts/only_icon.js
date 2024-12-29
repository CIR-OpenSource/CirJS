console.log('Loading KubeJS Code: "only_icon.js"');
StartupEvents.registry("item", (event) => {
    event.create("fly_icon").displayName("Advancement Icon");
    event.create("endraid_icon").displayName("Advancement Icon");
    event.create("radiation_icon").displayName("Advancement Icon");
    event.create("anti_radiation_icon").displayName("Advancement Icon");
    event.create("villager_icon").displayName("Advancement Icon");
});
