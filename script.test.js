/**
 * @jest-environment jsdom
 */

// Import the initializeGallery function from script.js
const initializeGallery = require('./script.js');

describe("Gallery Navigation Tests", () => {
  let galleryContainer, images, artPieceName, prevBtn, nextBtn;

  beforeEach(() => {
    // Arrange: Set up the DOM structure
    document.body.innerHTML = `
      <div class="gallery-container" style="transform: translateX(0%);">
        <img src="img1.jpg" data-name="Art Piece 1" />
        <img src="img2.jpg" data-name="Art Piece 2" />
        <img src="img3.jpg" data-name="Art Piece 3" />
      </div>
      <div class="art-piece-name"></div>
      <button class="prev-btn">Previous</button>
      <button class="next-btn">Next</button>
    `;

    // Arrange: Select the elements from the DOM
    galleryContainer = document.querySelector(".gallery-container");
    images = document.querySelectorAll(".gallery-container img");
    artPieceName = document.querySelector(".art-piece-name");
    prevBtn = document.querySelector(".prev-btn");
    nextBtn = document.querySelector(".next-btn");

    // Act: Trigger the DOMContentLoaded event manually for testing purposes
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  test("should initialize gallery with the first image displayed", () => {
    // Assert: Check if the gallery is initialized correctly
    expect(galleryContainer.style.transform).toBe("translateX(0%)");
    expect(artPieceName.textContent).toBe("Art Piece 1");
  });

  test("should display the next image when the next button is clicked", () => {
    // Act: Simulate a click on the next button
    nextBtn.click();

    // Assert: Check if the gallery moved to the next image
    expect(galleryContainer.style.transform).toBe("translateX(-100%)");
    expect(artPieceName.textContent).toBe("Art Piece 2");
  });

  test("should display the previous image when the prev button is clicked", () => {
    // Act: Simulate a click on the previous button
    prevBtn.click();

    // Assert: Check if the gallery moved to the previous image (wrapping around)
    expect(galleryContainer.style.transform).toBe("translateX(-200%)");
    expect(artPieceName.textContent).toBe("Art Piece 3");
  });

  // New Test 1: Wrap to the last image when "previous" is clicked on the first image
  test("should wrap to the last image when previous is clicked on the first image", () => {
    // Act: Simulate a click on the previous button when on the first image
    prevBtn.click();

    // Assert: Check if the gallery moved to the last image
    expect(galleryContainer.style.transform).toBe("translateX(-200%)");
    expect(artPieceName.textContent).toBe("Art Piece 3");
  });

  // New Test 2: Wrap to the first image when "next" is clicked on the last image
  test("should wrap to the first image when next is clicked on the last image", () => {
    // Act: Simulate a click on the next button when on the last image
    // First, navigate to the last image by clicking next twice
    nextBtn.click();
    nextBtn.click();

    // Now, simulate clicking next again to wrap around
    nextBtn.click();

    // Assert: Check if the gallery moved back to the first image
    expect(galleryContainer.style.transform).toBe("translateX(0%)");
    expect(artPieceName.textContent).toBe("Art Piece 1");
  });
});
