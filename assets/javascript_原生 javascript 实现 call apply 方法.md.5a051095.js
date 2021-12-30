import{_ as n,c as s,o as a,d as p}from"./app.4f0fb7aa.js";const y='{"title":"\u539F\u751F javascript \u5B9E\u73B0 call apply \u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u539F\u751F javascript \u5B9E\u73B0 call apply \u65B9\u6CD5","slug":"\u539F\u751F-javascript-\u5B9E\u73B0-call-apply-\u65B9\u6CD5"},{"level":3,"title":"call \u65B9\u6CD5","slug":"call-\u65B9\u6CD5"},{"level":3,"title":"apply \u65B9\u6CD5","slug":"apply-\u65B9\u6CD5"}],"relativePath":"javascript/\u539F\u751F javascript \u5B9E\u73B0 call apply \u65B9\u6CD5.md","lastUpdated":1640613746901}',t={},o=p(`<h2 id="\u539F\u751F-javascript-\u5B9E\u73B0-call-apply-\u65B9\u6CD5" tabindex="-1">\u539F\u751F javascript \u5B9E\u73B0 call apply \u65B9\u6CD5 <a class="header-anchor" href="#\u539F\u751F-javascript-\u5B9E\u73B0-call-apply-\u65B9\u6CD5" aria-hidden="true">#</a></h2><h3 id="call-\u65B9\u6CD5" tabindex="-1">call \u65B9\u6CD5 <a class="header-anchor" href="#call-\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">// ES5</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A null \u6216\u8005 undefined\uFF0C\u540C\u65F6\u8003\u8651\u4F20\u9012\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u60C5\u51B5</span>
  obj <span class="token operator">=</span> obj <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;arguments[&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;obj.fn(&#39;</span> <span class="token operator">+</span> args <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ES6</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A null \u6216\u8005 undefined\uFF0C\u540C\u65F6\u8003\u8651\u4F20\u9012\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u60C5\u51B5</span>
  obj <span class="token operator">=</span> obj <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="apply-\u65B9\u6CD5" tabindex="-1">apply \u65B9\u6CD5 <a class="header-anchor" href="#apply-\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">// ES5</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_apply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A null \u6216\u8005 undefined\uFF0C\u540C\u65F6\u8003\u8651\u4F20\u9012\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u60C5\u51B5</span>
  obj <span class="token operator">=</span> obj <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> result<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;arr[&#39;</span><span class="token operator">+</span> i <span class="token operator">+</span><span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;obj.fn(&#39;</span><span class="token operator">+</span> args <span class="token operator">+</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ES6</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_apply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A null \u6216\u8005 undefined\uFF0C\u540C\u65F6\u8003\u8651\u4F20\u9012\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u60C5\u51B5</span>
  obj <span class="token operator">=</span> obj <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> result<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var j=n(t,[["render",c]]);export{y as __pageData,j as default};
