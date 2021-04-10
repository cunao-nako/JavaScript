// window.addEventListener('DOMContentLoaded', () => {
//   let active = document.querySelector('.tabheader__item_active'),
//     nextActive = active.nextElementSibling;
//
//   while (true) {
//     if (setTimeout(() => true, 100)) {
//       autoSlide();
//     }
//   }
//
//   function hideContent () {
//     let menuDescriptions = document.querySelectorAll('.tabcontent__descr');
//     menuDescriptions.forEach(menu => {
//       let text = menu.innerText;
//       if (text.includes(active.innerText)) {menu.parentElement.style.removeProperty('display'); }
//       else { menu.parentElement.style.display = 'none'; }
//     });
//   }
//
//   function autoSlide () {
//     active.classList.remove('tabheader__item_active');
//     nextActive.classList.add('tabheader__item_active');
//     active = nextActive;
//     hideContent();
//   }
// });

