/*! For license information please see component---src-pages-index-js-c0438339b8c1672d271e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/Suh":function(e,t,a){e.exports=a.p+"static/nehren-b239ac12cd769bd11b06244b0e08aeaf.png"},FfHN:function(e,t,a){e.exports=a.p+"static/kammeroper-augsburg-nachruf-3560178b176098187ee03f1fefdf5914.png"},GkIJ:function(e,t,a){e.exports=a.p+"static/portrait-cc2d5ab14c05a5747ad7963448353057.jpeg"},LwUR:function(e,t,a){e.exports=a.p+"static/zamir-8653f480949e0e6f1742cffd39478e3e.png"},OTPB:function(e,t,a){e.exports=a.p+"static/berkheim-610b255a68057a36fb6b121036d51664.png"},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),c=a("7oih"),l=a("+22N"),i=a("obyI"),o=a.n(i);function s(){return n.a.createElement("footer",{className:"bg-black small text-center text-white-50"},n.a.createElement("div",{className:"container"},"Copyright © Familie Straube 2021"))}function m(e,t,a,r,n,c,l){try{var i=e[c](l),o=i.value}catch(s){return void a(s)}i.done?t(o):Promise.resolve(o).then(r,n)}var u=a("o0o1"),h=a.n(u),d=a("zIRd");d.a.registerVersion("firebase","8.6.1","app"),d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyAJnCV0mzUuzS9tNDV_wenyVO9SD2C_NhA",authDomain:"kondolenz-klaus.firebaseapp.com",databaseURL:void 0,projectId:"kondolenz-klaus",storageBucket:"kondolenz-klaus.appspot.com",messagingSenderId:"693109076423",appId:"1:693109076423:web:8db46978d61c6f642c69e2",measurementId:void 0});var f=d.a;a("5x/H");f.apps.length||f.initializeApp({apiKey:"AIzaSyAJnCV0mzUuzS9tNDV_wenyVO9SD2C_NhA",authDomain:"kondolenz-klaus.firebaseapp.com",projectId:"kondolenz-klaus",storageBucket:"kondolenz-klaus.appspot.com",messagingSenderId:"693109076423",appId:"1:693109076423:web:8db46978d61c6f642c69e2"});var p=f.firestore();function g(){var e=Object(r.useState)(""),t=e[0],a=e[1],c=Object(r.useState)(""),l=c[0],i=c[1],o=Object(r.useState)(""),s=o[0],u=o[1],d=Object(r.useState)(!1),g=d[0],v=d[1],b=Object(r.useState)(!1),E=b[0],N=b[1],x=p.collection("comments"),w=function(){var e,r=(e=h.a.mark((function e(r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,x.add({createdAt:f.firestore.FieldValue.serverTimestamp(),name:t,subject:l,message:s});case 4:a(""),i(""),u(""),v(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),N(!0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,a=arguments;return new Promise((function(r,n){var c=e.apply(t,a);function l(e){m(c,r,n,l,i,"next",e)}function i(e){m(c,r,n,l,i,"throw",e)}l(void 0)}))});return function(e){return r.apply(this,arguments)}}();return n.a.createElement("section",{id:"sendComment",className:"signup-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10 col-lg-8 mx-auto"},n.a.createElement("h2",{className:"text-white text-center"},"Kondolenzeintrag verfassen"),n.a.createElement("form",{className:"form-inline",onSubmit:w},n.a.createElement("div",{className:"form-row-custom"},n.a.createElement("label",{htmlFor:"inputName",className:"text-white"},"Name*:"),n.a.createElement("input",{required:!0,value:t,onChange:function(e){return a(e.target.value)},type:"text",className:"form-control",id:"inputName",placeholder:"Einen Namen angeben"})),n.a.createElement("div",{className:"form-row-custom"},n.a.createElement("label",{htmlFor:"inputSubject",className:"text-white"},"Überschrift*:"),n.a.createElement("input",{required:!0,value:l,onChange:function(e){return i(e.target.value)},type:"text",className:"form-control",id:"inputSubject",placeholder:"Eine Überschrift angeben"})),n.a.createElement("div",{className:"form-row-custom"},n.a.createElement("label",{htmlFor:"textAreaMessage",className:"text-white"},"Nachricht*:"),n.a.createElement("textarea",{required:!0,value:s,onChange:function(e){return u(e.target.value)},className:"form-control",id:"textAreaMessage",placeholder:"Eine Nachricht angeben",rows:"3"})),n.a.createElement("div",{className:"submit-row text-right"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Kondolenz absenden"),n.a.createElement("small",{id:"submitInfo",className:"form-text text-white"},"Wir werden Ihren Kondolenzeintrag sichten, bevor er auf der Seite erscheint."),g&&n.a.createElement(y,null),E&&n.a.createElement(k,null)))))));function y(){return n.a.createElement("div",{className:"alert alert-primary text-center",role:"alert"},"Kondolenzeintrag erfolgreich gesendet.",n.a.createElement("button",{onClick:function(){return v(!1)},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"×")))}function k(){return n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},"Leider ist ein Fehler aufgetreten. ",n.a.createElement("br",null),"Bitte versuchen Sie später erneut.",n.a.createElement("button",{onClick:function(){return N(!1)},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"×")))}}var v=a("rY4l"),b=f.firestore().collection("comments").where("display","==",!0).orderBy("createdAt","desc").limit(10);function E(){var e=Object(r.useState)(),t=e[0],a=e[1];return n.a.useEffect((function(){t||b.get().then((function(e){e.forEach((function(t){var r=e.docs.map((function(e){return e.data()}));a(r)}))}))}),[]),n.a.createElement("section",{id:"comments",className:"bg-black projects-section"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"mb-4 text-white text-center"},"Kondolenzen"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"d-flex h-100 col-8 mx-auto flex-column justify-content-center"},!t&&n.a.createElement(c,null),t&&t.map((function(e){var t=e.subject,a=e.message,r=e.name;return n.a.createElement("div",{className:"project-text p-2"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h4",{className:"text-white"},t),n.a.createElement("small",{className:"form-text text-white"},"Von ",r),n.a.createElement("p",{className:"text-white-50",style:{whiteSpace:"pre-line"}},a),n.a.createElement("hr",{className:"d-none d-lg-block mb-0"})))}))))));function c(){return n.a.createElement("p",{className:"text-white-50 text-center"},"Noch keine Kondolenzen vorhanden.")}}var N=a("GkIJ"),x=a.n(N),w=a("oB+J"),y=a.n(w),k=a("FfHN"),S=a.n(k),z=a("/Suh"),L=a.n(z),j=a("OTPB"),F=a.n(j),O=a("LwUR"),I=a.n(O);t.default=function(){return n.a.createElement(c.a,null,n.a.createElement(v.a,null),n.a.createElement("header",{className:"masthead"},n.a.createElement("div",{className:"container d-flex h-100 align-items-center"},n.a.createElement("div",{className:"mx-auto text-center"},n.a.createElement("h1",{className:"mx-auto mt-0 mb-8 text-uppercase"},o.a.heading),n.a.createElement("h2",{className:"text-white-50 mx-auto mt-2 mb-5"},n.a.createElement("p",null,n.a.createElement("i",{className:"fas fa-star-of-life mb-2"}),n.a.createElement("span",null," 03. März 1949")),n.a.createElement("p",null,n.a.createElement("i",{className:"fas fa-cross mb-2"}),n.a.createElement("span",null," 23. April 2021"))),n.a.createElement(l.a,{type:"id",element:"about"},n.a.createElement("a",{href:"#about",className:"btn btn-primary"},"Weiter"))))),n.a.createElement("section",{id:"about",className:"about-section"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 mx-auto text-white-50"},n.a.createElement("h2",{className:"text-white mb-4"},"Wir nehmen Abschied von Klaus Straube"),n.a.createElement("img",{src:x.a,className:"img-fluid mb-4",alt:""}),n.a.createElement("p",{className:"text-white-50"},n.a.createElement("blockquote",null,"Und die Seele unbewacht ",n.a.createElement("br",null),"will in freien Flügen schweben ",n.a.createElement("br",null),"um im Zauberkreis der Nacht ",n.a.createElement("br",null),"tief und tausendfach zu leben.",n.a.createElement("br",null),n.a.createElement("span",{className:"author"},"Hermann Hesse"))),n.a.createElement("h2",{className:"text-white mb-4"},"Beisetzung"),n.a.createElement("p",null,"Die Trauerfeier mit anschließender Urnenbeisetzung findet im engen Familienkreis am Freitag, den 28. Mai 2021, um 11:00 Uhr im RuheForst Pfälzerwald Bad Dürkheim statt.",n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.ruheforst-pfaelzerwald.de/"},"Weitere Informationen zum RuheForst Pfälzerwald")))))),n.a.createElement("section",{id:"obituaries",className:"projects-section bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"mb-4 text-center"},"Nachrufe"),n.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},n.a.createElement("div",{className:"col-xl-8 col-lg-7"},n.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:y.a,alt:""})),n.a.createElement("div",{className:"col-xl-4 col-lg-5"},n.a.createElement("div",{className:"featured-text text-center text-lg-left"},n.a.createElement("h4",null,"Nachruf des Daimler Chor Stuttgart"),n.a.createElement("p",{className:"text-black-50 mb-0"},n.a.createElement("a",{href:"https://chor.daimler-musikgemeinschaft.de/"},"Zum Nachruf des Daimler Chors Stuttgart"))))),n.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},n.a.createElement("div",{className:"col-xl-8 col-lg-7"},n.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:S.a,alt:""})),n.a.createElement("div",{className:"col-xl-4 col-lg-5 order-lg-first"},n.a.createElement("div",{className:"featured-text text-center text-lg-left ml-1"},n.a.createElement("h4",null,"Nachruf der Kammeroper Augsburg"),n.a.createElement("p",{className:"text-black-50 mb-0"},n.a.createElement("a",{href:"https://kammeroper-augsburg.de/kammeroper/index.php"},"Zum Nachruf der Kammeroper Augsburg"))))),n.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},n.a.createElement("div",{className:"col-xl-8 col-lg-7"},n.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:L.a,alt:""})),n.a.createElement("div",{className:"col-xl-4 col-lg-5"},n.a.createElement("div",{className:"featured-text text-center text-lg-left"},n.a.createElement("h4",null,"Nachruf des Musikvereins Nehren"),n.a.createElement("p",{className:"text-black-50 mb-0"},n.a.createElement("a",{href:"https://www.mv-nehren.de/"},"Zum Nachruf des Musikvereins Nehren"))))),n.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},n.a.createElement("div",{className:"col-xl-8 col-lg-7"},n.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:F.a,alt:""})),n.a.createElement("div",{className:"col-xl-4 col-lg-5 order-lg-first"},n.a.createElement("div",{className:"featured-text text-center text-lg-left ml-1"},n.a.createElement("h4",null,"Nachruf des Musikvereins Berkheim"),n.a.createElement("p",{className:"text-black-50 mb-0"},n.a.createElement("a",{href:"https://mvberkheim.de/"},"Zum Nachruf des Musikvereins Berkheim"))))),n.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},n.a.createElement("div",{className:"col-xl-8 col-lg-7"},n.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:I.a,alt:""})),n.a.createElement("div",{className:"col-xl-4 col-lg-5"},n.a.createElement("div",{className:"featured-text text-center text-lg-left"},n.a.createElement("h4",null,"Nachruf des Zamir Chors"),n.a.createElement("p",{className:"text-black-50 mb-0"},n.a.createElement("a",{href:"https://zamirchor.de/nachruf/"},"Zum Nachruf des Zamir Chors"))))))),n.a.createElement(E,null),n.a.createElement(g,null),n.a.createElement("section",{id:"donation",className:"donate-section"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 mx-auto text-white-50"},n.a.createElement("h2",{className:"text-white mb-4"},"Gedenkspende"),n.a.createElement("p",{className:"mb-3"},"Für Klaus waren die Berge stets eine zusätzliche Heimat."),n.a.createElement("p",{className:"mb-3"},"Da die Beisetzung im RuheForst stattfindet, bitten wir aufgrund des Konzepts des RuheForsts auf eine Spende von Blumen oder Kränzen zu verzichten."),n.a.createElement("p",{className:"mb-3"},"Sofern sie den Wunsch verspüren, ist eine freiwillige Gedenkspende an den Deutschen Alpenverein eine alternative Möglichkeit, die im Sinne von Klaus wäre. Gerne können Sie dabei als Verwendungszweck ",n.a.createElement("b",null,'"Im Gedenken an Klaus Straube"')," angeben.",n.a.createElement("br",null)),n.a.createElement("p",null,n.a.createElement("a",{href:"https://www.alpenverein-muenchen-oberland.de/spenden/spende-an-muenchen"},"Zur Spendenseite der Sektion München")))))),n.a.createElement(s,null))}},ls82:function(e,t,a){var r=function(e){"use strict";var t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(z){i=function(e,t,a){return e[t]=a}}function o(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,c=Object.create(n.prototype),l=new y(r||[]);return c._invoke=function(e,t,a){var r="suspendedStart";return function(n,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw c;return S()}for(a.method=n,a.arg=c;;){var l=a.delegate;if(l){var i=N(l,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var o=s(e,t,a);if("normal"===o.type){if(r=a.done?"completed":"suspendedYield",o.arg===m)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(r="completed",a.method="throw",a.arg=o.arg)}}}(e,a,l),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(z){return{type:"throw",arg:z}}}e.wrap=o;var m={};function u(){}function h(){}function d(){}var f={};f[n]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(k([])));g&&g!==t&&a.call(g,n)&&(f=g);var v=d.prototype=u.prototype=Object.create(f);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,c){function l(){return new t((function(r,l){!function r(n,c,l,i){var o=s(e[n],e,c);if("throw"!==o.type){var m=o.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,l,i)}),(function(e){r("throw",e,l,i)})):t.resolve(u).then((function(e){m.value=e,l(m)}),(function(e){return r("throw",e,l,i)}))}i(o.arg)}(n,c,r,l)}))}return r=r?r.then(l,l):l()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function y(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,c=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=v.constructor=d,d.constructor=h,h.displayName=i(d,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(E.prototype),E.prototype[c]=function(){return this},e.AsyncIterator=E,e.async=function(t,a,r,n,c){void 0===c&&(c=Promise);var l=new E(o(t,a,r,n),c);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},b(v),i(v,l,"Generator"),v[n]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=k,y.prototype={constructor:y,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return l.type="throw",l.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n],l=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),o=a.call(c,"finallyLoc");if(i&&o){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var l=c?c.completion:{};return l.type=e,l.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;w(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}(e.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(e,t,a){e.exports=a("ls82")},"oB+J":function(e,t,a){e.exports=a.p+"static/daimler-chor-nachruf-a0d9001a788e2e39d6cb14686fe83aed.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-c0438339b8c1672d271e.js.map