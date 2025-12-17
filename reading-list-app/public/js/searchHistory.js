const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const list = document.querySelector('#search-history');

const STORAGE_KEY = 'readingListSearches';

function loadHistory() {
  const searches = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  list.innerHTML = '';

  searches.forEach(term => {
    const li = document.createElement('li');
    li.textContent = term;
    list.appendChild(li);
  });
}

form?.addEventListener('submit', () => {
  const searches = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  if (!searches.includes(input.value)) {
    searches.unshift(input.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(searches.slice(0, 5)));
  }
});

loadHistory();
