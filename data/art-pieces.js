const data = { 
	"artPieces": [
	  {
		"artID": 1,
		"artName": "Starry Night",
		"artist": "Vincent van Gogh",
		"artMovement": "Post-Impressionism",
		"timePeriod": "1889",
		"description": "A swirling night sky painted from van Gogh's asylum room in Saint-Rémy-de-Provence.",
		"currentLocation": "Museum of Modern Art, New York",
		"photoURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
	  },
	  // Add the other art pieces...
	]
  };
  
  function displayArtPiece(mockArtPiece = null) {
	  const featuredArt = mockArtPiece || data.artPieces[Math.floor(Math.random() * data.artPieces.length)];
	  const imageElement = document.getElementById("imageShower");
  
	  if (featuredArt.photoURL && featuredArt.photoURL.trim() != "") {
		  imageElement.src = featuredArt.photoURL;
	  } else {
		  imageElement.src = "http://localhost/default-image.jpg";
	  }
  }
  
  function initialize() {
	  displayArtPiece();
	  return setInterval(displayArtPiece, 5000); //update every 5 seconds
  }
  
  window.onload = initialize;
  
  module.exports = {
	data,
	displayArtPiece,
	initialize
  };
  