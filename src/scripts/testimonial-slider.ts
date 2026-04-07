// Testimonial Auto Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.testimonial-slider') as HTMLElement;
  const slides = document.querySelectorAll('.testimonial-slider > div');
  const dots = document.querySelectorAll('.testimonial-dot');

  if (!slider || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayInterval: ReturnType<typeof setInterval>;

  // Initialize
  updateSlider(0);
  startAutoPlay();

  function updateSlider(index: number) {
    // Move slider
    if (slider) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Update active states
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % totalSlides;
    updateSlider(newIndex);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      updateSlider(index);
      startAutoPlay();
    });
  });

  // Pause on hover
  const container = slider.parentElement;
  if (container) {
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);
  }

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e: Event) => {
    const touchEvent = e as TouchEvent;
    touchStartX = touchEvent.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e: Event) => {
    const touchEvent = e as TouchEvent;
    touchEndX = touchEvent.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      stopAutoPlay();
      if (diff > 0) {
        nextSlide();
      } else {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider(newIndex);
      }
      startAutoPlay();
    }
  }
});