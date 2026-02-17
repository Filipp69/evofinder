document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.technology-video').forEach(wrapper => {
    const video = wrapper.querySelector('.technology-video__media');
    const preview = wrapper.querySelector('.technology-video__preview');
    const playBtn = wrapper.querySelector('.technology-video__btn-play');

    if (!video || !preview || !playBtn) return;

    playBtn.addEventListener('click', () => {
      wrapper.classList.add('is-playing');
      video.play();
    });

    video.addEventListener('ended', () => {
      wrapper.classList.remove('is-playing');
      video.currentTime = 0;
    });
  });
});
