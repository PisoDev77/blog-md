(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const f="menu-btn";function b(){return`<i class="${f} bx bx-menu"></i>`}const y=e=>!!e.target.classList.contains(f),l=[{id:"e50c6984-dc5d-4aaa-a46a-301c52a02c83",category:"javascript",title:"Debounce( 디바운스 ) VS Throttle( 쓰로틀 )",date:1681772113966,content:`<h1 id="debounce-디바운스--vs-throttle-쓰로틀-">Debounce( 디바운스 ) VS Throttle( 쓰로틀 )</h1>
<h2 id="debounce--디바운스-">Debounce ( 디바운스 )</h2>
<h3 id="구글-인프런-네이버-등-많은-웹-사이트에서-검색을-해보신-적-있나요">구글, 인프런, 네이버 등 많은 웹 사이트에서 검색을 해보신 적 있나요?</h3>
<ul>
<li>모든 서비스에는 서버가 존재합니다.</li>
<li>서버가 있다는 것은 누군가가 그 서버를 소유하고 전기를 사용해서 소비자에게 공급하는 것을 말합니다.</li>
<li>그래서 서버에게 너무 많은 요청을 하게되면 서버 소유자는 서버를 키워야 하고 그에 대한 비용이 청구됩니다.</li>
<li>이 비용은 소유자의 손익에 영향을 줍니다.</li>
</ul>
<h3 id="그래서-어떻게-하면-서버한테-덜-요청할-수-있을까요">그래서 어떻게 하면 서버한테 덜 요청할 수 있을까요?</h3>
<ul>
<li>브라우저에서는 <code>debounce</code>를 활용하여 일정 시간내의 이벤트 모음을 한 번의 요청으로 만들 수 있습니다.</li>
<li>이벤트 호출시 핸들러가 마저 실행되기 전에 이벤트가 다시 호출된다면 다시 핸들러를 호출하는 방식으로 핸들러들을 모아 한 번의 요청을 서버에게 합니다.</li>
<li>검색에서 자동완성이 대표적인 예가 될 수 있습니다.</li>
</ul>
<h3 id="그래서-브라우저-이벤트에서-debounce를-요약해보자면">그래서 브라우저 이벤트에서 <code>debounce</code>를 요약해보자면...</h3>
<ul>
<li>모든 이벤트를 감지하는 중, 이벤트 호출이 마무리 되기 전에 <code>동작들을 모아 한 번만</code> 실행되도록 하는 기법이다.</li>
</ul>
<h2 id="throttle--쓰로틀-">Throttle ( 쓰로틀 )</h2>
<blockquote>
<p>브라우저에서 많은 이벤트 중 최대 한 번만 동작이 실행하도록 하는 효울적 이벤트 요청을 위한 기법입니다.</p>
</blockquote>
<h3 id="모바일로-쿠팡같은-e-commerce에서-물건을-구입해-본-적-있나요">모바일로 쿠팡같은 E-Commerce에서 물건을 구입해 본 적 있나요?</h3>
<ul>
<li>모바일에서 상품을 검색하고 원하는 상품이 나올때까지 스크롤를 쭉 내려본 적이 있나요?</li>
<li>다들 한 번 쯤은 있을 거라 생각합니다.</li>
<li>꽤 많이 상품을 보다가 다른 이름으로 상품을 검색하고 싶어질 때도 있습니다.</li>
<li>또는 첫 화면 근처에 다시 한 번 보고 싶은 상품이 있는데 너무 많은 상품을 조회한 탓에 다시 스크롤해서 올라가기 귀찮고 어려울 수 있습니다.</li>
<li>이러한 불편함 또는 목적을 어떻게 웹에서 구현할 수 있을까요?</li>
</ul>
<h3 id="쓰로틀로-구현할-수-있을까요">쓰로틀로 구현할 수 있을까요?</h3>
<blockquote>
<p>여러가지 방법이 있을 수 있지만 <code>throttle</code>로 어떻게 해결할 수 있을까요?</p>
</blockquote>
<ul>
<li>같은 이벤트 <code>ex) scroll event, infinite scroll</code>가 짧은 시간 사이에 여러 번 실행된다면, 불필요한 이벤트 수행이 일어날 수 있습니다.</li>
<li>그러면 같은 이벤트를 불필요하지 않게 수행하려면 어떻게 해야할까?</li>
<li>매 <code>scroll event</code> 순간에 특정 동작이 필요하다면, 그 많은 이벤트를 브라우저에게 요청해야합니다. 어차피 같은 이벤트라면 일정 시간동안 모아서 한 번만 실행한다면 어떨까요?</li>
</ul>
<h3 id="그래서-브라우저-이벤트에서-throttle를-요약해보자면">그래서 브라우저 이벤트에서 <code>throttle</code>를 요약해보자면...</h3>
<ul>
<li>모든 이벤트를 감지하는 중, 특정 시간 이후에 <code>한 번만 원하는 동작</code>이 실행되도록 하는 기법이다.</li>
</ul>
`},{id:"acd4a6c2-1451-4b1a-92c4-59ae6ce60dee",category:"react",title:"test1",date:1681772113968,content:`<h2 id="리액트-카테고리의-글입니다">리액트 카테고리의 글입니다.</h2>
`}],v=["javascript","react"],h=e=>[...e==="all"?l:l.filter(t=>t.category===e)],$=()=>l.length,L=()=>v,A=e=>l.find(n=>n.id+""===e),x=e=>e.replace(/^\w/,t=>t.toUpperCase());function B(e){return`
  <div class="modal">
  <ul class="menus ${e?"slidein":"slideout"}">
    <h2>Piso's Blog<sub> (${$()})</sub></h2>
      ${L().map(t=>`<li data-category="${t}">
              ${x(t)} <sub>(${h(t).length})</sub>
            </li>`).join("")}
    </ul>
  </div>
  `}const m="blog-navigation";function w(e){return`
  ${b()}
  <nav class="${m}"> 
    ${e?B(e):""}
  </nav>`}const C=e=>{const t=e.target;if(t.closest("."+m)){const n=t.dataset.category;return n?[...h(n)]:void 0}};function E(e){const{id:t,title:n}=e;return`
    <section class="article-list-box" data-id="${t}">
      <h3>${n}</h3>
      <p>기타 정보</p>
    </section>
  `}function N(e){const{content:t}=e;return`
    <section">
      ${t}
    </section>
  `}const g="content-body";function P(e){return`
  <article class="${g}">${e!==void 0?(()=>{var n;return Array.isArray(e)?`
      <h2>${((n=e[0])==null?void 0:n.category)??""}</h2>
      ${e.map(c=>E(c)).join("")}`:N(e)})():""}</article>
  `}const u=e=>{const t=e.target;if(t.closest("."+g)){const n=t.closest(".article-list-box");if(n)return A(n.dataset.id??"")}},a=document.getElementById("app");document.body.className="markdown-body";const s={currentArticles:[],menus:!1},i=new Proxy(s,{set(e,t,n){return e[t]=n,p(t==="currentArticles"?n:s.currentArticles),!0}});a.addEventListener("click",e=>{const t=C(e);t&&(i.currentArticles=t),i.menus=!1});a.addEventListener("click",e=>{u(e)&&(i.currentArticles=u(e)),i.menus=!1});a.addEventListener("click",e=>{i.menus=y(e)});const p=e=>{a.innerHTML=w(s.menus)+P(e)};window.addEventListener("DOMContentLoaded",()=>{p(s.currentArticles)});
