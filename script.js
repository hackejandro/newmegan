function showImages() {
  console.log('Click event triggered');
  const bookImage = document.querySelector('.book-image');
  const geeseImage = document.querySelector('.geese-image');
  const jellyfishImage = document.querySelector('.jellyfish-image');
  const textMessageImage = document.querySelector('.text-message-image');
  const tinyImage = document.querySelector('.tiny-image');

  bookImage.classList.remove('hidden');
  geeseImage.classList.remove('hidden');
  jellyfishImage.classList.remove('hidden');
  textMessageImage.classList.remove('hidden');
  tinyImage.classList.add('hidden');
}

const tinyImage = document.querySelector('.tiny-image');
tinyImage.addEventListener('click', showImages);
console.log('Click event triggered');
