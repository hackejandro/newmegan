// Get references to the HTML elements
const tinyImage = document.querySelector('.tiny-image');
const bookImage = document.querySelector('.book-image');
const geeseImage = document.querySelector('.geese-image');
const jellyfishImage = document.querySelector('.jellyfish-image');
const burntMarshmallow = document.querySelector('.burnt-marshmallow');
const textMessageImage = document.querySelector('.text-message-image');

// Add a click event listener to the tiny image
tinyImage.addEventListener('click', function() {
  // Toggle the "hidden" class on each element
  bookImage.classList.toggle('hidden');
  geeseImage.classList.toggle('hidden');
  jellyfishImage.classList.toggle('hidden');
  textMessageImage.classList.toggle('hidden');
});

// Add a function to animate the jellyfish
function animateJellyfish() {
  const jellyfishImages = document.querySelectorAll('.jiggle');
  jellyfishImages.forEach(function(jellyfishImage) {
    // Generate a random angle for the rotation
    const rotationAngle = Math.floor(Math.random() * 30) - 15;
    jellyfishImage.style.transform = `rotate(${rotationAngle}deg)`;
  });
  // Call this function again in 500 milliseconds
  setTimeout(animateJellyfish, 500);
}

// Call the animateJellyfish function to start the animation
animateJellyfish();
