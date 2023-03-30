function showImages() {
  const bookImage = document.querySelector('.book-image');
  const geeseImage = document.querySelector('.geese-image');
  const jellyfishImage = document.querySelector('.jellyfish-image');
  const textMessageImage = document.querySelector('.text-message-image');

  bookImage.classList.remove('hidden');
  geeseImage.classList.remove('hidden');
  jellyfishImage.classList.remove('hidden');
  textMessageImage.classList.remove('hidden');
}

const tinyImage = document.querySelector('.tiny-image');
tinyImage.addEventListener('click', showImages);
