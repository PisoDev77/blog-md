(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const f="menu-btn";function b(){return`<i class="${f} bx bx-menu"></i>`}const y=e=>!!e.target.classList.contains(f),l=[{id:"b862a22a-68b3-4f16-9280-21c478420e0e",category:"javascript",title:"Debounce( 디바운스 ) VS Throttle( 쓰로틀 )",date:1681775789984,content:`<h1 id="debounce-디바운스--vs-throttle-쓰로틀-">Debounce( 디바운스 ) VS Throttle( 쓰로틀 )</h1>
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
`,description:`
Debounce ( 디바운스 )
구글, 인프런, 네이...`},{id:"25ec7c5c-7980-4ffa-a81e-c22fae7ceda6",category:"react",title:"test1",date:1681775789986,content:`<h2 id="리액트-카테고리의-글입니다">리액트 카테고리의 글입니다.</h2>
`,description:`리액트 카테고리의 글입니다.
`}],v={id:"initial-article",category:"README",title:"",date:1681775789986,content:`<h1 id="blog-md">blog-md</h1>
<blockquote>
<p><code>TypeScript</code>와 <code>Vite</code> 그리고 <code>Node</code>의 <code>fs</code> 모듈을 활용한 &#39;Markdown to html&#39; 프로젝트입니다.
복잡한 기타 라이브러리들은 이해하기에 난해하여, 단순한 프로세스로 만든 프로젝트입니다.
<code>.md</code>파일을 <code>marked</code> 모듈을 이용해서 html문법으로 변환한 문자열을 가지고 SPA 형식의 웹페이지를 구현하고자 했습니다.</p>
</blockquote>
<ul>
<li>markdown을 정적 페이지로 볼 수 있는 프로젝트입니다.</li>
</ul>
`,description:""},$=["javascript","react"],A=()=>{const e=decodeURI(window.location.href+"/").slice(0,-1).split("/");return e[e.length-1]},h=e=>[...e==="all"?l:l.filter(t=>t.category===e)],L=()=>l.length,w=()=>$,m=e=>l.find(n=>n.id+""===e),x=()=>m(A())??v,B=e=>e.replace(/^\w/,t=>t.toUpperCase());function E(e){return`
  <div class="modal">
  <ul class="menus ${e?"slidein":"slideout"}">
    <h2>Piso's Blog<sub> (${L()})</sub></h2>
      ${w().map(t=>`<li data-category="${t}">
              ${B(t)} <sub>(${h(t).length})</sub>
            </li>`).join("")}
    </ul>
  </div>
  `}const p="blog-navigation";function k(e){return`
  ${b()}
  <nav class="${p}"> 
    ${e?E(e):""}
  </nav>`}const C=e=>{const t=e.target;if(t.closest("."+p)){const n=t.dataset.category;return n?[...h(n)]:void 0}};function N(e){const{id:t,title:n,description:r}=e;return`
    <section class="article-list-box" data-id="${t}">
      <h3>${n}</h3>
      <p>${r}</p>
    </section>
  `}function P(e){const{content:t}=e;return`
    <section">
      ${t}
    </section>
  `}const g="content-body";function q(e){return`
  <article class="${g}">${e!==void 0?(()=>{var n;return Array.isArray(e)?`
      <h2>${((n=e[0])==null?void 0:n.category)??""}</h2>
      ${e.map(r=>N(r)).join("")}`:P(e)})():""}</article>
  `}const u=e=>{const t=e.target;if(t.closest("."+g)){const n=t.closest(".article-list-box");if(n)return m(n.dataset.id??"")}},s=document.getElementById("app");document.body.className="markdown-body";const a={currentArticles:[],menus:!1},i=new Proxy(a,{set(e,t,n){return e[t]=n,D(t==="currentArticles"?n:a.currentArticles),!0}});s.addEventListener("click",e=>{const t=C(e);t&&(i.currentArticles=t),i.menus=!1});s.addEventListener("click",e=>{u(e)&&(i.currentArticles=u(e)),i.menus=!1});s.addEventListener("click",e=>{i.menus=y(e)});const D=e=>{s.innerHTML=k(a.menus)+q(e)};window.addEventListener("DOMContentLoaded",()=>{i.currentArticles=x()});
