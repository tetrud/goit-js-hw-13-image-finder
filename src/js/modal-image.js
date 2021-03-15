import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

import refs from './refs.js';
const { list } = refs;

//========================================

const onCreateBox = imgSrc => {
  const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">
`);
  instance.show();
};

function onImageClick(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  const largeImage = event.target.dataset.source;

  onCreateBox(largeImage);
}

list.addEventListener('click', onImageClick);
