// get a reference to the tiny image
const tinyImage = document.querySelector('.tiny-image');

// get a reference to the other images
const bookImage = document.querySelector('.book-image');
const geeseImage = document.querySelector('.geese-image');
const jellyfishImage = document.querySelector('.jellyfish-image');
const textMessageImage = document.querySelector('.text-message-image');

// add a click event listener to the tiny image
tinyImage.addEventListener('click', function() {
  // show the book image and caption
  bookImage.classList.remove('hidden');

  // show the geese image
  geeseImage.classList.remove('hidden');

  // show the jellyfish images
  jellyfishImage.classList.remove('hidden');

  // show the text message image
  textMessageImage.classList.remove('hidden');
});
