// can now be directly called in tests
function initializeGallery() {
  const galleryContainer = document.querySelector(".gallery-container");
  const images = document.querySelectorAll(".gallery-container img");
  const artPieceName = document.querySelector(".art-piece-name");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  // updates displayed image and name
  function updateGallery(index) {
    currentIndex = (index + images.length) % images.length; // Wrap around the index
    const offset = -currentIndex * 100; // Shift by 100% per image
    galleryContainer.style.transform = `translateX(${offset}%)`;

    // updates art piece name
    artPieceName.textContent = images[currentIndex].dataset.name;
  }

  // event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    updateGallery(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    updateGallery(currentIndex + 1);
  });

  // initializes gallery
  updateGallery(currentIndex);
}

// if running in a test environment, export this function for use
if (typeof module !== 'undefined') {
  module.exports = initializeGallery;
}

// in a real browser, this will initialize when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeGallery);
