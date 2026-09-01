
/**
* loads and decorates the block
* @param {Element} block The block element
*/
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('test-block-row');
    const [keyCell, valueCell] = row.children;
    if (keyCell) keyCell.classList.add('test-block-key');
    if (valueCell) valueCell.classList.add('test-block-value');
  });
}
