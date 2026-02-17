document.addEventListener('DOMContentLoaded', () => {

  const cloneSlidesIfNeeded = (swiperRoot, breakpoints) => {
    const wrapper = swiperRoot.querySelector('.swiper-wrapper');
    let slides = wrapper.querySelectorAll('.swiper-slide');

    const originalSlides = Array.from(slides);
    const maxPerView = Math.max(
      1,
      ...Object.values(breakpoints).map(bp => bp.slidesPerView || 1)
    );

    const minNeeded = maxPerView * 3;

    if (slides.length >= minNeeded) return;

    while (slides.length < minNeeded) {
      originalSlides.forEach(slide => {
        wrapper.appendChild(slide.cloneNode(true));
      });
      slides = wrapper.querySelectorAll('.swiper-slide');
    }
  };

  const initSwiper = (selector, breakpoints) => {
    document.querySelectorAll(selector).forEach((root) => {

      const container = root.querySelector('.swiper-container');
      const pagination = root.querySelector('[data-swiper-pagination]');

      const originalSlidesCount =
        root.querySelectorAll('.swiper-slide').length;

      cloneSlidesIfNeeded(root, breakpoints);

      const swiper = new Swiper(container, {
        loop: true,
        slidesPerView: 1.00000001,
        spaceBetween: 20,
        breakpoints,
        initialSlide: 1,

        navigation: {
          nextEl: root.querySelector('[data-swiper-button-next]'),
          prevEl: root.querySelector('[data-swiper-button-prev]'),
        },

        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}"></span>`
        },

        on: {
          slideChange(swiper) {
            const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');

            bullets.forEach(b =>
              b.classList.remove('swiper-pagination-bullet-active')
            );

            const totalSlides = swiper.slides.length;
            const clonesBlock = Math.floor(totalSlides / originalSlidesCount);

            const normalized =
              Math.floor(swiper.realIndex % originalSlidesCount);

            bullets[normalized]?.classList.add('swiper-pagination-bullet-active');
          }
        }
      });

      setTimeout(() => {
        swiper.slidePrev(0);
      }, 0);

      const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');

      bullets.forEach((bullet, index) => {
        bullet.style.display =
          index < originalSlidesCount ? 'inline-block' : 'none';
      });

    });
  };

  initSwiper('[data-swiper="sliderGallery"]', {
    767: { slidesPerView: 2, spaceBetween: 20 },
    1444: { slidesPerView: 3, spaceBetween: 30 },
  });

  initSwiper('[data-swiper="sliderAbout"]', {
    767: { slidesPerView: 2, spaceBetween: 20 },
    1444: { slidesPerView: 3, spaceBetween: 86 },
  });

  initSwiper('[data-swiper="sliderProjects"]', {
    1444: { slidesPerView: 2, spaceBetween: 86 },
  });

});
