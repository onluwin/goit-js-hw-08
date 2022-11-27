
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryList = document.querySelector('.gallery');
// const galleryItem = document.querySelector('.gallery__item');

const markup = galleryItems.map
    (item => {
    return `<li><a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a></li>`
    } ).join('')
galleryList.innerHTML = markup

let gallery = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});