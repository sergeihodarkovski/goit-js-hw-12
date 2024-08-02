import{a as w,i,S as v}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const I="44648929-0a3ca09e28beb33e491a22410";async function f(t,r){const a="https://pixabay.com/api/",n={key:I,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{const e=await w.get(a,{params:n});if(e.status!==200)throw new Error(`HTTP error! Status: ${e.status}`);const o=e.data;return{hits:o.hits.map(s=>({webformatURL:s.webformatURL,largeImageURL:s.largeImageURL,tags:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads})),totalHits:o.totalHits}}catch(e){throw console.error("Error fetching images:",e),e}}function g(t,r=!1){const a=document.getElementById("gallery"),n=t.map(e=>`
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
  `).join("");r?a.insertAdjacentHTML("beforeend",n):a.innerHTML=n}function P(){const t=document.getElementById("gallery");t.innerHTML=""}const E=document.getElementById("search-form"),m=document.getElementById("search-input");document.getElementById("gallery");const h=document.querySelector(".loader"),d=document.querySelector(".btn");let c="",l=1,u=1;const x=15;E.addEventListener("submit",async t=>{if(t.preventDefault(),c=m.value.trim(),c===""){i.error({message:"Please enter a search keyword."});return}P(),y();try{l=1;const{hits:r,totalHits:a}=await f(c,l);b(a),r.length===0?i.info({message:"Sorry, no images matching your search query were found. Please try again!"}):(g(r),L(),m.value="")}catch(r){console.error("Error loading images:",r),i.error({message:"Failed to load images. Please try again later."})}p()});d.addEventListener("click",async()=>{l++;try{y();const{hits:t,totalHits:r}=await f(c,l);t.length>0?(g(t,!0),L(),b(r)):i.info({message:"No more images found."})}catch(t){console.error("Error loading more images:",t),i.error({message:"Failed to load more images. Please try again later."})}p()});function y(){h.classList.remove("hidden")}function p(){h.classList.add("hidden")}function L(){new v(".gallery a",{}).refresh()}function b(t){u=Math.ceil(t/x),l>=u?(i.info({message:"We're sorry, but you've reached the end of search results."}),$()):H()}function H(){d.classList.remove("hidden")}function $(){d.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
