(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t,n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("show")}))}),{threshold:[.5]}),r=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw a}}}}(document.querySelectorAll(".item"));try{for(r.s();!(t=r.n()).done;){var o=t.value;n.observe(o)}}catch(e){r.e(e)}finally{r.f()}[].slice.call(document.querySelectorAll('a[href*="#"]')).forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,r=setInterval((function(){var e=n/20;e>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,n),clearInterval(r))}),22.5)}))})),document.getElementById("menu-toggle").addEventListener("click",(function(){document.getElementById("menu").classList.toggle("hide")}))})();