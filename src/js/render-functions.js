export default function renderImages(images){
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

// export function showLoader(){
//   loader.classList.remove("hidden");
// }

// export function hideLoader(){
//   loader.classList.add("hidden")
// }