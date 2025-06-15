let currentIndex = 1;
  const carouselInner = document.getElementById('carouselInner');
  const slides = document.querySelectorAll('.carousel-item');

  const totalSlides = slides.length;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  carouselInner.appendChild(firstClone);
  carouselInner.insertBefore(lastClone, slides[0]);

  carouselInner.style.width = `${(totalSlides + 2) * 100}%`;

  carouselInner.style.transform = `translateX(-100%)`;

  function showSlide(index) {
    currentIndex = index;
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    if (currentIndex >= totalSlides + 1) return;
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    if (currentIndex <= 0) return;
    showSlide(currentIndex - 1);
  }

  carouselInner.addEventListener('transitionend', () => {
    if (carouselInner.children[currentIndex].id === "first-clone") {
     
      carouselInner.style.transition = 'none';
      currentIndex = 1;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (carouselInner.children[currentIndex].id === "last-clone") {
      
      carouselInner.style.transition = 'none';
      currentIndex = totalSlides;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  setInterval(() => {
    nextSlide();
  }, 4000);
