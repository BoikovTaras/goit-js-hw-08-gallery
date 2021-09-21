import galleryItems from './gallery.js'


const galeryList = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const imageFull = document.querySelector('.lightbox__image');
const cardsGalery = createGaleryList(galleryItems);
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
closeBtn.addEventListener('click', modalClose);
galeryList.insertAdjacentHTML("beforeend", cardsGalery);
galeryList.addEventListener('click', modalOpen);

function createGaleryList(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="">
        <img class="gallery__image" src="${preview}" alt="${description}" full="${original}">
      </a>
    </li>
    `;

  })
    .join('');
};

function modalOpen(evt) { 
  evt.preventDefault();

  // const indexPic = galleryItems.map(indexImg => findIndex(indexImg));

  // console.log(indexPic);
  const isImageEl = evt.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return;
  };
  const fullImg = evt.target.getAttribute('full');
  const fullAlt = evt.target.getAttribute('alt');
  modalEl.classList.add('is-open');
  imageFull.setAttribute('src', fullImg);
  imageFull.setAttribute('alt', fullAlt);
  // let indexPic = galleryItems.indexOf('isImageEl');
  // console.log(indexPic);
};

function modalClose() {
  modalEl.classList.remove('is-open');
  imageFull.removeAttribute('src');
  imageFull.removeAttribute('alt');
};

window.addEventListener("keydown", closeEscOverlay);

function closeEscOverlay(event) {
  if (event.key !== 'Escape') {
    return
  };
  modalEl.classList.remove('is-open');
  imageFull.removeAttribute('src');
  imageFull.removeAttribute('alt');
};

const closeAtOverlay = document.querySelector('.lightbox__overlay');
closeAtOverlay.addEventListener('click', closeOverlay);

function closeOverlay() {
  modalEl.classList.remove('is-open');
  imageFull.removeAttribute('src');
  imageFull.removeAttribute('alt');
};

