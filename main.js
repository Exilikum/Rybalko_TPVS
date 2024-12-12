document.addEventListener('DOMContentLoaded', function() {
    // Інтерактивність кнопки в Hero
    const heroBtn = document.querySelector('.hero-btn');
    heroBtn.addEventListener('click', function(e) {
        e.preventDefault();
        heroBtn.textContent = 'Завантаження...';
        heroBtn.style.background = '#007BFF';
        heroBtn.style.color = '#fff';

        setTimeout(function() {
            heroBtn.textContent = 'Перейти до каталогу';
            heroBtn.style.background = '#fff';
            heroBtn.style.color = '#333';
            // Тут можна додати перехід до каталогу: location.href = 'catalog.html';
        }, 1500);
    });
});
