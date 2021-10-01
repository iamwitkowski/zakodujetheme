document.addEventListener(
  "DOMContentLoaded",
  function(event) {
    const blocks = document.querySelectorAll(".block-base");

    if (0 !== blocks.length) {
      blocks.forEach(block => {
        const blockId = block.dataset.block;
        const data = window[blockId].data;
      });
    }
  },
  false
);
