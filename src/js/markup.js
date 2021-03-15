import cardTemplate from '../templates/card.hbs';

import refs from './refs';
const { list } = refs;

//========================================

function createImagesMarkup(images) {
  list.insertAdjacentHTML('beforeend', cardTemplate(images));
}

export default createImagesMarkup;
