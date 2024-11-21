// data for art pieces

const exp = require("constants");

let data =  { "artPieces": [
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
	{
	  "artID": 2,
	  "artName": "Mona Lisa",
	  "artist": "Leonardo da Vinci",
	  "artMovement": "Renaissance",
	  "timePeriod": "1503",
	  "description": "The world's most famous portrait with an enigmatic smile.",
	  "currentLocation": "Louvre Museum, Paris",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
	},
	{
	  "artID": 3,
	  "artName": "The Persistence of Memory",
	  "artist": "Salvador Dalí",
	  "artMovement": "Surrealism",
	  "timePeriod": "1931",
	  "description": "A surreal landscape filled with melting clocks symbolizing the fluidity of time.",
	  "currentLocation": "Museum of Modern Art, New York",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
	},
	{
	  "artID": 4,
	  "artName": "The Birth of Venus",
	  "artist": "Sandro Botticelli",
	  "artMovement": "Renaissance",
	  "timePeriod": "1486",
	  "description": "Depicts Venus, the goddess of love, emerging from the sea on a shell.",
	  "currentLocation": "Uffizi Gallery, Florence",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
	},
	{
	  "artID": 5,
	  "artName": "Guernica",
	  "artist": "Pablo Picasso",
	  "artMovement": "Cubism",
	  "timePeriod": "1937",
	  "description": "A powerful anti-war painting depicting the horrors of the Spanish Civil War.",
	  "currentLocation": "Museo Reina Sofia, Madrid",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
	},
	{
	  "artID": 6,
	  "artName": "The Night Watch",
	  "artist": "Rembrandt van Rijn",
	  "artMovement": "Baroque",
	  "timePeriod": "1642",
	  "description": "A large and detailed group portrait of a city militia.",
	  "currentLocation": "Rijksmuseum, Amsterdam",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"
	},
	{
	  "artID": 7,
	  "artName": "The Scream",
	  "artist": "Edvard Munch",
	  "artMovement": "Expressionism",
	  "timePeriod": "1893",
	  "description": "A haunting image of a figure under a blood-red sky expressing despair.",
	  "currentLocation": "National Gallery, Oslo",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
	},
	{
	  "artID": 8,
	  "artName": "Girl with a Pearl Earring",
	  "artist": "Johannes Vermeer",
	  "artMovement": "Dutch Golden Age",
	  "timePeriod": "1665",
	  "description": "A famous portrait known as the 'Mona Lisa of the North,' featuring a young girl wearing an exotic earring.",
	  "currentLocation": "Mauritshuis, The Hague",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg"
	},
	{
	  "artID": 9,
	  "artName": "American Gothic",
	  "artist": "Grant Wood",
	  "artMovement": "Regionalism",
	  "timePeriod": "1930",
	  "description": "A classic painting of rural American life featuring a stern-looking farmer and his daughter.",
	  "currentLocation": "Art Institute of Chicago, Chicago",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
	},
	{
	  "artID": 10,
	  "artName": "The Creation of Adam",
	  "artist": "Michelangelo",
	  "artMovement": "High Renaissance",
	  "timePeriod": "1512",
	  "description": "Part of the Sistine Chapel ceiling frescoes, depicting the biblical creation of man.",
	  "currentLocation": "Sistine Chapel, Vatican City",
	  "photoURL": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
	}
  ]
}

function displayArtPiece(mockArtPiece = null) {
    const featuredArt = mockArtPiece || data.artPieces[Math.floor(Math.random() * data.artPieces.length)];
	const imageElement = document.getElementById("imageShower");

	//does the photoURl consist of only whitespace or empty?
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

