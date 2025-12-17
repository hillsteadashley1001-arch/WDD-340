/**
 * Service for interacting with Google Books API
 */
const axios = require('axios');

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

async function searchBooks(query) {
  const response = await axios.get(BASE_URL, {
    params: { q: query, maxResults: 12 }
  });

  return response.data.items || [];
}

module.exports = {
  searchBooks
};
