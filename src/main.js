import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import getImages from "./js/pixabay-api"
import renderImages from "./js/render-functions"


const form = document.querySelector(".gallery-form");
const btnElem= document.querySelector(".btn");
const list = document.querySelector(".gallery");
const loader = document.querySelector(".js-loader");

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  const inputValue = e.target.elements.text.value.trim();
  console.log(inputValue);
  if (inputValue === ""){
    iziToast.error({
      message: 'Please enter a search query!',
    });
    return;
  }
  showLoader();
  getImages(inputValue).then(data=>{
    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    const markup = renderImages(data.hits);
    list.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
    lightbox.refresh();
  })
    .catch(err=>{
      console.log(err);
    })
    .finally(()=>{
      hideLoader();
    });

    e.target.elements.text.value = "";
});

function showLoader(){
  loader.classList.remove("hidden");
}

function hideLoader(){
  loader.classList.add("hidden")
}