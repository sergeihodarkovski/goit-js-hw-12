import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions.js';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loadingIndicator = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn');

let searchTerm = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();

  searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      message: 'Please enter a search keyword.',
    });
    return;
  }

  clearGallery(gallery);
  showLoadingIndicator();
  hideLoadBtn();

  try {
    currentPage = 1;
    const images = await fetchImages(searchTerm, currentPage);
    maxPage = data.totalHits / perPage;

    if (images.length === 0) {
      iziToast.info({
        message:
          'Sorry, no images matching your search query were found. Please try again!',
      });
    } else {
      renderGallery(images);
      initializeLightbox();
      searchInput.value = '';
      showLoadBtn();
    }
  } catch (error) {
    console.error('Error loading images:', error);
    iziToast.error({
      message: 'Failed to load images. Please try again later.',
    });
  }
  hideLoadingIndicator();
});

btnLoadMore.addEventListener('click', async () => {
  currentPage++;
  try {
    showLoadingIndicator();
    const images = await fetchImages(searchTerm, currentPage);

    if (images.length > 0) {
      renderGallery(images, true);
      initializeLightbox();
      updateMaxPage();
    } else {
      iziToast.info({
        message: 'No more images found.',
      });
      hideLoadBtn();
    }
  } catch (error) {
    console.error('Error loading more images:', error);
    iziToast.error({
      message: 'Failed to load more images. Please try again later.',
    });
  }
  hideLoadingIndicator();
});

function showLoadingIndicator() {
  loadingIndicator.classList.remove('hidden');
}

function hideLoadingIndicator() {
  loadingIndicator.classList.add('hidden');
}

function initializeLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {});
  lightbox.refresh();
}

function showLoadBtn() {
  btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  btnLoadMore.classList.add('hidden');
}

function updateMaxPage(totalHits, perPage) {
  maxPage = Math.ceil(totalHits / perPage);

  if (currentPage >= maxPage) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}
