/*
    week 10: implement featured art piece function on homepage

    - will display under project purpose text
    - featured art piece text
        - will be in middle of web
        - will rotate through pics automatically every 1 min?
*/


const imagesArray = [
    'Irises.jpg'
];

function getRandomImage(){
    let randomIndex = Math.floor(Math.random() * imagesArray.length);
    let selectedImage = imagesArray[randomIndex];
    document.getElementById('imageShower').src = `./images/${selectedImage}`;
}

// Set the function to run when the page loads
window.onload = getRandomImage;
