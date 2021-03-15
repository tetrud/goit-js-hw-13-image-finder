import lodash from 'lodash';

import refs from './refs.js';
import ImagesApiSerService from './api-service';
import createImagesMarkup from './markup';

const { observer } = refs;
const imagesApiService = new ImagesApiSerService();

//===========================

const observerHandler = lodash.debounce(entries => {
  const { isIntersecting } = entries[0];

  if (isIntersecting) {
    onLoadMore();
  }
}, 300);

const intersectionObserver = new IntersectionObserver(observerHandler);
intersectionObserver.observe(observer);

function onLoadMore() {
  imagesApiService.fetchImages().then(createImagesMarkup);
}
