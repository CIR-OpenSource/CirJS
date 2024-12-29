console.log('Loading KubeJS Code: "block_event.js"');
BlockEvents.modification((event) => {
    event.modify("waystones:waystone", (block) => {
        block.setExplosionResistance(100000);
        block.setDestroySpeed(-1);
    });
    event.modify("waystones:orange_sharestone", (block) => {
        block.setExplosionResistance(100000);
        block.setDestroySpeed(-1);
    });
    event.modify("waystones:white_sharestone", (block) => {
        block.setExplosionResistance(100000);
        block.setDestroySpeed(-1);
    });
    event.modify("waystones:light_blue_sharestone", (block) => {
        block.setExplosionResistance(100000);
        block.setDestroySpeed(-1);
    });
});
