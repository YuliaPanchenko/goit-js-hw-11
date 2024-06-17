import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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
    .catch(err=>{})
    .finally(()=>{
      hideLoader();
    });

    e.target.elements.text.value = "";
});

function getImages(images){
  const BASE_URL ="https://pixabay.com";
  const END_POINT = "/api/";
  const params = new URLSearchParams({
    key: "44363127-b4cd04443a44f0f2a63a731a6",
    q: images, 
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  // fetch(url).then(res=>{
  //   return res.json();
  // }).then(data=>{
  //   console.log(data);
  // })

  return fetch(url).then(res=>res.json());

}

function renderImages(images){
  list.innerHTML = '';

  const markup = images.map(image => {
    return `
      <li class="card">
      <a class="card-link" href=${image.webformatURL}>
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="stats">
          <div>
            <span class="elements">Likes</span>
            ${image.likes}
          </div>
          <div>
            <span class="elements">Views</span>
            ${image.views}
          </div>
          <div>
            <span class="elements">Comments</span>
            ${image.comments}
          </div>
          <div>
            <span class="elements">Downloads</span>
            ${image.downloads}
          </div>
        </div>
      </li>
    `;
  }).join('');
  return markup;
}

function showLoader(){
  loader.classList.remove("hidden");
}

function hideLoader(){
  loader.classList.add("hidden")
}