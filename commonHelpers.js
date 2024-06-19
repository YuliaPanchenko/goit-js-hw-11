import{i,S as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function u(n){const r="https://pixabay.com",o="/api/",t=new URLSearchParams({key:"44363127-b4cd04443a44f0f2a63a731a6",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${t}`;return fetch(e).then(s=>s.json())}function d(n){const r=document.querySelector(".gallery");return r.innerHTML="",n.map(t=>`
    <li class="card">
    <a class="card-link" href=${t.webformatURL}>
      <img src="${t.webformatURL}" alt="${t.tags}">
      <div class="stats">
        <div class="stats-item">
          <p class="elements">Likes</p>
          ${t.likes}
        </div>
        <div class="stats-item">
          <p class="elements">Views</p>
          ${t.views}
        </div>
        <div class="stats-item">
          <p class="elements">Comments</p>
          ${t.comments}
        </div>
        <div class="stats-item">
          <p class="elements">Downloads</p>
          ${t.downloads}
        </div>
      </div>
    </li>
  `).join("")}const m=document.querySelector(".gallery-form");document.querySelector(".btn");const f=document.querySelector(".gallery"),c=document.querySelector(".js-loader");m.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements.text.value.trim();if(console.log(r),r===""){i.error({message:"Please enter a search query!"});return}p(),u(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=d(o.hits);f.innerHTML=t,new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}).catch(o=>{console.log(o)}).finally(()=>{h()}),n.target.elements.text.value=""});function p(){c.classList.remove("hidden")}function h(){c.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
