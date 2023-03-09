const searchBth = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')
const searchBox= document.querySelector('.search-box')
const main = document.querySelector('main')

searchBth.addEventListener('click', function (e) {
    e.stopPropagation();
    searchBox.classList.add('active');
    searchInput.classList.add('active');
});

main.addEventListener('click', function (e) {
    e.stopPropagation();
    searchBox.classList.remove('active');
    searchInput.classList.remove('active');
});



