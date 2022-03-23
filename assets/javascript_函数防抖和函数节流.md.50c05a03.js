import{_ as n,c as a,o as s,d as t}from"./app.78c371c1.js";const f='{"title":"\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41","slug":"\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41"},{"level":3,"title":"\u51FD\u6570\u9632\u6296","slug":"\u51FD\u6570\u9632\u6296"}],"relativePath":"javascript/\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41.md","lastUpdated":1641303982406}',p={},o=t(`<h2 id="\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41" tabindex="-1">\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41 <a class="header-anchor" href="#\u51FD\u6570\u9632\u6296\u548C\u51FD\u6570\u8282\u6D41" aria-hidden="true">#</a></h2><h3 id="\u51FD\u6570\u9632\u6296" tabindex="-1">\u51FD\u6570\u9632\u6296 <a class="header-anchor" href="#\u51FD\u6570\u9632\u6296" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      fun <span class="token operator">&amp;&amp;</span> <span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u65B9\u6CD5</span>
<span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;\u53C2\u6570&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,3),e=[o];function c(u,l,i,k,r,d){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
