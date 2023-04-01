function showImages() {
  console.log('Click event triggered');
  const bookImage = document.querySelector('.book-image');
  const geeseImage = document.querySelector('.geese-image');
  const textMessageImage = document.querySelector('.text-message-image');
  const marshmallowImage = document.querySelector('.burnt-marshmallow');
  const newJellyfishImage = document.querySelector('.jellyfish-image-bottom');
  const contact = document.querySelector('.contact');
  const byeTinyImage = document.querySelector('.tiny-image');


  bookImage.classList.remove('hidden');
  geeseImage.classList.remove('hidden');
  textMessageImage.classList.remove('hidden');
  marshmallowImage.classList.remove('hidden');
  newJellyfishImage.classList.remove('hidden');
  contact.classList.remove('hidden');
  byeTinyImage.classList.add('hidden');
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

