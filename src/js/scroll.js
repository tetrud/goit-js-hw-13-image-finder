import refs from './refs';
const { arrowUpScroll } = refs;

const options = {
  top: 0,
  behavior: 'smooth',
};

function scrollToHandler() {
  window.scrollTo(options);
}

arrowUpScroll.addEventListener('click', scrollToHandler);

export default scrollToHandler;
