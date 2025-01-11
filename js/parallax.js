document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".parallax-img");
  
    if (image) {
      window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY; // Получаем значение прокрутки
        image.style.transform = `translate(-50%, ${scrollTop * 0.2}px)`; // Чем меньше число, тем медленнее эффект
      });
    }
  });
  