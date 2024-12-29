// priority: 0

/**
 * @author LingyunAwA
 * @name YunKJS-RemoveRecipe
 * @description 移除配方 KubeJS 脚本
 */

console.log('Loading KubeJS Code: "YunKJS-RemoveRecipe.js"');

ServerEvents.recipes((e) => {
    e.remove({ output: "mekanism:teleportation_core" });
    e.remove({ output: "minecraft:tnt_minecart" });
    e.remove({ output: "farmersdelight:melon_juice" });
    e.remove({ output: "ars_nouveau:warp_scroll" });
    e.remove({ output: "ae2:cell_component_64k" });
    e.remove({ output: "ae2:cell_component_256k" });
    e.remove({ output: "ae2:portable_item_cell_64k" });
    e.remove({ output: "ae2:portable_item_cell_256k" });
    e.remove({ output: "ae2:portable_fluid_cell_64k" });
    e.remove({ output: "ae2:portable_fluid_cell_256k" });
    e.remove({ output: "ae2:wireless_booster" });
    e.remove({ output: "ae2:wireless_receiver" });
    e.remove({ output: "appbot:portable_mana_storage_cell_64k" });
    e.remove({ output: "appbot:portable_mana_storage_cell_256k" });
    e.remove({ output: "appmek:portable_chemical_storage_cell_64k" });
    e.remove({ output: "appmek:portable_chemical_storage_cell_256k" });
    e.remove({ output: "expatternprovider:infinity_cell" });
    e.remove({ mod: "create_mechanical_extruder" });
});

