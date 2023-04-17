(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const f="menu-btn";function h(){return`<button id="${f}">menu show</button>`}const v=t=>t.target.id===f,o=[{id:"d9077a45-0f38-4023-829b-a7f01fa7a624",category:"javascript",title:"md\\javascriptundefined",date:1681726108334,content:`<h1 id="js-글입니다">jS 글입니다.</h1>
`},{id:"c8c5fd8d-6f0e-44bd-9719-d6811d42556d",category:"react",title:"md\\reactundefined",date:1681726108341,content:`<h1 id="리액트-카테고리의-글입니다">리액트 카테고리의 글입니다.</h1>
`}],$=["javascript","react"],g=t=>[...t==="all"?o:o.filter(e=>e.category===t)],b=()=>o.length,A=()=>$,L=t=>o.find(r=>r.id+""===t);function j(){return`
  <div class="modal">
    <section class="menus">
      <h1>Piso's Blog<sub> (${b()})</sub></h1>
      ${A().map(t=>`<h2 data-category="${t}">${t}
            (${g(t).length})</h2>`).join("")}
    </section>
  </div>
  `}const m="blog-navigation";function N(t){return`
  ${h()}
  <nav class="${m}"> 
    ${t?j():""}
  </nav>`}const P=t=>{const e=t.target;if(e.closest("."+m)){const r=e.dataset.category;return r?[...g(r)]:void 0}},p="content-body";function w(t){return`
  <article class="${p}">${t!==void 0?(()=>Array.isArray(t)?t.map(r=>`<section data-id="${r.id}">${r.title}</section>`).join(""):`<section data-id="${t.id}">${t.content}</section>`)():""}</article>
  `}const u=t=>{const e=t.target;if(e.closest("."+p)){const r=e.dataset.id;return L(r??"")}},a=document.getElementById("app");document.body.className="markdown-body";const i={currentArticles:[],menus:!1},c=new Proxy(i,{set(t,e,r){return t[e]=r,y(e==="currentArticles"?r:i.currentArticles),!0}});a.addEventListener("click",t=>{const e=P(t);e&&(c.currentArticles=e),c.menus=!1});a.addEventListener("click",t=>{u(t)&&(c.currentArticles=u(t)),c.menus=!1});a.addEventListener("click",t=>{c.menus=v(t)});const y=t=>{a.innerHTML=N(i.menus)+w(t)};y(i.currentArticles);
