import messageError from './pnotify';
import scrollToHandler from './scroll';
import './observer';
import ImagesApiSerService from './api-service';
import createImagesMarkup from './markup';
import refs from './refs.js';

const { form, list } = refs;
const imagesApiService = new ImagesApiSerService();

//==============================

function onSearchImages(event) {
  event.preventDefault();

  imagesApiService.query = event.currentTarget.elements.query.value;

  if (!imagesApiService.query.trim()) {
    messageError();
    return;
  }

  imagesApiService.resetPage();
  scrollToHandler();

  imagesApiService.fetchImages().then(images => {
    clearImagesContainer();
    createImagesMarkup(images);
  });
}

function clearImagesContainer() {
  list.innerHTML = '';
}

form.addEventListener('submit', onSearchImages);
