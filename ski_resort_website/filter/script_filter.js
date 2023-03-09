// Клик по кнопке открыть/закрыть
document.querySelector('.dropdown-button').addEventListener('click', function () {
    document.querySelector('.dropdown-list').classList.toggle('dropdown-list--visible')
    this.classList.add('dropdown-button--active')
});

// Выбор элемента из списка 
document.querySelectorAll('.dropdown-list-item').forEach(function(listItem){
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.dropdown-button').innerHTML = this.innerText;
        document.querySelector('.dropdown-button').focus();
        document.querySelector('.dropdown-input-hidden').value = this.dataset.value;
        document.querySelector('.dropdown-list').classList.remove('dropdown-list--visible');
    })
});


// клик снаружи. закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.dropdown-button')) {
        document.querySelector('.dropdown-button').classList.remove('dropdown-button--active');
        document.querySelector('.dropdown-list').classList.remove('dropdown-list--visible');
    }
})