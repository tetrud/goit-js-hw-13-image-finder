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

  imagesApiService.resetPage();
  scrollToHandler();

  imagesApiService.fetchImages().then(images => {
    if (!imagesApiService.query.trim()) {
      messageError();
      return;
    }
    clearImagesContainer();

    createImagesMarkup(images);
  });
}

function clearImagesContainer() {
  list.innerHTML = '';
}

form.addEventListener('submit', onSearchImages);
