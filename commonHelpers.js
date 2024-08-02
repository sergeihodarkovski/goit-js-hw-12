import{a as v,i,S as I}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const E="44648929-0a3ca09e28beb33e491a22410";async function g(t,o){const a="https://pixabay.com/api/",n={key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{const e=await v.get(a,{params:n});if(e.status!==200)throw new Error(`HTTP error! Status: ${e.status}`);const r=e.data;return{hits:r.hits.map(s=>({webformatURL:s.webformatURL,largeImageURL:s.largeImageURL,tags:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads})),totalHits:r.totalHits}}catch(e){throw console.error("Error fetching images:",e),e}}function h(t,o=!1){const a=document.getElementById("gallery"),n=t.map(e=>`
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
  `).join("");o?a.insertAdjacentHTML("beforeend",n):a.innerHTML=n}function P(){const t=document.getElementById("gallery");t.innerHTML=""}const H=document.getElementById("search-form"),m=document.getElementById("search-input"),u=document.getElementById("gallery"),y=document.querySelector(".loader"),d=document.querySelector(".btn");let c="",l=1,f=1;const B=15;H.addEventListener("submit",async t=>{if(t.preventDefault(),c=m.value.trim(),c===""){i.error({message:"Please enter a search keyword."});return}P(),p();try{l=1;const{hits:o,totalHits:a}=await g(c,l);w(a),o.length===0?i.info({message:"Sorry, no images matching your search query were found. Please try again!"}):(h(o),b(),m.value="")}catch(o){console.error("Error loading images:",o),i.error({message:"Failed to load images. Please try again later."})}L()});d.addEventListener("click",async()=>{l++;try{p();const{hits:t,totalHits:o}=await g(c,l);t.length>0?(h(t,!0),b(),$(),w(o)):i.info({message:"No more images found."})}catch(t){console.error("Error loading more images:",t),i.error({message:"Failed to load more images. Please try again later."})}L()});function p(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}function b(){new I(".gallery a",{}).refresh()}function w(t){f=Math.ceil(t/B),l>=f?(i.info({message:"We're sorry, but you've reached the end of search results."}),x()):S()}function S(){d.classList.remove("hidden")}function x(){d.classList.add("hidden")}function $(){const t=u.querySelector(".photo-card:not(.old)");if(t){const a=t.getBoundingClientRect().height*3;scrollBy({top:a,behavior:"smooth"}),u.querySelectorAll(".photo-card").forEach(n=>n.classList.add("old"))}}
//# sourceMappingURL=commonHelpers.js.map
