document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".gallery-container");
    const images = document.querySelectorAll(".gallery-container img");
    const artPieceName = document.querySelector(".art-piece-name");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentIndex = 0;
  
    // Function to update the displayed image and name
    function updateGallery(index) {
      currentIndex = (index + images.length) % images.length; // Wrap around the index
      const offset = -currentIndex * 100; // Shift by 100% per image
      galleryContainer.style.transform = `translateX(${offset}%)`;
  
      // Update the art piece name
      artPieceName.textContent = images[currentIndex].dataset.name;
    }
  
    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", () => {
      updateGallery(currentIndex - 1);
    });
  
    nextBtn.addEventListener("click", () => {
      updateGallery(currentIndex + 1);
    });
  
    // Initialize gallery
    updateGallery(currentIndex);
  });
  