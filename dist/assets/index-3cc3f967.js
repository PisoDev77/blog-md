(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const f="menu-btn";function b(){return`<button id="${f}">menu show</button>`}const h=t=>t.target.id===f,o=[{id:"55ed2418-aecb-4380-85af-714f67bc3b3b",category:"javascript",title:"md\\javascripttest2",date:1681725685917,content:`<h1 id="js-글입니다">jS 글입니다.</h1>
`},{id:"b5eec095-4ad3-407e-a4f8-1bc83216cf84",category:"react",title:"md\\reacttest1",date:1681725685924,content:`<h1 id="리액트-카테고리의-글입니다">리액트 카테고리의 글입니다.</h1>
`}],v=["javascript","react"],g=t=>[...t==="all"?o:o.filter(e=>e.category===t)],$=()=>o.length,A=()=>v,L=t=>o.find(n=>n.id+""===t);function j(){return`
  <div class="modal">
    <section class="menus">
      <h1>Piso's Blog<sub> (${$()})</sub></h1>
      ${A().map(t=>`<h2 data-category="${t}">${t}
            (${g(t).length})</h2>`).join("")}
    </section>
  </div>
  `}const m="blog-navigation";function N(t){return`
  ${b()}
  <nav class="${m}"> 
    ${t?j():""}
  </nav>`}const P=t=>{const e=t.target;if(e.closest("."+m)){const n=e.dataset.category;return n?[...g(n)]:void 0}},p="content-body";function w(t){return`
  <article class="${p}">${t!==void 0?(()=>Array.isArray(t)?t.map(n=>`<section data-id="${n.id}">${n.title}</section>`).join(""):`<section data-id="${t.id}">${t.content}</section>`)():""}</article>
  `}const u=t=>{const e=t.target;if(e.closest("."+p)){const n=e.dataset.id;return L(n??"")}},a=document.getElementById("app");document.body.className="markdown-body";const i={currentArticles:[],menus:!1},c=new Proxy(i,{set(t,e,n){return t[e]=n,y(e==="currentArticles"?n:i.currentArticles),!0}});a.addEventListener("click",t=>{const e=P(t);e&&(c.currentArticles=e),c.menus=!1});a.addEventListener("click",t=>{u(t)&&(c.currentArticles=u(t)),c.menus=!1});a.addEventListener("click",t=>{c.menus=h(t)});const y=t=>{a.innerHTML=N(i.menus)+w(t)};y(i.currentArticles);
