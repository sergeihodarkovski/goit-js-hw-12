import{a as b,i,S as w}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const v="44648929-0a3ca09e28beb33e491a22410";async function u(t,r){const n="https://pixabay.com/api/",a={key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{const e=await b.get(n,{params:a});if(e.status!==200)throw new Error(`HTTP error! Status: ${e.status}`);return e.data.hits.map(s=>({webformatURL:s.webformatURL,largeImageURL:s.largeImageURL,tags:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads}))}catch(e){throw console.error("Error fetching images:",e),e}}function f(t,r=!1){const n=document.getElementById("gallery"),a=t.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${e.likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${e.views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${e.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${e.downloads}
        </p>
      </div>
    </div>
  `).join("");r?n.insertAdjacentHTML("beforeend",a):n.innerHTML=a}function I(){const t=document.getElementById("gallery");t.innerHTML=""}const E=document.getElementById("search-form"),m=document.getElementById("search-input");document.getElementById("gallery");const g=document.querySelector(".loader"),d=document.querySelector(".btn");let c="",l=1;E.addEventListener("submit",async t=>{if(t.preventDefault(),c=m.value.trim(),c===""){i.error({message:"Please enter a search keyword."});return}I(),y(),L();try{l=1;const r=await u(c,l);r.length===0?i.info({message:"Sorry, no images matching your search query were found. Please try again!"}):(f(r),p(),m.value="",P())}catch(r){console.error("Error loading images:",r),i.error({message:"Failed to load images. Please try again later."})}h()});d.addEventListener("click",async()=>{l++;try{y();const t=await u(c,l);t.length>0?(f(t,!0),p()):(i.info({message:"No more images found."}),L())}catch(t){console.error("Error loading more images:",t),i.error({message:"Failed to load more images. Please try again later."})}h()});function y(){g.classList.remove("hidden")}function h(){g.classList.add("hidden")}function p(){new w(".gallery a",{}).refresh()}function P(){d.classList.remove("hidden")}function L(){d.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
