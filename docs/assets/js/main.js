var App;App=function(){function e(){hljs.initHighlightingOnLoad(),this.initSearch()}var t,n,a,r,i,s,o,c,u,l;return s="result-link",t=$("article.item"),a=$(".search-field"),n=$("[data-role=search-form]"),r=$(".suggestion-container"),i=$("."+s),l=[],u={keys:["name"],threshold:.3,caseSensitive:!1},o=t.map(function(){var e;return e=$(this),{name:e.data("name"),type:e.data("type"),node:e}}),c=new Fuse(o,u),e.prototype.fillSuggestions=function(e){return r.html(""),l=$.map(e.slice(0,10),function(e){var t;return t=$("<li />",{"data-type":e.type,"data-name":e.name,"class":"result",html:'<a href="#'+e.name+'" class="result-link"><code>'+e.type.slice(0,1)+"</code>"+e.name+"</a>"}),r.append(t)}),this.bindResultClicks()},e.prototype.search=function(e){return this.fillSuggestions(c.search(e))},e.prototype.bindResultClicks=function(){var e;return e=this,$("."+s).on("click",function(t){var n;return n=$(t.target),a.val(n.parent().data("name")),l=e.fillSuggestions([])})},e.prototype.initSearch=function(){var e;return e=this,a.on("keyup",function(t){var n;40!==t.keyCode&&38!==t.keyCode?(n=-1,l=e.search($(this).val())):t.preventDefault()}).on("search",function(){return l=e.search($(this).val())})},e}(),$(function(){return new App});