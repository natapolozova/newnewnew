'use strict'
let elemButton = document.querySelector("#scrollTop");

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно'); 
});
document.addEventListener("scroll", () => {
    console.log('Скролл отработал корректно'); //Сайт листается (скроллится) 
    if (window.pageYOffset > 500) {
        console.log('> 500');    //Если скролл больше 500px, то кнопка кнопка "назад" показывается и становится кликабельной
        elemButton.removeAttribute('hidden');
      } else {
        console.log('< 500');     //Если скролл меньше 500px, то кнопка кнопка "назад"- скрыта
        elemButton.setAttribute('hidden', "");
      }
});
elemButton.addEventListener("click", () => {
    console.log('Клик отработал корректно');
    // window.scrollTo(0, 0); - не плавно
    window.scrollTo({top: 0, behavior: 'smooth'}); //Прописываем условия, чтобы скроллинг был плавный.
});
