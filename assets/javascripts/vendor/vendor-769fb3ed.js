var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,t){var n=e&&e.exec(t);return n&&0==n.index}function r(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return v(e)||"no-highlight"==e})[0]}function i(e,t){var n={};for(var r in e)n[r]=e[r];if(t)for(var r in t)n[r]=t[r];return n}function a(e){var n=[];return function r(e,i){for(var a=e.firstChild;a;a=a.nextSibling)3==a.nodeType?i+=a.nodeValue.length:"br"==t(a)?i+=1:1==a.nodeType&&(n.push({event:"start",offset:i,node:a}),i=r(a,i),n.push({event:"stop",offset:i,node:a}));return i}(e,0),n}function s(n,r,i){function a(){return n.length&&r.length?n[0].offset!=r[0].offset?n[0].offset<r[0].offset?n:r:"start"==r[0].event?n:r:n.length?n:r}function s(n){function r(t){return" "+t.nodeName+'="'+e(t.value)+'"'}l+="<"+t(n)+Array.prototype.map.call(n.attributes,r).join("")+">"}function c(e){l+="</"+t(e)+">"}function o(e){("start"==e.event?s:c)(e.node)}for(var u=0,l="",f=[];n.length||r.length;){var h=a();if(l+=e(i.substr(u,h[0].offset-u)),u=h[0].offset,h==n){f.reverse().forEach(c);do o(h.splice(0,1)[0]),h=a();while(h==n&&h.length&&h[0].offset==u);f.reverse().forEach(s)}else"start"==h[0].event?f.push(h[0].node):f.pop(),o(h.splice(0,1)[0])}return l+e(i.substr(u))}function c(e){function t(e){return e&&e.source||e}function n(n,r){return RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,s){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},o=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");c[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.k?o("keyword",a.k):Object.keys(a.k).forEach(function(e){o(e,a.k[e])}),a.k=c}a.lR=n(a.l||/\b[A-Za-z0-9_]+\b/,!0),s&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=n(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=n(a.e)),a.tE=t(a.e)||"",a.eW&&s.tE&&(a.tE+=(a.e?"|":"")+s.tE)),a.i&&(a.iR=n(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(i(e,t))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,s);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?n(l.join("|"),!0):{exec:function(){return null}},a.continuation={}}}r(e)}function o(t,r,i,a){function s(e,t){for(var r=0;r<t.c.length;r++)if(n(t.c[r].bR,e))return t.c[r]}function l(e,t){return n(e.eR,t)?e:e.eW?l(e.parent,t):void 0}function f(e,t){return!i&&n(t.iR,e)}function h(e,t){var n=M.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function g(e,t,n,r){var i=r?"":m.classPrefix,a='<span class="'+i,s=n?"":"</span>";return a+=e+'">',a+t+s}function p(){if(!R.k)return e(L);var t="",n=0;R.lR.lastIndex=0;for(var r=R.lR.exec(L);r;){t+=e(L.substr(n,r.index-n));var i=h(R,r);i?(k+=i[1],t+=g(i[0],e(r[0]))):t+=e(r[0]),n=R.lR.lastIndex,r=R.lR.exec(L)}return t+e(L.substr(n))}function b(){if(R.sL&&!N[R.sL])return e(L);var t=R.sL?o(R.sL,L,!0,R.continuation.top):u(L);return R.r>0&&(k+=t.r),"continuous"==R.subLanguageMode&&(R.continuation.top=t.top),g(t.language,t.value,!1,!0)}function d(){return void 0!==R.sL?b():p()}function E(t,n){var r=t.cN?g(t.cN,"",!0):"";t.rB?(x+=r,L=""):t.eB?(x+=e(n)+r,L=""):(x+=r,L=n),R=Object.create(t,{parent:{value:R}})}function w(t,n){if(L+=t,void 0===n)return x+=d(),0;var r=s(n,R);if(r)return x+=d(),E(r,n),r.rB?0:n.length;var i=l(R,n);if(i){var a=R;a.rE||a.eE||(L+=n),x+=d();do R.cN&&(x+="</span>"),k+=R.r,R=R.parent;while(R!=i.parent);return a.eE&&(x+=e(n)),L="",i.starts&&E(i.starts,""),a.rE?0:n.length}if(f(n,R))throw new Error('Illegal lexeme "'+n+'" for mode "'+(R.cN||"<unnamed>")+'"');return L+=n,n.length||1}var M=v(t);if(!M)throw new Error('Unknown language: "'+t+'"');c(M);for(var R=a||M,x="",_=R;_!=M;_=_.parent)_.cN&&(x+=g(_.cN,x,!0));var L="",k=0;try{for(var C,y,B=0;;){if(R.t.lastIndex=B,C=R.t.exec(r),!C)break;y=w(r.substr(B,C.index-B),C[0]),B=C.index+y}w(r.substr(B));for(var _=R;_.parent;_=_.parent)_.cN&&(x+="</span>");return{r:k,value:x,language:t,top:R}}catch(I){if(-1!=I.message.indexOf("Illegal"))return{r:0,value:e(r)};throw I}}function u(t,n){n=n||m.languages||Object.keys(N);var r={r:0,value:e(t)},i=r;return n.forEach(function(e){if(v(e)){var n=o(e,t,!1);n.language=e,n.r>i.r&&(i=n),n.r>r.r&&(i=r,r=n)}}),i.language&&(r.second_best=i),r}function l(e){return m.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,m.tabReplace)})),m.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e){var t=m.useBR?e.innerHTML.replace(/\n/g,"").replace(/<br>|<br [^>]*>/g,"\n").replace(/<[^>]*>/g,""):e.textContent,n=r(e);if("no-highlight"!=n){var i=n?o(n,t,!0):u(t),c=a(e);if(c.length){var f=document.createElementNS("http://www.w3.org/1999/xhtml","pre");f.innerHTML=i.value,i.value=s(c,a(f),t)}i.value=l(i.value),e.innerHTML=i.value,e.className+=" hljs "+(!n&&i.language||""),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function h(e){m=i(m,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,f)}}function p(){addEventListener("DOMContentLoaded",g,!1),addEventListener("load",g,!1)}function b(e,t){var n=N[e]=t(this);n.aliases&&n.aliases.forEach(function(t){E[t]=e})}function d(){return Object.keys(N)}function v(e){return N[e]||N[E[e]]}var m={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},N={},E={};this.highlight=o,this.highlightAuto=u,this.fixMarkup=l,this.highlightBlock=f,this.configure=h,this.initHighlighting=g,this.initHighlightingOnLoad=p,this.registerLanguage=b,this.listLanguages=d,this.getLanguage=v,this.inherit=i,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]},this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]},this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]},this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},this.RM={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.TM={cN:"title",b:this.IR,r:0},this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("swift",function(e){var t="class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",n={cN:"type",b:"\\b[A-Z][\\w']*",r:0},r={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM,"self"]},i={cN:"subst",b:/\\\(/,e:"\\)",k:t,c:[]},a=e.inherit(e.QSM,{c:[i,e.BE]});return i.c=[e.CNM,e.TM,a],{k:{keyword:t,literal:"true false nil"},c:[a,e.CLCM,r,n,e.CNM,{cN:"func",bK:"func",e:/(\{)|(\->)/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"generics",b:/\</,e:/\>/,i:/\>/},{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/}]}}),function(){}.call(this);