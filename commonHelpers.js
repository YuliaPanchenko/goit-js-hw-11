import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery-form");document.querySelector(".btn");const c=document.querySelector(".gallery");l.addEventListener("submit",n=>{n.preventDefault();const s=n.target.elements.text.value.trim();if(console.log(s),s===""){a.error({message:"Please enter a search query!"});return}u(s).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=d(t.hits);c.innerHTML=o}).catch(t=>{})});function u(n){const s="https://pixabay.com",t="/api/",o=new URLSearchParams({key:"44363127-b4cd04443a44f0f2a63a731a6",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${t}?${o}`;return fetch(e).then(r=>r.json())}function d(n){return c.innerHTML="",n.map(t=>`
      <li class="card">
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
    `).join("")}
//# sourceMappingURL=commonHelpers.js.map
