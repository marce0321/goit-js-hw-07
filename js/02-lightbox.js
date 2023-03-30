import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector(".galery");

const galleryMarkup = galleryItems
.map((element)=>
`<li class="galery__item">
<a class="gallery__link" href="${element.original}">
<img 
    class="gallery__image" 
    src= "${element.preview}"
    alt="${element.description}"
/>
</a>
</li>`
)
.join("");

containerGallery.insertAdjacentHTML("aterbeing", galleyMarkup);
containerGallery.addEventListener('click',(event)=> event.preventDefault())
let lightbox = new SimpleLightbox('.gallery a',{
captionsData: 'alt',
captionsDealy: 250,
})
