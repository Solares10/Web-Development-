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

    
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  it("should initialize gallery with the first image displayed", () => {
    expect(galleryContainer.style.transform).toBe("translateX(0%)");
    expect(artPieceName.textContent).toBe("Art Piece 1");
  });

  it("should display the next image when the next button is clicked", () => {
    nextBtn.click();

    expect(galleryContainer.style.transform).toBe("translateX(-100%)");
    expect(artPieceName.textContent).toBe("Art Piece 2");
  });

  it("should display the previous image when the prev button is clicked", () => {
    prevBtn.click();

    expect(galleryContainer.style.transform).toBe("translateX(-200%)");
    expect(artPieceName.textContent).toBe("Art Piece 3");
  });

  
  it("should wrap to the last image when previous is clicked on the first image", () => {
    prevBtn.click();

    expect(galleryContainer.style.transform).toBe("translateX(-200%)");
    expect(artPieceName.textContent).toBe("Art Piece 3");
  });

  it("should wrap to the first image when next is clicked on the last image", () => {
    nextBtn.click();
    nextBtn.click();


    nextBtn.click();

    expect(galleryContainer.style.transform).toBe("translateX(0%)");
    expect(artPieceName.textContent).toBe("Art Piece 1");
  });
});
