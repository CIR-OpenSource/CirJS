console.log('Loading KubeJS Code: "enchantment.js"');
StartupEvents.registry("enchantment", (event) => {
    event
        .create("kubejs:damage_bonus")
        .weapon()
        .minLevel(1)
        .maxLevel(5)
        .displayName("Damage Bonus")
        .veryRare()
        .untradeable()
        .damageBonus((level, entityType) => {
            if (entityType === "undead") {
                return level * 2.5;
            } else {
                return level * 1;
            }
        });
    event
        .create("kubejs:health_theft")
        .armorChest()
        .minLevel(1)
        .maxLevel(4)
        .displayName("Health Theft")
        .veryRare()
        .untradeable()
        .postHurt((living, entity, level) => {
            living.heal(level * 0.5);
            if (entity.isLiving()) {
                entity.attack(level * 0.5);
            }
        });
    event
        .create("kubejs:toxic")
        .canEnchant((item) => {
            //获取物品的所有附魔
            let enchantments = item.getEnchantments();
            //判断附魔中是否有该附魔
            if (
                enchantments.get("kubejs:wither") == null &&
                enchantments.get("kubejs:magic_attack") == null
            ) {
                return true;
            } else {
                return false;
            }
        })
        .weapon()
        .minLevel(1)
        .maxLevel(2)
        .displayName("Toxic Attack")
        .untradeable()
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) {
                entity.potionEffects.add(
                    "minecraft:poison",
                    level * 200,
                    level * 1
                );
                living.health -= 0.5;
            }
        });
    event
        .create("kubejs:wither")
        .canEnchant((item) => {
            //获取物品的所有附魔
            let enchantments = item.getEnchantments();
            //判断附魔中是否有该附魔
            if (
                enchantments.get("kubejs:toxic") == null &&
                enchantments.get("kubejs:magic_attack") == null
            ) {
                return true;
            } else {
                return false;
            }
        })
        .weapon()
        .minLevel(1)
        .maxLevel(2)
        .displayName("Wither Attack")
        .veryRare()
        .untradeable()
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) {
                entity.potionEffects.add(
                    "minecraft:wither",
                    level * 100,
                    level * 1
                );
                living.health -= 0.5;
            }
        });
    event
        .create("kubejs:magic_attack")
        .weapon()
        .minLevel(1)
        .maxLevel(2)
        .displayName("Magic Attack")
        .veryRare()
        .untradeable()
        .canEnchant((item) => {
            //获取物品的所有附魔
            let enchantments = item.getEnchantments();
            //判断附魔中是否有该附魔
            if (
                enchantments.get("kubejs:wither") == null &&
                enchantments.get("kubejs:toxic") == null
            ) {
                return true;
            } else {
                return false;
            }
        })
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) {
                entity.potionEffects.add(
                    "minecraft:instant_damage",
                    5,
                    level * 1 - 1
                );
                living.health -= level * 0.5;
            }
        });
    event
        .create("kubejs:rapid_cooldown")
        .weapon()
        .minLevel(1)
        .maxLevel(2)
        .displayName("Rapid Cooldown")
        .veryRare()
        .untradeable()
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) {
                living.potionEffects.add("minecraft:haste", 20, level * 2);
            }
        });
    event
        .create("kubejs:duel")
        .weapon()
        .minLevel(1)
        .maxLevel(3)
        .curse()
        .displayName("Duel")
        .veryRare()
        .untradeable()
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) {
                living.potionEffects.add(
                    "kubejs:vulnerable",
                    60,
                    level * 2 - 1
                );
                living.potionEffects.add(
                    "minecraft:strength",
                    60,
                    level * 1 - 1
                );
                living.potionEffects.add("minecraft:hunger", 60, level * 1);
            }
        });
    event
        .create("kubejs:blood_thirsty")
        .weapon()
        .minLevel(1)
        .maxLevel(3)
        .displayName("Blood Thirsty")
        .veryRare()
        .untradeable()
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) {
                living.health += level * 0.25;
            }
        });
});
