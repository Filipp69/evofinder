document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector("[data-header-burger]");
  const burgerMenu = document.querySelector("[data-header-menu]");
  const header = document.querySelector(".header");
  const overlay = document.querySelector(".header__overlay");

  const searchBtn = document.querySelector(".header__search-btn");
  const searchBox = document.querySelector(".header__inputholder-search");
  const crossIcon = document.querySelector(".header__cross-icon");

  if (burgerButton) {
    burgerButton.addEventListener("click", () => {
      if (searchBox && searchBox.classList.contains("active")) {
        searchBox.classList.remove("active");
      }
      toggleBurgerMenu(burgerButton, burgerMenu, header, overlay);
    });
  }

  if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", () => {
      searchBox.classList.toggle("active");

      if (searchBox.classList.contains("active")) {
        if (burgerButton && burgerButton.classList.contains("burger--open")) {
          burgerButton.classList.remove("burger--open");
        }
        if (burgerMenu) burgerMenu.classList.remove("vis");
        if (header) header.classList.remove("menu-open");
        if (overlay) overlay.classList.remove("vis");
        enableScrolling();
      }
    });
  }

  if (crossIcon && searchBox) {
    crossIcon.addEventListener("click", () => {
      searchBox.classList.remove("active");
    });
  }

  // setupNavLinks();
  // setActiveNavLink();
});

function toggleBurgerMenu(burgerButton, burgerMenu, header, overlay) {
  const isMobile = window.matchMedia("(max-width: 991px)").matches;

  burgerButton.classList.toggle("burger--open");
  burgerMenu.classList.toggle("vis");
  header.classList.toggle("menu-open");

  if (overlay) {
    overlay.classList.toggle("vis");
  }

  if (isMobile) {
    if (burgerButton.classList.contains("burger--open")) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }
}

// Функция для закрытия меню при клике на ссылку
// function setupNavLinks() {
//   const navLinks = document.querySelectorAll(".nav__link");
//   const burgerButton = document.querySelector(".burger");

//   navLinks.forEach(link => {
//       link.addEventListener("click", () => {
//           if (burgerButton.classList.contains("burger--open")) {
//               const burgerMenu = document.querySelector("[data-header-menu]");
//               const header = document.querySelector(".header");
//               const isMobile = window.matchMedia("(max-width: 768px)").matches;

//               burgerButton.classList.remove("burger--open");
//               burgerMenu.classList.remove("vis");
//               header.classList.remove("menu-open");

//               if (isMobile) {
//                   enableScrolling();
//               }
//           }
//       });
//   });
// }

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.inputholder__input.header__search');
  const searchResult = document.querySelector('.search-result');

  if (input && searchResult) {
    input.addEventListener('focus', () => {
      searchResult.classList.add('active');
    });

    document.addEventListener('click', (e) => {
      const isClickInsideInput = input.contains(e.target);
      const isClickInsideResults = searchResult.contains(e.target);

      if (!isClickInsideInput && !isClickInsideResults) {
        searchResult.classList.remove('active');
      }
    });
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const nav = document.querySelector(".header__nav");
//   const contacts = document.querySelector(".header__contacts");
//   const social = document.querySelector(".header__social");
//   const callbackBtn = document.querySelector(".header__btn-callback");
//   const headerContainer = document.querySelector(".header__container");

//   let menu = document.querySelector(".header__menu");
//   if (!menu) {
//     menu = document.createElement("div");
//     menu.classList.add("header__menu");
//     menu.setAttribute("data-header-menu", "");
//   }

//   function moveToMenu() {
//     if (window.innerWidth < 991) {
//       if (!menu.parentElement) {
//         headerContainer.appendChild(menu);
//       }
//       [nav, contacts, social, callbackBtn].forEach((el) => {
//         if (el && el.parentElement !== menu) {
//           menu.appendChild(el);
//         }
//       });
//     } else {

//       if (nav && !document.querySelector(".header--top .header__nav")) {
//         document.querySelector(".header--top").appendChild(nav);
//       }
//       if (contacts && !document.querySelector(".header--top .header__contacts")) {
//         document.querySelector(".header--top").appendChild(contacts);
//       }
//       if (social && !document.querySelector(".header--bottom .header__social")) {
//         document.querySelector(".header--bottom").appendChild(social);
//       }
//       if (callbackBtn && !document.querySelector(".header--bottom .header__btn-callback")) {
//         document.querySelector(".header--bottom").insertBefore(
//           callbackBtn,
//           document.querySelector(".header--bottom .header__social")
//         );
//       }
//       if (menu && menu.parentElement) {
//         menu.remove();
//       }
//     }
//   }

//   moveToMenu();

//   window.addEventListener("resize", moveToMenu);
// });

