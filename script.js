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
