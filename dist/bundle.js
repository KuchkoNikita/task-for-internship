!function(o){var e={};function n(l){if(e[l])return e[l].exports;var t=e[l]={i:l,l:!1,exports:{}};return o[l].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=e,n.d=function(o,e,l){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:l})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)n.d(l,t,function(e){return o[e]}.bind(null,t));return l},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=0)}([function(o,e,n){"use strict";n.r(e);var l=o=>{const e=o.reduce((o,e)=>o+e.reduce((o,e)=>o+e),0);return Math.floor(e/o.length)};var t=o=>{const e=[];for(let n=0;n<3;n++){const n=Math.max(...o);e.push(n),o.splice(o.indexOf(n,0),1)}return e.reduce((o,e)=>o+e,0)};var r=o=>o.sort().reverse().join("");var s=o=>Array.from({length:o},(o,e)=>e+1).map((e,n,l)=>{console.log(e,o-e,n,l)});var c=(o,e,n)=>{let l=0;for(let t=0;t<n;t++)l=l+o+t*e;return l};var a=o=>{let e=0;for(let n=0;n<o.length;n++)for(let l=0;l<o[n].length;l++)n===l&&(e+=o[n][l]);return e};var u=(o,e)=>o.replace(/^[1-9]\s|[,.]/,"").replace(/ +/g,""+e).trim().toLowerCase();var g=o=>{const e=Number(o).toFixed(2).split("");return e.reduceRight((o,n,l)=>{const t=e.length-l-1;return e.length>6&&l<e.length-3&&t>3&&t%3==0&&o.unshift(","),o.unshift(n),o},[]).join("")};var i=o=>o.replace(/\s+|\W+|\d+|[_!&,.]+/g,"").split("").sort(([o],[e])=>o.toLowerCase()<e.toLowerCase()?-1:1).join("");var p=o=>{const e={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3};return o.split("").map(o=>e[o]).reduce((o,e,n,l)=>n>=l.indexOf(Math.max(...l))?o+e:o-e,0)};var d=o=>Object.values(o.split("").reduce((o,e)=>{const n=e.toLowerCase();return o[n]=o[n]||0,o[n]+=1,o},{})).filter(o=>o>1).length;var h=o=>o.replace(/\s+|\W+|\d+|[_!&,.]+/g,"").toLowerCase().split("").map(o=>o.charCodeAt()-96).join(" ");var m=o=>[].concat(...o).sort();var f=o=>e=>o+e;var v=o=>e=>o.map(o=>o*e);var b=o=>(o=new Set(o),[...o].reduce((o,e)=>o+e,0));var y=(o,e,n)=>(o.forEach(o=>{n=e(n,o)}),n);var w=(...o)=>e=>o.reduceRight((o,e)=>e(o),e);var S=(o,e)=>o(...e);var C=(o,e,n)=>(e.length<n.length?e:n).map((l,t)=>o(e[t],n[t]));const E=(o,e,n,l=o)=>o+n<=e?E(o+=n,e,n,l+=o):l;var x=E;const j=(o,e=[])=>(e.push(o.data),o.next?j(o.next,e):(e.push(o.next),e));var A=j;class O{constructor(o){return"object"==typeof O.instance?O.instance:(this.name=o,O.instance=this,this)}}function M(o){this.name=o,this.instance=null}M.getInstance=function(o){return this.instance||(this.instance=new M(o)),this.instance};String.prototype.customUpperCase=function(){const o=this.split("").map(o=>o.charCodeAt()>=97&&o.charCodeAt()<=122?o.charCodeAt()-32:o.charCodeAt());return String.fromCharCode(...o)};var I=(o,e)=>(o.sort((o,n)=>o[e]>n[e]?-1:o[e]<n[e]?1:0),o);var L=(o,e=0,n=1)=>Array.from({length:o}).reduce((o,l,t)=>(0!==t?o.push(o[t-1]+("function"==typeof n?n():n)):o.push(e),o),[]);console.log("1.1 sumAverage ",l([[1,2,2,1],[2,2,2,1]])),console.log("1.2 maxTripletSum",t([3,2,6,8,2,3])),console.log("1.3 biggest",r([3,30,34,5,9])),console.log("1.3 biggest",r([1,2,3])),console.group("1.4 pattern"),console.log(s(3)),console.log(s(6)),console.groupEnd(),console.log("1.5 arithmeticSequenceSum",c(2,3,5)),console.group("1.6 diagonalSum"),console.log(a([[5,9,1,0],[8,7,2,3],[1,4,1,9],[2,3,8,2]])),console.log(a([[1,2],[3,4]])),console.groupEnd(),console.group("2.1 toMachineName"),console.log(u("Hello, my name is Andrew","-")),console.log(u("Lorem ipsum sit       DOLOR","-")),console.log(u("3 basics and 1 advance","-")),console.groupEnd(),console.group("2.2 formatCurrency"),console.log(g(2546.2562)),console.log(g("1500.342626")),console.log(g(100.2134)),console.groupEnd(),console.group("2.3 alphabetized"),console.log(i("The Holy Bible.")),console.log(i("Hello!!!!!!!!!!!!!!!!!!!!!!")),console.groupEnd(),console.group("2.4 romanToNumber"),console.log(p("I")),console.log(p("C")),console.log(p("CI")),console.log(p("XXI")),console.log(p("IX")),console.groupEnd(),console.group("2.5 countDuplicates"),console.log(d("abcde")),console.log(d("aabbcde")),console.log(d("aabBcde")),console.log(d("indivisibility")),console.log(d("aA11")),console.groupEnd(),console.log("2.6 replaceWithAlphPositions",h("The sunset sets at twelve o’clock")),console.log("3.1 flattenAndSort",m([[3,2,1],[4,6,5],[],[9,7,8]]));const _=f(1),T=f(3);console.group("3.2 add"),console.log("3.2 addOne(3); : ",_(3)),console.log("3.2 addThree(3); : ",T(3)),console.groupEnd(),console.log("3.3 multiplyAll: ",v([1,2,3])(2)),console.group("3.4 uniqueSum"),console.log(b([1,2,3])),console.log(b([1,3,8,1,8])),console.log(b([-1,-1,5,2,-7])),console.log(b([])),console.groupEnd(),console.log("3.5 Reduce",y([1,2,3,4],(o,e)=>o*e,1));console.log("3.6 compose: ",w(o=>o+1,o=>o+2,o=>o+3)(1));console.log("4.1 spread",S((o,e)=>({num:o,bool:e}),[1,!0])),console.group("4.2 zipWith"),console.log(C(Math.pow,[10,10,10,10],[0,1,2,3])),console.log(C(Math.max,[1,4,7,1,4,7,8],[4,7,1,4,7,1])),console.groupEnd(),console.group("5.1 sequenceSum"),console.log(x(2,2,2)),console.log(x(2,6,2)),console.log(x(1,5,1)),console.log(x(1,5,3)),console.groupEnd();class P{constructor(o,e=null){this.data=o,this.next=e}}console.group("5.2 stringify"),console.log(A(new P(1,new P(2,new P(3))))),console.log(A(new P(0,new P(1,new P(4,new P(9,new P(16))))))),console.groupEnd();const H=new O,R=new O;H.name="Singleton",console.group("6.1 SingletonES6"),console.log(H===R),console.log(R.name),console.groupEnd();const U=M.getInstance(),W=M.getInstance();U.name="Singleton",console.group("6.1 SingletonES5"),console.log(U===W),console.log(W.name),console.groupEnd(),console.group("6.2 customUpperCase"),console.log("abc".customUpperCase()),console.log("Hello, world!".customUpperCase()),console.groupEnd();let X=[{a:1,b:3},{a:3,b:2},{a:2,b:40},{a:4,b:12}];X=I(X,"a"),console.log("7.1 customSort",X),console.group("additional-task"),console.log(L(10,2,1)),console.log(L(10,2,()=>5)),console.groupEnd()}]);