import{a as v,i,S as I}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const P="44648929-0a3ca09e28beb33e491a22410";async function g(t,r){const n="https://pixabay.com/api/",a={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{const e=await v.get(n,{params:a});if(e.status!==200)throw new Error(`HTTP error! Status: ${e.status}`);return e.data.hits.map(s=>({webformatURL:s.webformatURL,largeImageURL:s.largeImageURL,tags:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads}))}catch(e){throw console.error("Error fetching images:",e),e}}function h(t,r=!1){const n=document.getElementById("gallery"),a=t.map(e=>`
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
  `).join("");r?n.insertAdjacentHTML("beforeend",a):n.innerHTML=a}function E(){const t=document.getElementById("gallery");t.innerHTML=""}const x=document.getElementById("search-form"),f=document.getElementById("search-input");document.getElementById("gallery");const y=document.querySelector(".loader"),m=document.querySelector(".btn");let l="",c=1,d=1;const $=15;x.addEventListener("submit",async t=>{if(t.preventDefault(),l=f.value.trim(),l===""){i.error({message:"Please enter a search keyword."});return}E(),p(),u();try{c=1;const r=await g(l,c);d=data.totalHits/$,r.length===0?i.info({message:"Sorry, no images matching your search query were found. Please try again!"}):(h(r),b(),f.value="",w())}catch(r){console.error("Error loading images:",r),i.error({message:"Failed to load images. Please try again later."})}L()});m.addEventListener("click",async()=>{c++;try{p();const t=await g(l,c);t.length>0?(h(t,!0),b(),B()):(i.info({message:"No more images found."}),u())}catch(t){console.error("Error loading more images:",t),i.error({message:"Failed to load more images. Please try again later."})}L()});function p(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}function b(){new I(".gallery a",{}).refresh()}function w(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}function B(t,r){d=Math.ceil(t/r),c>=d?(i.info({message:"We're sorry, but you've reached the end of search results."}),u()):w()}
//# sourceMappingURL=commonHelpers.js.map
