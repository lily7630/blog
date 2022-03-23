import{_ as n,c as s,o as a,d as p}from"./app.78c371c1.js";const h='{"title":"\u6570\u7EC4\u53BB\u91CD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u7EC4\u53BB\u91CD","slug":"\u6570\u7EC4\u53BB\u91CD"},{"level":3,"title":"for  \u65B9\u6CD5\u548C  splice  \u65B9\u6CD5","slug":"for-\u65B9\u6CD5\u548C-splice-\u65B9\u6CD5"},{"level":3,"title":"includes \u6216 indexOf \u65B9\u6CD5","slug":"includes-\u6216-indexof-\u65B9\u6CD5"},{"level":3,"title":"ES6 Set \u53BB\u91CD","slug":"es6-set-\u53BB\u91CD"}],"relativePath":"javascript/\u6570\u7EC4\u53BB\u91CD.md","lastUpdated":1641282267783}',t={},o=p(`<h2 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1">\u6570\u7EC4\u53BB\u91CD <a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a></h2><h3 id="for-\u65B9\u6CD5\u548C-splice-\u65B9\u6CD5" tabindex="-1">for \u65B9\u6CD5\u548C splice \u65B9\u6CD5 <a class="header-anchor" href="#for-\u65B9\u6CD5\u548C-splice-\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7B2C\u4E00\u4E2A\u7B49\u540C\u4E8E\u7B2C\u4E8C\u4E2A\uFF0Csplice\u65B9\u6CD5\u5220\u9664\u7B2C\u4E8C\u4E2A</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        j<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="includes-\u6216-indexof-\u65B9\u6CD5" tabindex="-1">includes \u6216 indexOf \u65B9\u6CD5 <a class="header-anchor" href="#includes-\u6216-indexof-\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">// includes</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tempArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> tempArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// indexOf</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tempArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> tempArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="es6-set-\u53BB\u91CD" tabindex="-1">ES6 Set \u53BB\u91CD <a class="header-anchor" href="#es6-set-\u53BB\u91CD" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>result<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{h as __pageData,m as default};
