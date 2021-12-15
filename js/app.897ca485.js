(function(e){function t(t){for(var s,r,c=t[0],o=t[1],u=t[2],f=0,p=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-chat_client/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0170":function(e,t,n){"use strict";n("edd7")},"034f":function(e,t,n){"use strict";n("85ec")},"055b":function(e,t,n){"use strict";n("454c")},1040:function(e,t,n){"use strict";n("90f8")},1455:function(e,t,n){"use strict";n("d3e4")},"43d1":function(e,t,n){"use strict";n("b78f")},4437:function(e,t,n){"use strict";n("ca80")},"454c":function(e,t,n){},"47b3":function(e,t,n){},"47c6":function(e,t,n){},"4d14":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"app__wrapper"},[n("ChatHeader"),n("RouterView",{staticClass:"app_view"})],1)])},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BackgroundWrapper",[n("nav",{staticClass:"header",class:e.headerMobileClass},[e.isMenuPath?e._e():n("ButtonWithIcon",{staticClass:"header__exit",nativeOn:{click:function(t){return e.exitClickHandler.apply(null,arguments)}}},[n("ArrowSVG",{staticClass:"arrow__icon"})],1),n("div",{staticClass:"header__wrapper",class:e.wrapperMobileClass},[n("span",{staticClass:"header__dark"},[e._v("Simple")]),n("span",{staticClass:"header__light"},[e._v("Chat")])]),e.isMenuPath?n("ButtonWithIcon",{staticClass:"header__settings",nativeOn:{click:function(t){return e.settingsClickHandler.apply(null,arguments)}}},[n("SettingsSVG",{staticClass:"settings__icon"})],1):e._e()],1)])},c=[],o=(n("ac1f"),n("5319"),n("8c4f")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background-wrapper"},[e._t("default")],2)},l=[],f={name:"BackgroundWrapper"},p=f,d=(n("5773"),n("2877")),h=Object(d["a"])(p,u,l,!1,null,"5147c2fa",null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button"},[e._t("default")],2)},g=[],_={name:"ButtonWithIcon"},b=_,w=(n("0170"),Object(d["a"])(b,v,g,!1,null,"fdff9022",null)),C=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},e.$listeners),[n("path",{attrs:{d:"M499.029 184.32h-51.14c-1.638-5.461-3.428-9.059-5.363-13.319l36.024-36.195c5.329-5.33 5.332-14.056.005-19.389L396.586 33.31a13.673 13.673 0 00-9.661-4.025 13.645 13.645 0 00-9.66 3.995l-36.177 35.874c-4.29-1.969-7.946-3.798-13.408-5.467V12.971C327.68 5.431 322.25 0 314.709 0H198.656c-7.541 0-14.336 5.431-14.336 12.971V63.17c-4.096 1.694-8.77 3.555-13.222 5.576l-35.363-35.489a13.55 13.55 0 00-19.214.003l-82.066 82.065c-5.333 5.33-5.314 13.974.016 19.309l35.317 35.671c-2.06 4.488-3.947 8.555-5.676 14.017H14.336C6.795 184.32 0 189.751 0 197.291v116.053c0 7.539 6.795 14.336 14.336 14.336h49.776c1.726 4.096 3.622 8.835 5.677 13.317L34.45 376.166c-2.561 2.561-4 5.95-3.999 9.574a13.551 13.551 0 004.005 9.613l82.153 82.039c5.33 5.325 13.967 5.315 19.296-.011l35.186-35.486c4.452 2.019 9.131 3.876 13.227 5.572v50.198c0 7.539 6.795 14.336 14.336 14.336h116.053c7.541 0 12.971-6.797 12.971-14.336v-50.717c5.461-1.67 9.122-3.514 13.413-5.485l36.001 36.195c2.56 2.564 6.205 4.305 9.829 4.305h.003c3.622 0 7.096-1.739 9.657-4.301l82.016-82.189c2.56-2.561 3.998-6.119 3.996-9.742-.001-3.622-1.44-7.137-4.002-9.697l-36.058-35.714c1.931-4.253 3.718-8.544 5.355-12.64h51.141c7.541 0 12.971-6.797 12.971-14.336V197.291c0-7.54-5.43-12.971-12.971-12.971zm-14.336 116.053h-46.525c-5.945 0-11.207 3.506-13.01 9.172-2.986 9.384-6.78 18.396-11.278 27.124-2.721 5.278-1.716 11.627 2.485 15.826l33.266 33.202-62.703 62.717-33.067-33.12a13.658 13.658 0 00-15.968-2.467c-8.765 4.567-18.317 8.415-27.715 11.446-5.64 1.819-9.804 7.066-9.804 12.992v47.429h-88.747v-46.987c0-5.964-3.529-11.238-9.22-13.025-9.572-3.008-18.773-6.857-27.684-11.446-5.274-2.713-11.613-1.714-15.812 2.479l-32.696 32.696-62.819-62.768 32.582-32.57a13.657 13.657 0 002.463-15.958c-4.65-8.936-8.552-17.987-11.603-27.57-1.804-5.665-7.063-9.172-13.008-9.172H27.307v-88.747h46.525c5.945 0 11.207-4.187 13.01-9.854 3.053-9.591 6.959-19.157 11.612-28.097 2.75-5.282 1.757-11.825-2.453-16.039l-32.543-32.607 62.804-62.79 32.741 32.687a13.65 13.65 0 0015.895 2.475c8.921-4.59 17.949-8.443 27.509-11.446 5.689-1.787 9.22-7.064 9.22-13.028v-45.62h88.747V73.37c0 5.927 4.164 11.177 9.806 12.995 9.398 3.03 18.776 6.88 27.536 11.444 5.291 2.757 11.839 1.761 16.055-2.46l33.113-33.112 62.688 62.738-33.227 33.239a13.652 13.652 0 00-2.475 15.909c4.5 8.733 8.3 18.261 11.287 27.648 1.802 5.665 7.068 9.855 13.013 9.855h46.524v88.747z"}}),n("path",{attrs:{d:"M256 114.005c-77.92 0-141.312 63.392-141.312 141.312S178.08 396.629 256 396.629s141.312-63.392 141.312-141.312S333.92 114.005 256 114.005zm0 255.318c-62.863 0-114.005-51.143-114.005-114.005S193.137 141.312 256 141.312s114.005 51.143 114.005 114.005S318.863 369.323 256 369.323z"}}),n("path",{attrs:{d:"M256 178.859c-42.159 0-76.459 34.299-76.459 76.459 0 42.16 34.3 76.459 76.459 76.459s76.459-34.299 76.459-76.459c0-42.161-34.3-76.459-76.459-76.459zm0 125.61c-27.103 0-49.152-22.049-49.152-49.152s22.049-49.152 49.152-49.152 49.152 22.049 49.152 49.152-22.049 49.152-49.152 49.152z"}})])},j=[],y={},O=Object(d["a"])(y,k,j,!1,null,null,null),x=O.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44.952 44.952"}},e.$listeners),[n("path",{attrs:{d:"M44.952 22.108c0-1.25-.478-2.424-1.362-3.308L30.627 5.831a2.5 2.5 0 00-3.536 0 2.511 2.511 0 000 3.546l10.574 10.57H2.484C1.102 19.948 0 21.081 0 22.464v.028c0 1.382 1.102 2.523 2.484 2.523h35.182L27.094 35.579a2.504 2.504 0 003.538 3.54l12.958-12.97a4.633 4.633 0 001.362-3.309v-.732z"}})])},P=[],E={},H=Object(d["a"])(E,$,P,!1,null,null,null),B=H.exports,S="/",M="/settings",W="/search",V="/chat",I="*",z=o["a"].isNavigationFailure,A=o["a"].NavigationFailureType,L={name:"ChatHeader",components:{BackgroundWrapper:m,ButtonWithIcon:C,SettingsSVG:x,ArrowSVG:B},data:function(){return{to:{path:location.pathname},from:null}},created:function(){this.to.path!==S&&this.$router.push(S)},computed:{isMenuPath:function(){return this.to.path===S},headerMobileClass:function(){return{header_mobile:!this.isMenuPath}},wrapperMobileClass:function(){return{header__wrapper_mobile:!this.isMenuPath}}},watch:{$route:function(e,t){this.to=e,this.from=t}},methods:{exitClickHandler:function(){this.$router.replace(S).catch((function(e){if(z(e,A.aborted))return null}))},settingsClickHandler:function(){this.$router.push(M)}}},R=L,T=(n("055b"),Object(d["a"])(R,r,c,!1,null,"a91bf588",null)),F=T.exports,G={name:"App",components:{ChatHeader:F}},N=G,q=(n("034f"),n("43d1"),Object(d["a"])(N,a,i,!1,null,"4807f846",null)),D=q.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BackgroundWrapper",[n("div",{staticClass:"menu"},[n("ChatButton",{staticClass:"menu__start-button",nativeOn:{click:function(t){return e.clickHandler.apply(null,arguments)}}},[e._v(" Start chatting! ")])],1)])},K=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"submit-button"},[e._t("default")],2)},U=[],X={name:"ChatButton"},Y=X,Z=(n("8eb6"),Object(d["a"])(Y,Q,U,!1,null,"e589f1e6",null)),ee=Z.exports,te={name:"MenuView",components:{ChatButton:ee,BackgroundWrapper:m},methods:{clickHandler:function(){this.$router.push(W)}}},ne=te,se=(n("d5f0"),Object(d["a"])(ne,J,K,!1,null,"6b5e5c9e",null)),ae=se.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BackgroundWrapper",[n("div",{staticClass:"settings"},[n("span",[e._v("Settings menu in progress")])])])},re=[],ce={name:"SettingsView",components:{BackgroundWrapper:m}},oe=ce,ue=(n("1040"),Object(d["a"])(oe,ie,re,!1,null,"8df33dd2",null)),le=ue.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-view"},[n("ChatWindow",{staticClass:"chat-view__window",attrs:{messages:e.messages,isPrinting:e.isPrinting}}),n("MessageArea",{attrs:{message:e.message},on:{"update:message":function(t){e.message=t},submit:e.submitHandler}}),n("ChatButton",{staticClass:"chat-view__submit-button",nativeOn:{click:function(t){return e.submitHandler.apply(null,arguments)}}},[e._v(" ➥ ")])],1)},pe=[],de=(n("498a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BackgroundWrapper",[n("div",{staticClass:"chat-window",class:{"chat-window_print":e.isPrinting}},[n("div",{staticClass:"chat-window__wrapper"},[e.messages.length?n("ul",{ref:"window",staticClass:"chat-window__list"},e._l(e.messages,(function(e){return n("ChatMessage",{key:e.id,attrs:{message:e}})})),1):e._e()])])])}),he=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{key:e.message.id,staticClass:"chat-item",class:{"chat-item_self":e.message.isSelf}},e._l(e.messageLines,(function(t,s){return n("span",{key:t+"_"+s,staticClass:"chat-item__line"},[e._v(" "+e._s(t.replaceAll(" "," "))+" ")])})),0)},ve=[],ge=(n("1276"),{name:"ChatMessage",props:{message:{type:Object,required:!0}},computed:{messageLines:function(){return this.message.text.split("\n")}}}),_e=ge,be=(n("775c"),Object(d["a"])(_e,me,ve,!1,null,"2fcd496e",null)),we=be.exports,Ce={name:"ChatWindow",components:{BackgroundWrapper:m,ChatMessage:we},props:{messages:{type:Array,default:function(){return[]}},isPrinting:{type:Boolean,default:!1}},mounted:function(){this.scrollIntoBottom()},updated:function(){this.scrollIntoBottom()},methods:{scrollIntoBottom:function(){this.$refs.window&&this.$refs.window.scrollIntoView(!1)}}},ke=Ce,je=(n("de7b"),Object(d["a"])(ke,de,he,!1,null,"b62eba06",null)),ye=je.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BackgroundWrapper",[n("div",{staticClass:"message-area",class:{"message-area_placeholder":e.hasPlaceholder}},[n("textarea",{staticClass:"message-area__text",domProps:{value:e.message},on:{input:e.inputHandler,focus:e.focusHandler,blur:e.blurHandler,keypress:e.keypressHandler}}),n("ButtonWithIcon",{staticClass:"message-area__emoji",nativeOn:{click:function(t){return e.emojiPickerToggleHandler.apply(null,arguments)}}},[n("EmojiSVG",{staticClass:"emoji__icon"})],1),n("CustomEmojiPicker",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.emojiPickerHide,expression:"emojiPickerHide"},{name:"show",rawName:"v-show",value:e.isEmojiPickerOpen,expression:"isEmojiPickerOpen"}],on:{emojiClick:e.emojiClickHandler}})],1)])},xe=[],$e=n("e67d"),Pe=n.n($e),Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("emoji-picker",{ref:"picker",staticClass:"emoji-picker",class:e.theme})},He=[],Be=(n("f70b"),{name:"CustomEmojiPicker",props:{theme:{type:String,default:"light"}},mounted:function(){this.$refs.picker.addEventListener("emoji-click",this.clickHandler);var e=this.$refs.picker.shadowRoot.querySelector(".search-row");e&&e.remove();var t=this.$refs.picker.shadowRoot.querySelector(".picker");t.style.borderRadius="10px",t.style.boxShadow="0 0 4px 0 rgba(0, 0, 0, 0.6)"},methods:{clickHandler:function(e){var t=e.detail.unicode;this.$emit("emojiClick",t)}}}),Se=Be,Me=(n("1455"),Object(d["a"])(Se,Ee,He,!1,null,"5bd071c9",null)),We=Me.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},e.$listeners),[n("path",{attrs:{d:"M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999zm0 1.5a8.502 8.502 0 100 17.003A8.502 8.502 0 0012 3.5zM8.462 14.784A4.491 4.491 0 0012 16.502a4.491 4.491 0 003.535-1.714.75.75 0 111.177.93A5.991 5.991 0 0112 18.002a5.991 5.991 0 01-4.716-2.29.75.75 0 111.178-.928zM9 8.75a1.25 1.25 0 110 2.499A1.25 1.25 0 019 8.75zm6 0a1.25 1.25 0 110 2.499 1.25 1.25 0 010-2.499z",fill:"auto","fill-rule":"nonzero"}})])},Ie=[],ze={},Ae=Object(d["a"])(ze,Ve,Ie,!1,null,null,null),Le=Ae.exports,Re={name:"MessageArea",components:{CustomEmojiPicker:We,BackgroundWrapper:m,ButtonWithIcon:C,EmojiSVG:Le},directives:{ClickOutside:Pe.a},props:{message:{type:String,default:""}},mounted:function(){this.popupItem=this.$el},data:function(){return{isFocused:!1,isEmojiPickerOpen:!1}},computed:{hasPlaceholder:function(){return!this.isFocused&&!this.message}},methods:{inputHandler:function(e){this.$emit("update:message",e.target.value)},emojiClickHandler:function(e){this.$emit("update:message",this.message+e)},emojiPickerToggleHandler:function(){this.isEmojiPickerOpen=!this.isEmojiPickerOpen},emojiPickerHide:function(){this.isEmojiPickerOpen=!1},focusHandler:function(){this.isFocused=!0},blurHandler:function(){this.isFocused=!1},keypressHandler:function(e){e.shiftKey||"Enter"!==e.key||(e.preventDefault(),this.$emit("submit"))}}},Te=Re,Fe=(n("4437"),Object(d["a"])(Te,Oe,xe,!1,null,"8310cd38",null)),Ge=Fe.exports,Ne={data:function(){return{isOut:!1}},created:function(){window.onbeforeunload=function(){return""}},beforeRouteLeave:function(e,t,n){var s=this.isOut;if(!this.isOut){var a="Do you really want to leave? Changes made may not be saved!";s=window.confirm(a),this.isOut=s}n(s)},destroyed:function(){window.onbeforeunload=null}},qe=Ne,De={name:"ChatView",components:{ChatButton:ee,MessageArea:Ge,ChatWindow:ye},mixins:[qe],data:function(){return{message:"",isPrinting:!1,messages:[]}},beforeRouteEnter:function(e,t,n){t.path!==W&&n(S),n()},methods:{submitHandler:function(){this.message.trim()&&(this.messages.push({id:Date.now(),isSelf:!0,text:this.message}),this.message="")}}},Je=De,Ke=(n("90d0"),Object(d["a"])(Je,fe,pe,!1,null,"aeb8a302",null)),Qe=Ke.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BackgroundWrapper",[n("div",{staticClass:"search"},[n("LoaderIcon")],1)])},Xe=[],Ye=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ze=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[n("div"),n("div")])}],et={name:"LoaderIcon"},tt=et,nt=(n("f304"),Object(d["a"])(tt,Ye,Ze,!1,null,"f7259e1a",null)),st=nt.exports,at={name:"SearchView",components:{LoaderIcon:st,BackgroundWrapper:m},beforeRouteEnter:function(e,t,n){t.path!==S&&n(S),n()},created:function(){var e=this;setTimeout((function(){e.$router.push(V)}),1e3)}},it=at,rt=(n("c127"),Object(d["a"])(it,Ue,Xe,!1,null,"7aa303bc",null)),ct=rt.exports;s["a"].use(o["a"]);var ot=new o["a"]({mode:"history",routes:[{path:S,component:ae},{path:M,component:le},{path:W,component:ct},{path:V,component:Qe},{path:I,redirect:S}]});s["a"].config.productionTip=!1,new s["a"]({router:ot,render:function(e){return e(D)}}).$mount("#app")},5773:function(e,t,n){"use strict";n("fdea")},"6a52":function(e,t,n){},"775c":function(e,t,n){"use strict";n("6a52")},"85ec":function(e,t,n){},"8eb6":function(e,t,n){"use strict";n("c6b4")},"90d0":function(e,t,n){"use strict";n("ccb1")},"90f8":function(e,t,n){},b78f:function(e,t,n){},c127:function(e,t,n){"use strict";n("47b3")},c6b4:function(e,t,n){},c7ff:function(e,t,n){},ca80:function(e,t,n){},ccb1:function(e,t,n){},d3e4:function(e,t,n){},d5f0:function(e,t,n){"use strict";n("47c6")},de7b:function(e,t,n){"use strict";n("4d14")},edd7:function(e,t,n){},f304:function(e,t,n){"use strict";n("c7ff")},fdea:function(e,t,n){}});
//# sourceMappingURL=app.897ca485.js.map