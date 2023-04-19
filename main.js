(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function r(t,e,n){return(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}t.p="";var o=function(){function t(e,n,i,o,a,u,s){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_handMouseover",(function(){l._card.querySelector(".elements__image").style.opacity="0.06",l._card.querySelector(".elements__title").classList.add("shows"),l._card.querySelector(".elements__subtitle").classList.add("showss")})),r(this,"_handleMouseout",(function(){l._card.querySelector(".elements__image").style.opacity="1"})),this._nameValue=e,this._linkValue=n,this._descriptionValue=i,this._linksValue=o,this._templateSelector=a}var e,i;return e=t,(i=[{key:"_getTemplate",value:function(){return this._elementTemplate=document.querySelector(this._templateSelector).content,this._card=this._elementTemplate.querySelector(".elements__card").cloneNode(!0),this._card}},{key:"_setEventListners",value:function(){var t=this;this._card.addEventListener("mouseover",(function(){return t._handMouseover()})),this._card.addEventListener("mouseout",(function(){return t._handleMouseout()})),this._card.addEventListener("touchstart",(function(){return t._handMouseover()})),this._card.addEventListener("touchcancel",(function(){return t._handleMouseout()}))}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListners();var t=this._element.querySelector(".elements__image"),e=this._element.querySelector(".elements__title"),n=this._element.querySelector(".elements__subtitle"),r=this._element.querySelector(".elements__links");return t.setAttribute("src",this._linkValue),t.setAttribute("alt",this._nameValue),e.textContent=this._nameValue,n.textContent=this._descriptionValue,r.href=this._linksValue,this._element}}])&&n(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),a=[{name:"Colorist-nextjs",link:t.p+"91376a6f51d0f63e80e3.png",description:"Сайт парикмахера-колориста",links:"https://valeria-colorist.ru/"},{name:"Банные чаны",link:t.p+"8ef5cf744809d864d17b.png",description:"Интернет магазин",links:"https://menshikovzakhar.github.io/bathhouse-font/"},{name:"Mesto-react",link:t.p+"6323c8dbea4fc6a4596a.png",description:"Одностраничное приложение",links:"https://menshikovzakhar.github.io/react-mesto-auth/"},{name:"Путешествие по России",link:t.p+"8c391fe11c4d75fa37b9.png",description:"Landing page",links:"https://menshikovzakhar.github.io/russian-travel/"},{name:"Mesto",link:t.p+"533a4cf6e89e13bd7b3d.gif",description:"Учебный проект",links:"https://menshikovzakhar.github.io/mesto/"},{name:"Любимовка",link:t.p+"b6a8fd49b27623f9cd05.png",description:"Landing page",links:"https://menshikovzakhar.github.io/lubimovka/"},{name:"Colorist-react",link:t.p+"b507ed96219e1c2a1c2b.png",description:"Сайт парикмахера-колориста",links:"https://valeria-colorist.ru/"},{name:"Как научиться учиться",link:t.p+"d80c1621a95c9600ef8a.png",description:"Учебный проект",links:"https://menshikovzakhar.github.io/how-to-learn/"}];function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(i)?i:String(i)),r)}var i}var l=function(){function t(e,n){var r=e.data,i=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=r,this._renderer=i,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._initialArray.forEach((function(e){return t._renderer(e)}))}},{key:"addItems",value:function(t){this._container.append(t)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(i)?i:String(i)),r)}var i}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._buttonElement=n.querySelector(e.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(this._config.inputSelector)),this._formElement=n}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=" "}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_setButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._setButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"restartFormValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._setButtonState()}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=new l({data:a,renderer:function(t){p.addItems(function(t){return new o(t.name,t.link,t.description,t.links,".card-template").generateCard()}(t))}},".elements__list");p.renderItems();var h,y=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("show")}))}),{threshold:[.5]}),v=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}(document.querySelectorAll(".item"));try{for(v.s();!(h=v.n()).done;){var _=h.value;y.observe(_)}}catch(t){v.e(t)}finally{v.f()}[].slice.call(document.querySelectorAll('a[href*="#"]')).forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=document.querySelector(t.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,r=setInterval((function(){var t=n/20;t>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,t):(window.scrollTo(0,n),clearInterval(r))}),22.5)}))})),document.getElementById("menu-toggle").addEventListener("click",(function(){document.getElementById("menu").classList.toggle("hide")}));var b,g={};b={formSelector:".popup__forms",inputSelector:".popup__item",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__item_error",errorClass:"popup__input-error"},Array.from(document.querySelectorAll(b.formSelector)).forEach((function(t){var e=new m(b,t),n=t.getAttribute("name");g[n]=e,e.enableValidation()})),g.editProfile.restartFormValidation();var S=document.querySelector(".popup__forms");$(document).ready((function(){$("form").submit((function(){var t=$(this).attr("id"),e=$("#"+t);return $.ajax({type:"POST",url:"/mail.php",data:e.serialize(),beforeSend:function(){$(e).html(S)},success:function(t){$(e).html('<p style="text-align:center">'+t+"</p>")},error:function(t,n,r){$(e).html('<p style="text-align:center">'+data+"</p>")}}),!1}))}))})();