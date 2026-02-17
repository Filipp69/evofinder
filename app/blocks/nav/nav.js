document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav__item");

  navItems.forEach((item) => {
    const subMenu = item.querySelector(".nav__list__sub");
    const svgIcon = item.querySelector(".nav__icon");
    const mainLink = item.querySelector(".nav__link");

    if (!subMenu || !svgIcon || !mainLink) return;

    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 991) {
        subMenu.classList.add("visible");
        svgIcon.classList.add("flipped");
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 991) {
        subMenu.classList.remove("visible");
        svgIcon.classList.remove("flipped");
      }
    });

    mainLink.addEventListener("click", (e) => {
      if (window.innerWidth <= 991 && !subMenu.classList.contains("visible")) {
        e.preventDefault();

        document.querySelectorAll(".nav__list__sub.visible").forEach(open => {
          open.classList.remove("visible");
          open.closest(".nav__item")
            ?.querySelector(".nav__icon")
            ?.classList.remove("flipped");
        });

        subMenu.classList.add("visible");
        svgIcon.classList.add("flipped");
      }
    });

    svgIcon.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = subMenu.classList.contains("visible");

        document.querySelectorAll(".nav__list__sub.visible").forEach(open => {
          open.classList.remove("visible");
          open.closest(".nav__item")
            ?.querySelector(".nav__icon")
            ?.classList.remove("flipped");
        });

        if (!isOpen) {
          subMenu.classList.add("visible");
          svgIcon.classList.add("flipped");
        }
      }
    });
  });

  const currentPath = window.location.pathname;

  document.querySelectorAll('.nav__link, .nav__link__sub').forEach(link => {
    if (new URL(link.href).pathname === currentPath) {
      link.classList.add('is-active');

      if (link.classList.contains('nav__link__sub')) {
        link.closest('.nav__item')
          ?.querySelector('.nav__link')
          ?.classList.add('is-active');
      }
    }
  });
});
