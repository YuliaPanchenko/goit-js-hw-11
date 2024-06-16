import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=document.querySelector(".gallery-form");document.querySelector(".btn");const c=document.querySelector(".gallery"),l=document.querySelector(".js-loader");d.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.text.value.trim();if(console.log(s),s===""){i.error({message:"Please enter a search query!"});return}p(),m(s).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=f(t.hits);c.innerHTML=n,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}).catch(t=>{}).finally(()=>{h()}),o.target.elements.text.value=""});function m(o){const s="https://pixabay.com",t="/api/",n=new URLSearchParams({key:"44363127-b4cd04443a44f0f2a63a731a6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${t}?${n}`;return fetch(e).then(r=>r.json())}function f(o){return c.innerHTML="",o.map(t=>`
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
    `).join("")}function p(){l.classList.remove("hidden")}function h(){l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
