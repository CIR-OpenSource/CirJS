ItemEvents.modification((event) => {
    event.modify("reinforced_deepslate", (item) => {
        item.fireResistant = true;
        item.rarity = "epic";
    });
    event.modify("budding_amethyst", (item) => {
        item.rarity = "epic";
    });
    event.modify("diamond", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("diamond_block", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("netherite_ingot", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("netherite_block", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("kubejs:raw_reinforced_deepslate", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("kubejs:manmade_budding_amethyst", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("kubejs:superblock", (item) => {
        item.rarity = "uncommon";
    });
    event.modify("kubejs:mysterious_liquid_bucket", (item) => {
        item.rarity = "epic";
    });
    event.modify("kubejs:reinforce_liquid_bucket", (item) => {
        item.rarity = "rare";
    });
    event.modify("kubejs:reinforced_quartz_glass", (item) => {
        item.rarity = "rare";
    });
    event.modify("ae2:cell_component_64k", (item) => {
        item.rarity = "rare";
    });
    event.modify("ae2:cell_component_256k", (item) => {
        item.rarity = "epic";
    });
    event.modify("ae2:item_storage_cell_64k", (item) => {
        item.rarity = "rare";
    });
    event.modify("ae2:item_storage_cell_256k", (item) => {
        item.rarity = "epic";
    });
    event.modify("ae2:fluid_storage_cell_64k", (item) => {
        item.rarity = "rare";
    });
    event.modify("ae2:fluid_storage_cell_256k", (item) => {
        item.rarity = "epic";
    });
    event.modify("appmek:chemical_storage_cell_64k", (item) => {
        item.rarity = "rare";
    });
    event.modify("appmek:chemical_storage_cell_256k", (item) => {
        item.rarity = "epic";
    });
    event.modify("appbot:mana_storage_cell_64k", (item) => {
        item.rarity = "rare";
    });
    event.modify("appbot:mana_storage_cell_256k", (item) => {
        item.rarity = "epic";
    });
    event.modify("expatternprovider:infinity_cell", (item) => {
        item.rarity = "rare";
    });
});
