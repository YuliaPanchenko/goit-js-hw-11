import{i,S as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(o){const s="https://pixabay.com",t="/api/",n=new URLSearchParams({key:"44363127-b4cd04443a44f0f2a63a731a6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${t}?${n}`;return fetch(e).then(r=>r.json())}function d(o){return list.innerHTML="",o.map(t=>`
      <li class="card">
      <a class="card-link" href=${t.webformatURL}>
        <img src="${t.webformatURL}" alt="${t.tags}">
        <div class="stats">
          <div>
            <span class="elements">Likes</span>
            ${t.likes}
          </div>
          <div>
            <span class="elements">Views</span>
            ${t.views}
          </div>
          <div>
            <span class="elements">Comments</span>
            ${t.comments}
          </div>
          <div>
            <span class="elements">Downloads</span>
            ${t.downloads}
          </div>
        </div>
      </li>
    `).join("")}const m=document.querySelector(".gallery-form");document.querySelector(".btn");const f=document.querySelector(".gallery"),c=document.querySelector(".js-loader");m.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.text.value.trim();if(console.log(s),s===""){i.error({message:"Please enter a search query!"});return}p(),u(s).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=d(t.hits);f.innerHTML=n,new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}).catch(t=>{}).finally(()=>{h()}),o.target.elements.text.value=""});function p(){c.classList.remove("hidden")}function h(){c.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
