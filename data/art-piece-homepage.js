/*
    week 10: implement featured art piece function on homepage

    - will display under project purpose text
    - featured art piece text
        - will be in middle of web
        - will rotate through pics automatically every 1 min?
*/


const imagesArray = [
    'tilledField.jpg',
    'theScream.webp', 
    'theBlueRider.webp',
    'sunrise.jpg',
    'persistenceOfMemory.jpg',
    'danceAtLeMoulin.jpg'
];

function getRandomImage(){
    let randomIndex = Math.floor(Math.random() * imagesArray.length);
    let selectedImage = imagesArray[randomIndex];
    document.getElementById('imageShower').src = `./images/${selectedImage}`;
}

// Set the function to run when the page loads
window.onload = function() {
    getRandomImage();
    setInterval(getRandomImage, 5000);
}
