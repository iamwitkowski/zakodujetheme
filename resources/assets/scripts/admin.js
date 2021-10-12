import adminMenu from './components/adminMenu'
import mediaSVG from './components/mediaSVG'

const hideBlocks = () => {
  wp.domReady(function () {
    console.log(wp);



    wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
      wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
    });



    wp.blocks.getBlockTypes().forEach(function (blockVariation) {
      if (blockVariation.name.indexOf('acf') === 0 ||
          blockVariation.name.indexOf('core/table') === 0 ||
          blockVariation.name.indexOf('core/paragraph') === 0 ||
          blockVariation.name.indexOf('core/heading') === 0 ||
          blockVariation.name.indexOf('core/code') === 0 ||
          blockVariation.name.indexOf('core/html') === 0 ||
          blockVariation.name.indexOf('core/block') === 0) {
        return false;
      } else {
        wp.blocks.unregisterBlockType(blockVariation.name);
      }
    });
  });
};



jQuery(document).ready(function () {
  adminMenu.init();
  mediaSVG.init();



  hideBlocks();
});
