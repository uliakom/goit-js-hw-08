// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(imgElements) {
    return imgElements
        .map(({ preview, original, description }) => {
            return   `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a></li>
`                                        ;  
    }
    ).join(''); 
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});