// script.js — PawVisa

// Инициализация анимаций AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800, // длительность анимации в мс
    once: true,    // анимация срабатывает только один раз
  });

  console.log('PawVisa JS загружен');

  // Пример: плавный скролл для внутренних ссылок
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Будущие интерактивные функции можно добавлять здесь
});
