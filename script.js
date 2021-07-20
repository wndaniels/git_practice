(function() {
	const searchBar = document.getElementById('search-bar');
	const searchBtn = document.getElementById('search-btn');
	const newSearch = searchBar.value;

	searchBtn.addEventListener('submit', function() {
		window.open('https://www.google.com/search?q=' + newSearch);
	});
})();
