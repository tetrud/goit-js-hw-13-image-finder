export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.baseUrl = 'https://pixabay.com/api';
    this.apiKey = '17278300-7d16b91202e921c50b7326d3b';
  }

  fetchImages() {
    const url = `${this.baseUrl}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
