(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const f="menu-btn";function h(){return`<button id="${f}">menu show</button>`}const $=t=>t.target.id===f,c=[{id:"2b57ddcf-993e-4541-8cf6-02e308ef5747",category:"javascript",title:"test2",date:1681727092993,content:`<h1 id="js-글입니다">jS 글입니다.</h1>
`},{id:"37e134ae-3e01-418f-a074-d945584658cd",category:"react",title:"test1",date:1681727093005,content:`<h1 id="리액트-카테고리의-글입니다">리액트 카테고리의 글입니다.</h1>
`}],v=["javascript","react"],g=t=>[...t==="all"?c:c.filter(e=>e.category===t)],b=()=>c.length,A=()=>v,L=t=>c.find(r=>r.id+""===t);function N(){return`
  <div class="modal">
    <section class="menus">
      <h1>Piso's Blog<sub> (${b()})</sub></h1>
      ${A().map(t=>`<h2 data-category="${t}">${t}
            (${g(t).length})</h2>`).join("")}
    </section>
  </div>
  `}const m="blog-navigation";function P(t){return`
  ${h()}
  <nav class="${m}"> 
    ${t?N():""}
  </nav>`}const j=t=>{const e=t.target;if(e.closest("."+m)){const r=e.dataset.category;return r?[...g(r)]:void 0}},p="content-body";function w(t){return`
  <article class="${p}">${t!==void 0?(()=>Array.isArray(t)?t.map(r=>`<section data-id="${r.id}">${r.title}</section>`).join(""):`<section data-id="${t.id}">${t.content}</section>`)():""}</article>
  `}const u=t=>{const e=t.target;if(e.closest("."+p)){const r=e.dataset.id;return L(r??"")}},a=document.getElementById("app");document.body.className="markdown-body";const i={currentArticles:[],menus:!1},o=new Proxy(i,{set(t,e,r){return t[e]=r,y(e==="currentArticles"?r:i.currentArticles),!0}});a.addEventListener("click",t=>{const e=j(t);e&&(o.currentArticles=e),o.menus=!1});a.addEventListener("click",t=>{u(t)&&(o.currentArticles=u(t)),o.menus=!1});a.addEventListener("click",t=>{o.menus=$(t)});const y=t=>{a.innerHTML=P(i.menus)+w(t)};y(i.currentArticles);
