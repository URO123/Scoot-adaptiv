elBtn = document.querySelector('.burger-btn');
elContent = document.querySelector('.site-header__list');
elBtn.addEventListener('click', function() {
    elContent.classList.toggle('open');
    elBtn.classList.toggle('xopen');
});