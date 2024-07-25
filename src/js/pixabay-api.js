import axios from 'axios';

const API_KEY = '44648929-0a3ca09e28beb33e491a22410';

export async function fetchImages(searchTerm, currentPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  try {
    const response = await axios.get(url, { params });

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data;

    return data.hits.map(image => ({
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
      likes: image.likes,
      views: image.views,
      comments: image.comments,
      downloads: image.downloads,
    }));
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
