const artModule = require('./art-pieces.js');

describe("Art Pieces Display Tests", () => {
  let imageElement;

  beforeEach(() => {
    // arrange, set up a mock DOM element for the image
    document.body.innerHTML = `<img id="imageShower" />`;
    imageElement = document.getElementById("imageShower");

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it("should display a random art piece image when displayArtPiece is called", () => {
    // arrange
    const mockArtPiece = {
      artID: 99,
      artName: "Mock Art Piece",
      artist: "Mock Artist",
      artMovement: "Mock Movement",
      timePeriod: "Mock Period",
      description: "Mock description",
      currentLocation: "Mock Location",
      photoURL: "" // empty photoURL
    };

    // act
    artModule.displayArtPiece(mockArtPiece);

    // assert
    expect(imageElement.src).toBe("http://localhost/default-image.jpg");
  });

  it("should set a default image when photoURL is empty", () => {
    // arrange
    const mockArtPiece = { ...artModule.data.artPieces[0], photoURL: "" };
    const mockSrc = "http://localhost/default-image.jpg";

    // act
    artModule.displayArtPiece(mockArtPiece);

    // assert
    expect(imageElement.src).toBe(mockSrc);
  });

  it("should call displayArtPiece on window.onload", () => {
    // arrange
    const displaySpy = jest.spyOn(artModule, 'displayArtPiece');
    const initializeSpy = jest.spyOn(artModule, 'initialize').mockImplementation(() => {
      // manually trigger the onload event
      window.onload();
    });

    // act, call the initialize method, which should trigger window.onload
    artModule.initialize();

    // assert, check if displayArtPiece was called
    expect(displaySpy).toHaveBeenCalledTimes(1);

    // cleanup
    displaySpy.mockRestore();
    initializeSpy.mockRestore();
  });

  it("should update the art piece every 5 seconds using setInterval", () => {
    // arrange
    const displaySpy = jest.spyOn(artModule, 'displayArtPiece');
    const initializeSpy = jest.spyOn(artModule, 'initialize').mockImplementation(() => {
      // manually trigger the onload event
      window.onload();
    });

    // act, start the interval by calling initialize
    artModule.initialize();

    // clear the initial call count
    displaySpy.mockClear();

    // fast forward 5 seconds and check if displayArtPiece was called
    jest.advanceTimersByTime(5000);
    expect(displaySpy).toHaveBeenCalledTimes(1);

    // fast forward another 5 seconds and check if displayArtPiece was called again
    jest.advanceTimersByTime(5000);
    expect(displaySpy).toHaveBeenCalledTimes(2);

    // cleanup
    displaySpy.mockRestore();
    initializeSpy.mockRestore();
  });
});
