function showImages() {
  console.log('Click event triggered');
  const bookImage = document.querySelector('.book-image');
  const geeseImage = document.querySelector('.geese-image');
  const jellyfishImage = document.querySelector('.jellyfish-image');
  const textMessageImage = document.querySelector('.text-message-image');
  const marshmallowImage = document.querySelector('.burnt-marshmallow');
  const newJellyfishImage = document.querySelector('.jellyfish-image-bottom');


  bookImage.classList.remove('hidden');
  geeseImage.classList.remove('hidden');
  jellyfishImage.classList.remove('hidden');
  textMessageImage.classList.remove('hidden');
  marshmallowImage.classList.remove('hidden');
  newJellyfishImage.classList.remove('hidden');
}

const tinyImage = document.querySelector('.tiny-image');
tinyImage.addEventListener('click', showImages);
console.log('Click event triggered');

// const bookImage = document.querySelector('.book-image img');
// const kopenText = document.createElement('div');
// kopenText.classList.add('kopen-text');
// kopenText.innerText = 'KOPEN';
// document.body.appendChild(kopenText);

// bookImage.addEventListener('mouseover', () => {
//   kopenText.classList.add('move-down');
// });

// bookImage.addEventListener('mouseleave', () => {
//   kopenText.classList.remove('move-down');
// });

