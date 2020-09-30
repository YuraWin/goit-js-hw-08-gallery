import srcGallery from '../gallery-items.js';
const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(srcGallery);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onFotoGalleryClick);

function createGalleryMarkup(source) {
  return source
    .map(({ preview, original, description }) => {
      return `
       <li class="gallery__item">
     <a
       class="gallery__link"
       href="${original}"
     >
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
       </li>`;
    })
    .join('');
}

function onFotoGalleryClick(evt) {
  evt.preventDefault();
  const clickElement = evt.target;
  if (!clickElement.classList.contains('gallery__image')) return;

  const urlImage = clickElement.dataset.source;
  const altDescription = clickElement.getAttribute('alt');
  const modalContainer = document.querySelector('.js-lightbox');

  openModalContainer();
  openImage(urlImage, altDescription);

  function openModalContainer() {
    modalContainer.classList.add('is-open');
    console.log(modalContainer);
  }
  function openImage(src, alt) {
    const image = modalContainer.querySelector('.lightbox__image');
    image.src = src;
    image.alt = alt;
  }
}
