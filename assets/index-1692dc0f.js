(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const p="menu-btn";function b(){return`<i class="${p} bx bx-menu"></i>`}const y=e=>!!e.target.classList.contains(p),r=[{id:"ee460a9c-e926-4382-a9f1-974b1f7a3a6f",category:"javascript",title:"Debounce( 디바운스 ) VS Throttle( 쓰로틀 )",date:1681876584872,content:`<h1 id="debounce-디바운스--vs-throttle-쓰로틀-">Debounce( 디바운스 ) VS Throttle( 쓰로틀 )</h1>
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
구글, 인프런, 네이...`},{id:"e6b54a9f-6bd8-477e-b375-3d3bbbd1c304",category:"react",title:"React에서 컴포넌트 간에 데이터를 전달하는 방법들",date:1681876584875,content:`<h1 id="react에서-컴포넌트-간에-데이터를-전달하는-방법들">React에서 컴포넌트 간에 데이터를 전달하는 방법들</h1>
<h2 id="props-drilling">Props drilling</h2>
<h2 id="context-api">Context API</h2>
<h2 id="redux">Redux</h2>
`,description:`
Props drilling
Context API
Re...`},{id:"c642a6a0-8c91-465f-bdae-2469ad4edec5",category:"react",title:"<code>useContext</code>는 무엇이고 왜 사용하는가?",date:1681876584882,content:`<h1 id="usecontext는-무엇이고-왜-사용하는가"><code>useContext</code>는 무엇이고 왜 사용하는가?</h1>
<h2 id="usecontext">useContext</h2>
<ul>
<li><p>컴포넌트간 데이터를 전달하는 Hook</p>
</li>
<li><p>일반적으로 <code>prop</code>으로 하위 컴포넌트로 데이터를 전달하나 기타 이유들로 사용.</p>
<ul>
<li>컴포넌트의 계층 구조가 깊어질 때, (prop driling)</li>
<li>여러 컴포넌트가 같은 데이터를 사용할 때.</li>
</ul>
</li>
<li><p><code>Context API</code> 방법으로 <code>createContext</code>와 <code>useContext</code>를 사용하여 전역 상태를 관리할 때 사용.</p>
<ul>
<li><code>Provider</code>, <code>Consumer</code> 사용하는 대신, 좀 더 간단하게 Context API를 사용</li>
<li>Provider + Consumer + Class Component</li>
</ul>
<pre><code class="language-javascript">import React from &quot;react&quot;;

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    value: &quot;Hello&quot;,
  };

  render() {
    return (
      &lt;MyContext.Provider value={this.state.value}&gt;
        {this.props.children}
      &lt;/MyContext.Provider&gt;
    );
  }
}

const MyConsumer = MyContext.Consumer;

class MyComponent extends React.Component {
  render() {
    return &lt;MyConsumer&gt;{(value) =&gt; &lt;div&gt;{value}&lt;/div&gt;}&lt;/MyConsumer&gt;;
  }
}
</code></pre>
<ul>
<li><code>useContext</code></li>
</ul>
<pre><code class="language-javascript">import React, { useContext } from &quot;react&quot;;

const MyContext = React.createContext();

function MyComponent() {
  const value = useContext(MyContext);

  return &lt;div&gt;{value}&lt;/div&gt;;
}
</code></pre>
</li>
</ul>
<h3 id="컴포넌트간-데이터를-전달하니까-그냥-모든-상태를-usecontext를-관리하면-되지-않아">컴포넌트간 데이터를 전달하니까 그냥 모든 상태를 useContext를 관리하면 되지 않아?</h3>
<ul>
<li><code>useContext</code>로 같은 데이터를 상태로 사용하는 모든 컴포넌트가 렌더링되는 이슈가 존재.</li>
<li>모든 컴포넌트가 불필요하게 렌더링된다면, 성능이나 사용자 경험에 부정적 영향을 줄 수 있음.</li>
</ul>
<pre><code>
</code></pre>
`,description:`useContext는 무엇이고 왜 사용하는가?
useC...`},{id:"0814b65c-4e54-4e02-9bb3-c263d6adfb5f",category:"react",title:"<code>useReducer</code> 무엇이고 왜 사용하는가?",date:1681876584886,content:`<h1 id="usereducer-무엇이고-왜-사용하는가"><code>useReducer</code> 무엇이고 왜 사용하는가?</h1>
<h2 id="usereducer">useReducer</h2>
<ul>
<li><p><code>상태(state)</code>를 관리하기 위한 React Hook, <code>useState</code>보다 복잡한 상태를 관리할 때.</p>
<ul>
<li>상태에 대한 업데이트 로직이 복잡한 경우 ex) 한가지 상태(like count)에 대한 여러 로직이 존재한다면</li>
<li>여러 개의 하위 항목으로 구성된 복잡한 상태를 관리해야 하는 경우</li>
</ul>
<pre><code class="language-js">const products = [
  { id: 1, name: &quot;Product 1&quot;, price: 10, quantity: 5 },
  { id: 2, name: &quot;Product 2&quot;, price: 20, quantity: 10 },
  { id: 3, name: &quot;Product 3&quot;, price: 30, quantity: 2 },
];

const initialState = {
  cartItems: [],
  products,
};
</code></pre>
<ul>
<li>상태를 변경하는 로직이 컴포넌트 밖에 위치한 경우 (예를 들어, WebSocket으로 데이터를 받는 경우)</li>
<li>상태 업데이트 로직이 컴포넌트 안에 분산되지 않고, 한 곳에서 관리될 수 있으므로, 코드의 가독성과 유지보수성 ↑</li>
</ul>
</li>
</ul>
`,description:`useReducer 무엇이고 왜 사용하는가?
useRe...`},{id:"8054f9b5-6831-4d60-8325-feb85b052c9c",category:"react",title:"<code>useState</code>는 무엇이고 왜 사용하는가?",date:1681876584892,content:`<h1 id="usestate는-무엇이고-왜-사용하는가"><code>useState</code>는 무엇이고 왜 사용하는가?</h1>
<h2 id="usestate">useState</h2>
<ul>
<li><code>상태(state)</code>를 관리하기 위한 React Hook</li>
<li><code>함수형 컴포넌트</code>에서도 상태를 관리 <a href="">More</a></li>
</ul>
<h3 id="함수형-컴포넌트가-아니면-usestate가-아니라-다르게-상태를-관리하나요"><code>함수형 컴포넌트</code>가 아니면 <code>useState</code>가 아니라 다르게 상태를 관리하나요?</h3>
<ul>
<li><code>클래스 컴포넌트</code>가 존재하며, 클래스 컴포넌트에서는 상태를 관리하기 위해 <code>this.state</code> 객체를 사용하고, 상태 변경시 <code>this.setState</code> 메소드를 사용.</li>
<li>반면에 <code>함수형 컴포넌트</code>에서는 Hook을 사용한다는 차이가 있음.</li>
<li>최종적으로는 React에서 상태를 관리하는 동작은 같으나, <code>this</code>를 사용유무에 따라 가독성이 올라간다는 장점이 있음.</li>
</ul>
<h2 id="언제-사용하는가">언제 사용하는가?</h2>
<ul>
<li>컴포넌트가 <code>상태(state)</code>를 변경할 때, 렌더링이 필요한지 판단할 때</li>
<li>주로 지역 상태를 관리할 때; ex) 버튼의 클릭 상태나 입력 필드의 값<blockquote>
<p>해당 컴포넌트 내부에서 사용되는 상태 | 다른 컴포넌트에서 공유 X</p>
</blockquote>
</li>
<li>컴포넌트의 의존성 ↓ 유지보수 ↑, 재사용성↑</li>
</ul>
<h3 id="컴포넌트의-의존성이-뭔가요">컴포넌트의 의존성이 뭔가요?</h3>
<ul>
<li>컴포넌트의 의존성에서 <code>의존성(dependency)</code>는 다른 컴포넌트, 모듈 또는 라이브러리 등에 어떻게 의존하고 있는가.</li>
<li>즉, 컴포넌트가 얼마나 이들에 의해 값에 변화나 영향을 받는가 또는 얼마나 받는가를 의미.</li>
<li>React에서는 다른 컴포넌트, 모듈 또는 라이브러리 ex) Axios 를 주로 의미.</li>
<li>가능한 의존성을 줄이는 것을 목표 왜냐하면 유지보수성과 코드의 복잡도를 위해서.</li>
</ul>
`,description:`useState는 무엇이고 왜 사용하는가?
useSta...`}],x={id:"initial-article",category:"README",title:"",date:1681876584892,content:`<h1 id="blog-md">blog-md</h1>
<blockquote>
<p><code>TypeScript</code>와 <code>Vite</code> 그리고 <code>Node</code>의 <code>fs</code> 모듈을 활용한 &#39;Markdown to html&#39; 프로젝트입니다.
복잡한 기타 라이브러리들은 이해하기에 난해하여, 단순한 프로세스로 만든 프로젝트입니다.
<code>.md</code>파일을 <code>marked</code> 모듈을 이용해서 html문법으로 변환한 문자열을 가지고 SPA 형식의 웹페이지를 구현하고자 했습니다.</p>
</blockquote>
<ul>
<li>markdown을 정적 페이지로 볼 수 있는 프로젝트입니다.</li>
</ul>
`,description:""},v=["javascript","react"],C=()=>{const e=decodeURI(window.location.href+"/").slice(0,-1).split("/");return e[e.length-1]},h=e=>[...e==="all"?r:r.filter(t=>t.category===e)],q=()=>r.length,A=()=>v,g=e=>r.find(n=>n.id+""===e),R=()=>g(C())??x,P=e=>e.replace(/^\w/,t=>t.toUpperCase());function $(e){return`
  <div class="modal">
  <ul class="menus ${e?"slidein":"slideout"}">
    <h2>Piso's Blog<sub> (${q()})</sub></h2>
      ${A().map(t=>`<li data-category="${t}">
              ${P(t)} <sub>(${h(t).length})</sub>
            </li>`).join("")}
    </ul>
  </div>
  `}const m="blog-navigation";function M(e){return`
  ${b()}
  <nav class="${m}"> 
    ${e?$(e):""}
  </nav>`}const L=e=>{const t=e.target;if(t.closest("."+m)){const n=t.dataset.category;return n?[...h(n)]:void 0}};function S(e){const{id:t,title:n,description:i,category:o}=e;return`
    <section class="article-list-box" data-id="${t}">
      <div>
        <h3>${n}</h3>
        <p>${i}</p>
      </div>
      <img src="/${o}.svg" onerror="this.src ='/default.svg'" type="image/svg+xml" />
    </section>
  `}function k(e){const{content:t}=e;return`
    <section">
      ${t}
    </section>
  `}const f="content-body";function w(e){return`
  <article class="${f}">${e!==void 0?(()=>{var n;return Array.isArray(e)?`
      <h2>${((n=e[0])==null?void 0:n.category)??""}</h2>
      ${e.map(i=>S(i)).join("")}`:k(e)})():""}</article>
  `}const a=e=>{const t=e.target;if(t.closest("."+f)){const n=t.closest(".article-list-box");if(n)return g(n.dataset.id??"")}},d=document.getElementById("app");document.body.className="markdown-body";const u={currentArticles:[],menus:!1},l=new Proxy(u,{set(e,t,n){return e[t]=n,B(t==="currentArticles"?n:u.currentArticles),!0}});d.addEventListener("click",e=>{const t=L(e);t&&(l.currentArticles=t),l.menus=!1});d.addEventListener("click",e=>{a(e)&&(l.currentArticles=a(e)),l.menus=!1});d.addEventListener("click",e=>{l.menus=y(e)});const B=e=>{d.innerHTML=M(u.menus)+w(e)};window.addEventListener("DOMContentLoaded",()=>{l.currentArticles=R()});
//# sourceMappingURL=index-1692dc0f.js.map
