(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i=[{id:"8e1c2318-eeec-4e6d-b9f2-ef939db0f2ee",title:"md\\test1.md",date:1681708739449,content:`<h1 id="test1md">test1.md</h1>
`},{id:"d09479b8-a6e1-45e0-ac9d-fbc995ae6905",title:"md\\test2.md",date:1681708739455,content:`<h1 id="test2md">test2.md</h1>
`}];document.body.className="markdown-body";const s=document.createElement("nav");s.innerHTML=`
  <nav>
    <h1>Piso's Blog<small>(${i.length})</small></h1>
  </nav>
`;const d=document.createElement("article");document.body.innerHTML=s.innerHTML+d.innerHTML;
