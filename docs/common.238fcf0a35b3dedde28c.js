(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3WPo":function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return o});var n=r("CcnG"),i=(r("zFeF"),r("hq8H"),r("+fB7"),r("EPQ9"),n["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(e){return n["\u0275vid"](0,[],null,null)}},"5soo":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("mrSG"),i=r("CcnG"),o=r("vZwA");function u(e){return""===e||null==e}var a=function(){function e(){}return e.prototype.toFieldConfig=function(e,t){return this._toFieldConfig(e,Object(n.__assign)({schema:e},t||{}))},e.prototype._toFieldConfig=function(e,t){var r=this;e.$ref&&(e=this.resolveDefinition(e,t));var i={type:this.guessType(e),defaultValue:e.default,templateOptions:{label:e.title,readonly:e.readOnly,description:e.description}};switch(i.type){case"number":case"integer":i.parsers=[function(e){return u(e)?null:Number(e)}],e.hasOwnProperty("minimum")&&(i.templateOptions.min=e.minimum),e.hasOwnProperty("maximum")&&(i.templateOptions.max=e.maximum),e.hasOwnProperty("exclusiveMinimum")&&this.addValidator(i,"exclusiveMinimum",function(t){return u(t.value)||t.value>e.exclusiveMinimum}),e.hasOwnProperty("exclusiveMaximum")&&this.addValidator(i,"exclusiveMaximum",function(t){return u(t.value)||t.value<e.exclusiveMaximum}),e.hasOwnProperty("multipleOf")&&(i.templateOptions.step=e.multipleOf,this.addValidator(i,"multipleOf",function(t){return u(t.value)||t.value%e.multipleOf==0}));break;case"string":["minLength","maxLength","pattern"].forEach(function(t){e.hasOwnProperty(t)&&(i.templateOptions[t]=e[t])});break;case"object":i.fieldGroup=[];var a=Object(n.__read)(this.resolveDependencies(e),2),s=a[0],c=a[1];Object.keys(e.properties||{}).forEach(function(o){var a=r._toFieldConfig(e.properties[o],t);i.fieldGroup.push(a),a.key=o,Array.isArray(e.required)&&-1!==e.required.indexOf(o)&&(a.templateOptions.required=!0),!a.templateOptions.required&&s[o]&&(a.expressionProperties={"templateOptions.required":function(e){return e&&s[o].some(function(t){return!u(e[t])})}}),c[o]&&i.fieldGroup.push(Object(n.__assign)({},r._toFieldConfig(c[o],t),{hideExpression:function(e){return!e||u(e[o])}}))});break;case"array":i.fieldGroup=[],Object.defineProperty(i,"fieldArray",{get:function(){if(!Array.isArray(e.items))return r._toFieldConfig(e.items,t);var n=e.items[i.fieldGroup.length]?e.items[i.fieldGroup.length]:e.additionalItems;return n?r._toFieldConfig(n,t):null},enumerable:!0,configurable:!0})}return e.enum&&(i.type="enum",i.templateOptions.options=e.enum.map(function(e){return{value:e,label:e}})),e.widget&&e.widget.formlyConfig&&(i=Object(o.o)(e.widget.formlyConfig,i)),t.map?t.map(i,e):i},e.prototype.resolveDefinition=function(e,t){var r=Object(n.__read)(e.$ref.split("#/"),2),i=r[1];if(r[0])throw Error("Remote schemas for "+e.$ref+" not supported yet.");var o=i?i.split("/").reduce(function(e,t){return e&&e.hasOwnProperty(t)?e[t]:null},t.schema):null;if(!o)throw Error("Cannot find a definition for "+e.$ref+".");return o.$ref?this.resolveDefinition(o,t):Object(n.__assign)({},o,["title","description","default"].reduce(function(t,r){return e.hasOwnProperty(r)&&(t[r]=e[r]),t},{}))},e.prototype.resolveDependencies=function(e){var t={},r={};return Object.keys(e.dependencies||{}).forEach(function(n){var i=e.dependencies[n];Array.isArray(i)?i.forEach(function(e){t[e]?t[e].push(n):t[e]=[n]}):r[n]=i}),[t,r]},e.prototype.guessType=function(e){var t=e.type;return!t&&e.properties?"object":t},e.prototype.addValidator=function(e,t,r){e.validators=e.validators||{},e.validators[t]=r},e.ngInjectableDef=Object(i.defineInjectable)({factory:function(){return new e},token:e,providedIn:"root"}),e}()},WgEj:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r("KN+2"),r("dx/t"),r("n6H/"),r("wcG+");var n=function(){function e(e,t,r,n,i,o,u,a){this.route=e,this.router=t,this.pageTitle=r,this.dialog=n,this.testData=i,this.help=o,this.config=u,this.translate=a,this.pageHelp=[],this.routeData=this.route.snapshot.data,this.pageTitle.setTitle(this.routeData.pageTitle[this.config.locale])}return e.prototype.getHelpText=function(e,t){},e}()},hnVt:function(e,t,r){"use strict";var n=r("VNr4"),i=r("XlPw"),o={youtube:{basic:{jsonSchema:"assets/YouTube/youtube-edit-video-basic.json",uiSchema:"assets/YouTube/youtube-edit-video-basic-ui.json"},advanced:{jsonSchema:"assets/YouTube/youtube-edit-video-advanced.schema.json",uiSchema:"assets/YouTube/youtube-edit-video-advanced.ui.json"},arrays:{jsonSchema:"assets/YouTube/arrays.json",uiSchema:"assets/YouTube/youtube-edit-video-advanced.ui.json"}}},u=r("9Z1F"),a=r("CcnG"),s=r("t/Na");r.d(t,"a",function(){return c});var c=function(){function e(e){this.http=e}return e.prototype.getFormData=function(e){return Object(n.a)([this.getUI(e),this.getSchema(e)])},e.prototype.getUI=function(e){return this.http.get(o.youtube[e].uiSchema).pipe(Object(u.a)(this.errorHandler))},e.prototype.getSchema=function(e){return this.http.get(o.youtube[e].jsonSchema)},e.prototype.uiMapper=function(e,t,r){console.log(t);var n=0;try{return Object.keys(r).length&&Object.keys(t.properties).forEach(function(t){Object.keys(r).forEach(function(i){i===t&&(e.fieldGroup[n].templateOptions.disabled=r[t]["ui:disabled"],e.fieldGroup[n].templateOptions.placeholder=r[t]["ui:placeholder"],e.fieldGroup[n].templateOptions.required=r[t]["ui:required"])}),n++}),e}catch(i){}},e.prototype.jsonMapper=function(e,t){var r=0;try{return Object.keys(t).forEach(function(n){Object.keys(e.properties).forEach(function(i){i===n&&(e.properties[r].type=t.bandArtist["ui:type"])}),r++}),e}catch(n){}},e.prototype.errorHandler=function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("Backend http returned code "+e.status+", body was: "+e.error),Object(i.a)("Something naughty happened; please try again later.")},e.ngInjectableDef=a.defineInjectable({factory:function(){return new e(a.inject(s.c))},token:e,providedIn:"root"}),e}()},pZCB:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return o});var n=r("CcnG"),i=(r("L5g3"),n["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(e){return n["\u0275vid"](0,[],null,null)}},qyIo:function(e,t,r){"use strict";var n=r("jgfP");r.d(t,"b",function(){return n.a});var i=r("Rc6K");r.d(t,"a",function(){return i.a})}}]);