(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"95Rz":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){return function(){}}(),a=e("pMnS"),u=e("bujt"),d=e("ZYCi"),i=e("UodH"),r=e("dWZg"),p=e("lLAP"),m=e("wFw1"),s=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),c=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[["style","width:30%; margin-right: 28px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,7,"button",[["color","primary"],["mat-flat-button",""],["routerLinkActive","active"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,2).onClick()&&o),o},u.d,u.b)),t["\u0275did"](2,16384,[[1,4]],0,d.m,[d.l,d.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](3,1),t["\u0275did"](4,1720320,null,2,d.n,[d.l,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),t["\u0275did"](7,180224,null,0,i.b,[t.ElementRef,r.a,p.h,[2,m.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Form Generator"])),(n()(),t["\u0275eld"](9,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](10,212992,null,0,d.q,[d.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){var e=n(l,3,0,"form-generator");n(l,2,0,e),n(l,4,0,"active"),n(l,7,0,"primary"),n(l,10,0)},function(n,l){n(l,1,0,t["\u0275nov"](l,7).disabled||null,"NoopAnimations"===t["\u0275nov"](l,7)._animationMode)})}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-toolsindex",[],null,null,null,g,c)),t["\u0275did"](1,114688,null,0,s,[],null,null)],function(n,l){n(l,1,0)},null)}var h=t["\u0275ccf"]("app-toolsindex",s,f,{},{},[]),v=e("Ip0R"),b=e("gIcY"),C=function(){function n(n,l){this.elementRef=n,this.renderer=l,this.enabled=!0}return n.prototype.onInput=function(){console.log(this.elementRef.nativeElement.innerText),this.onChange(this.elementRef.nativeElement.innerText)},n.prototype.onBlur=function(){this.onTouched()},n.prototype.writeValue=function(n){this.renderer.setProperty(this.elementRef.nativeElement,"innerText",n||"")},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n.prototype.setDisabledState=function(n){this.enabled=!n},n}(),y=e("jlZm"),x=e("AyJq"),_=e("YlbQ"),S=e("YImT"),R=e("vZwA"),k=e("ad02"),N=e("Gi3i"),w=e("xMyE"),O=e("hnVt"),I=function(){function n(n,l,e){this.fb=n,this.formService=l,this.formlyJsonschema=e,this.isLoading=!1,this.model={bandArtist:"The Forest",recordingTitle:"Born in the morning",isrc:"YA9N4nsAxZo"},this.egModel=this.model,this.uiSchemaDefault={isrc:{"ui:disabled":!0,"ui:placeholder":"Enter your ISRC"},bandArtist:{"ui:disabled":!1,"ui:placeholder":"Enter  Version Type","ui:type":"datepicker","ui:required":!0},recordingTitle:{"ui:type":"videoviewer"},pDate:{"ui:type":"percentage"}},this.options={},this.form=new b.FormGroup({}),this.createForm(),this.formChanges$=this.schemaform.valueChanges}return n.prototype.ngOnInit=function(){var n=this;this.subscription=this.formChanges$.pipe(Object(k.a)(),Object(N.a)(500),Object(w.a)(function(){n.isLoading=!0})).subscribe(function(l){n.generateForm(),n.isLoading=!1})},n.prototype.generateForm=function(){var n={},l={};if(this.isValid=!0,l=this.isValidJsonSchema(l),this.schemaform.get("model").value&&(this.model=JSON.parse(this.schemaform.get("model").value)),n=this.isValidJson(n),this.isValid){var e=0;e=this.uiTypeMapper(n,l,e),this.formConfig=this.formlyJsonschema.toFieldConfig(l),this.fields=[this.formService.uiMapper(this.formConfig,l,n)],this.formDescription=this.formConfig.templateOptions.description,this.formLabel=this.formConfig.templateOptions.label}},n.prototype.uiTypeMapper=function(n,l,e){try{Object.keys(n).forEach(function(t){Object.keys(l.properties).forEach(function(e){l.properties[e].type=t===e&&n[t]["ui:type"]?n[t]["ui:type"]:l.properties[e].type}),e++})}catch(t){}return e},n.prototype.isValidJson=function(n){try{this.schemaform.get("UISchema").value&&(n=JSON.parse(this.schemaform.get("UISchema").value))}catch(l){0===Object.keys(n).length||(this.isValid=!1)}return n},n.prototype.isValidJsonSchema=function(n){try{this.isValid=!0,n=JSON.parse(this.schemaform.get("JSONSchema").value)}catch(l){this.isValid=!1,0===Object.keys(n).length||(this.isValid=!1)}return n},n.prototype.createForm=function(){this.schemaform=this.fb.group({JSONSchema:[""],UISchema:[],model:[]})},n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),E=e("5soo"),F=t["\u0275crt"]({encapsulation:0,styles:[["[contenteditable][_ngcontent-%COMP%]{border:1px solid #000;padding:16px;white-space:pre;outline:0;line-height:30px;height:400px}[contenteditable][_ngcontent-%COMP%]:focus{border-color:#00f}"]],data:{}});function V(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,u.d,u.b)),t["\u0275did"](1,180224,null,0,i.b,[t.ElementRef,r.a,p.h,[2,m.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Submit"]))],function(n,l){n(l,1,0,"primary")},function(n,l){n(l,0,0,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode)})}function A(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Hint: Try changing 'type' to password, date, datepicker, tags etc etc"])),(n()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](4,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,4,0,l.component.form.valid)},null)}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["JSON not valid!!!"]))],null,null)}function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,74,"div",[["style","float: left; width:45%; margin-right: 28px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,73,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0;return"submit"===l&&(o=!1!==t["\u0275nov"](n,3).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,3).onReset()&&o),o},null,null)),t["\u0275did"](2,16384,null,0,b["\u0275angular_packages_forms_forms_bh"],[],null,null),t["\u0275did"](3,540672,null,0,b.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,b.ControlContainer,null,[b.FormGroupDirective]),t["\u0275did"](5,16384,null,0,b.NgControlStatusGroup,[[4,b.ControlContainer]],null,null),(n()(),t["\u0275eld"](6,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["JSON Schema - (paste as plain-text!)"])),(n()(),t["\u0275eld"](8,0,null,null,6,"pre",[["contenteditable","true"],["formControlName","JSONSchema"]],[[1,"contenteditable",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"]],function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t["\u0275nov"](n,9).onInput()&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,9).onBlur()&&o),o},null,null)),t["\u0275did"](9,16384,null,0,C,[t.ElementRef,t.Renderer2],null,null),t["\u0275prd"](1024,null,b.NG_VALUE_ACCESSOR,function(n){return[n]},[C]),t["\u0275did"](11,671744,null,0,b.FormControlName,[[3,b.ControlContainer],[8,null],[8,null],[6,b.NG_VALUE_ACCESSOR],[2,b["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,b.NgControl,null,[b.FormControlName]),t["\u0275did"](13,16384,null,0,b.NgControlStatus,[[4,b.NgControl]],null,null),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](15,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["UI Schema (not working 100%) - (paste as plain-text!)"])),(n()(),t["\u0275eld"](17,0,null,null,20,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),t["\u0275did"](18,1720320,null,1,y.c,[],null,null),t["\u0275qud"](603979776,1,{_headers:1}),t["\u0275prd"](2048,null,y.a,null,[y.c]),(n()(),t["\u0275eld"](21,16777216,null,null,16,"mat-expansion-panel",[["class","mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],null,null,x.d,x.a)),t["\u0275did"](22,1753088,null,1,y.e,[[3,y.a],t.ChangeDetectorRef,_.d,t.ViewContainerRef,v.d,[2,m.a],[2,y.b]],null,null),t["\u0275qud"](335544320,2,{_lazyContent:0}),t["\u0275prd"](256,null,y.a,void 0,[]),(n()(),t["\u0275eld"](25,0,null,0,9,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,26)._toggle()&&o),"keydown"===l&&(o=!1!==t["\u0275nov"](n,26)._keydown(e)&&o),o},x.c,x.b)),t["\u0275did"](26,180224,[[1,4]],0,y.h,[y.e,t.ElementRef,p.h,t.ChangeDetectorRef,[2,y.b]],null,null),t["\u0275pod"](27,{collapsedHeight:0,expandedHeight:1}),t["\u0275pod"](28,{value:0,params:1}),(n()(),t["\u0275eld"](29,0,null,0,2,"mat-panel-title",[["class","mat-expansion-panel-header-title"]],null,null,null,null,null)),t["\u0275did"](30,16384,null,0,y.i,[],null,null),(n()(),t["\u0275ted"](-1,null,[" Example UI Schema: "])),(n()(),t["\u0275eld"](32,0,null,1,2,"mat-panel-description",[["class","mat-expansion-panel-header-description"]],null,null,null,null,null)),t["\u0275did"](33,16384,null,0,y.g,[],null,null),(n()(),t["\u0275ted"](-1,null,[" Copy and Paste the code below "])),(n()(),t["\u0275eld"](35,0,null,1,2,"pre",[],null,null,null,null,null)),(n()(),t["\u0275ted"](36,null,["","\n"])),t["\u0275pid"](0,v.g,[]),(n()(),t["\u0275eld"](38,0,null,null,6,"pre",[["contenteditable","true"],["formControlName","UISchema"],["name","UISchema"],["style","width:100%; height:400px"]],[[1,"contenteditable",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"]],function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t["\u0275nov"](n,39).onInput()&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,39).onBlur()&&o),o},null,null)),t["\u0275did"](39,16384,null,0,C,[t.ElementRef,t.Renderer2],null,null),t["\u0275prd"](1024,null,b.NG_VALUE_ACCESSOR,function(n){return[n]},[C]),t["\u0275did"](41,671744,null,0,b.FormControlName,[[3,b.ControlContainer],[8,null],[8,null],[6,b.NG_VALUE_ACCESSOR],[2,b["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,b.NgControl,null,[b.FormControlName]),t["\u0275did"](43,16384,null,0,b.NgControlStatus,[[4,b.NgControl]],null,null),(n()(),t["\u0275ted"](-1,null,["      "])),(n()(),t["\u0275eld"](45,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Model - (paste as plain-text!)"])),(n()(),t["\u0275eld"](47,0,null,null,20,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),t["\u0275did"](48,1720320,null,1,y.c,[],null,null),t["\u0275qud"](603979776,3,{_headers:1}),t["\u0275prd"](2048,null,y.a,null,[y.c]),(n()(),t["\u0275eld"](51,16777216,null,null,16,"mat-expansion-panel",[["class","mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],null,null,x.d,x.a)),t["\u0275did"](52,1753088,null,1,y.e,[[3,y.a],t.ChangeDetectorRef,_.d,t.ViewContainerRef,v.d,[2,m.a],[2,y.b]],null,null),t["\u0275qud"](335544320,4,{_lazyContent:0}),t["\u0275prd"](256,null,y.a,void 0,[]),(n()(),t["\u0275eld"](55,0,null,0,9,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,56)._toggle()&&o),"keydown"===l&&(o=!1!==t["\u0275nov"](n,56)._keydown(e)&&o),o},x.c,x.b)),t["\u0275did"](56,180224,[[3,4]],0,y.h,[y.e,t.ElementRef,p.h,t.ChangeDetectorRef,[2,y.b]],null,null),t["\u0275pod"](57,{collapsedHeight:0,expandedHeight:1}),t["\u0275pod"](58,{value:0,params:1}),(n()(),t["\u0275eld"](59,0,null,0,2,"mat-panel-title",[["class","mat-expansion-panel-header-title"]],null,null,null,null,null)),t["\u0275did"](60,16384,null,0,y.i,[],null,null),(n()(),t["\u0275ted"](-1,null,[" Example Model: "])),(n()(),t["\u0275eld"](62,0,null,1,2,"mat-panel-description",[["class","mat-expansion-panel-header-description"]],null,null,null,null,null)),t["\u0275did"](63,16384,null,0,y.g,[],null,null),(n()(),t["\u0275ted"](-1,null,[" Copy and Paste the code below "])),(n()(),t["\u0275eld"](65,0,null,1,2,"pre",[],null,null,null,null,null)),(n()(),t["\u0275ted"](66,null,["","\n"])),t["\u0275pid"](0,v.g,[]),(n()(),t["\u0275eld"](68,0,null,null,6,"pre",[["contenteditable","true"],["formControlName","model"],["name","model"],["style","width:100%; height:300px"]],[[1,"contenteditable",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"]],function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t["\u0275nov"](n,69).onInput()&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,69).onBlur()&&o),o},null,null)),t["\u0275did"](69,16384,null,0,C,[t.ElementRef,t.Renderer2],null,null),t["\u0275prd"](1024,null,b.NG_VALUE_ACCESSOR,function(n){return[n]},[C]),t["\u0275did"](71,671744,null,0,b.FormControlName,[[3,b.ControlContainer],[8,null],[8,null],[6,b.NG_VALUE_ACCESSOR],[2,b["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,b.NgControl,null,[b.FormControlName]),t["\u0275did"](73,16384,null,0,b.NgControlStatus,[[4,b.NgControl]],null,null),(n()(),t["\u0275ted"](-1,null,["        "])),(n()(),t["\u0275eld"](75,0,null,null,17,"div",[["style","float: left; width:50%"]],null,null,null,null,null)),(n()(),t["\u0275eld"](76,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["\u0275ted"](77,null,["",""])),(n()(),t["\u0275eld"](78,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t["\u0275ted"](79,null,["",""])),(n()(),t["\u0275eld"](80,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0,a=n.component;return"submit"===l&&(o=!1!==t["\u0275nov"](n,82).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,82).onReset()&&o),"ngSubmit"===l&&(o=!1!==a.submit()&&o),o},null,null)),t["\u0275did"](81,16384,null,0,b["\u0275angular_packages_forms_forms_bh"],[],null,null),t["\u0275did"](82,540672,null,0,b.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,b.ControlContainer,null,[b.FormGroupDirective]),t["\u0275did"](84,16384,null,0,b.NgControlStatusGroup,[[4,b.ControlContainer]],null,null),(n()(),t["\u0275eld"](85,0,null,null,2,"formly-form",[],null,null,null,S.c,S.a)),t["\u0275prd"](512,null,R.h,R.h,[R.e,t.ComponentFactoryResolver,t.Injector]),t["\u0275did"](87,966656,null,0,R.g,[R.h,R.e,[8,null],[2,b.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](89,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](90,0,null,null,0,"p",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](92,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.schemaform),n(l,11,0,"JSONSchema"),n(l,41,0,"UISchema"),n(l,71,0,"model"),n(l,82,0,e.form),n(l,87,0,e.form,e.model,e.fields,e.options),n(l,89,0,e.isValid),n(l,92,0,!e.isValid)},function(n,l){var e=l.component;n(l,1,0,t["\u0275nov"](l,5).ngClassUntouched,t["\u0275nov"](l,5).ngClassTouched,t["\u0275nov"](l,5).ngClassPristine,t["\u0275nov"](l,5).ngClassDirty,t["\u0275nov"](l,5).ngClassValid,t["\u0275nov"](l,5).ngClassInvalid,t["\u0275nov"](l,5).ngClassPending),n(l,8,0,t["\u0275nov"](l,9).enabled,t["\u0275nov"](l,13).ngClassUntouched,t["\u0275nov"](l,13).ngClassTouched,t["\u0275nov"](l,13).ngClassPristine,t["\u0275nov"](l,13).ngClassDirty,t["\u0275nov"](l,13).ngClassValid,t["\u0275nov"](l,13).ngClassInvalid,t["\u0275nov"](l,13).ngClassPending),n(l,21,0,t["\u0275nov"](l,22).expanded,"NoopAnimations"===t["\u0275nov"](l,22)._animationMode,t["\u0275nov"](l,22)._hasSpacing());var o=t["\u0275nov"](l,26).panel._headerId,a=t["\u0275nov"](l,26).disabled?-1:0,u=t["\u0275nov"](l,26)._getPanelId(),d=t["\u0275nov"](l,26)._isExpanded(),i=t["\u0275nov"](l,26).panel.disabled,r=t["\u0275nov"](l,26)._isExpanded(),p=n(l,28,0,t["\u0275nov"](l,26)._getExpandedState(),n(l,27,0,t["\u0275nov"](l,26).collapsedHeight,t["\u0275nov"](l,26).expandedHeight));n(l,25,0,o,a,u,d,i,r,p),n(l,36,0,t["\u0275unv"](l,36,0,t["\u0275nov"](l,37).transform(e.uiSchemaDefault))),n(l,38,0,t["\u0275nov"](l,39).enabled,t["\u0275nov"](l,43).ngClassUntouched,t["\u0275nov"](l,43).ngClassTouched,t["\u0275nov"](l,43).ngClassPristine,t["\u0275nov"](l,43).ngClassDirty,t["\u0275nov"](l,43).ngClassValid,t["\u0275nov"](l,43).ngClassInvalid,t["\u0275nov"](l,43).ngClassPending),n(l,51,0,t["\u0275nov"](l,52).expanded,"NoopAnimations"===t["\u0275nov"](l,52)._animationMode,t["\u0275nov"](l,52)._hasSpacing());var m=t["\u0275nov"](l,56).panel._headerId,s=t["\u0275nov"](l,56).disabled?-1:0,c=t["\u0275nov"](l,56)._getPanelId(),g=t["\u0275nov"](l,56)._isExpanded(),f=t["\u0275nov"](l,56).panel.disabled,h=t["\u0275nov"](l,56)._isExpanded(),v=n(l,58,0,t["\u0275nov"](l,56)._getExpandedState(),n(l,57,0,t["\u0275nov"](l,56).collapsedHeight,t["\u0275nov"](l,56).expandedHeight));n(l,55,0,m,s,c,g,f,h,v),n(l,66,0,t["\u0275unv"](l,66,0,t["\u0275nov"](l,67).transform(e.egModel))),n(l,68,0,t["\u0275nov"](l,69).enabled,t["\u0275nov"](l,73).ngClassUntouched,t["\u0275nov"](l,73).ngClassTouched,t["\u0275nov"](l,73).ngClassPristine,t["\u0275nov"](l,73).ngClassDirty,t["\u0275nov"](l,73).ngClassValid,t["\u0275nov"](l,73).ngClassInvalid,t["\u0275nov"](l,73).ngClassPending),n(l,77,0,e.formDescription),n(l,79,0,e.formLabel),n(l,80,0,t["\u0275nov"](l,84).ngClassUntouched,t["\u0275nov"](l,84).ngClassTouched,t["\u0275nov"](l,84).ngClassPristine,t["\u0275nov"](l,84).ngClassDirty,t["\u0275nov"](l,84).ngClassValid,t["\u0275nov"](l,84).ngClassInvalid,t["\u0275nov"](l,84).ngClassPending)})}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-form-generator",[],null,null,null,L,F)),t["\u0275did"](1,114688,null,0,I,[b.FormBuilder,O.a,E.a],null,null)],function(n,l){n(l,1,0)},null)}var D=t["\u0275ccf"]("app-form-generator",I,T,{},{},[]),P=e("t68o"),j=e("NcP4"),U=e("zbXB"),G=e("X4O0"),J=e("l7KE"),q=e("IWKk"),H=e("vaAY"),B=e("s/Hs"),X=e("0Uq3"),Y=e("zJr5"),Z=e("m2xc"),K=e("zpqM"),z=e("S2jy"),Q=e("0Lud"),W=e("jrIF"),$=e("xQel"),nn=e("XfxN"),ln=e("9AKx"),en=e("OXD6"),tn=e("EvNm"),on=e("XUGs"),an=e("9tsn"),un=e("zhSX"),dn=e("28Ac"),rn=e("82Ow"),pn=e("+aDf"),mn=e("xYTU"),sn=e("t/Na"),cn=e("eDkP"),gn=e("Fzqc"),fn=e("mVsa"),hn=e("M2Lx"),vn=e("Wf4p"),bn=e("uGex"),Cn=e("ZYjt"),yn=e("o3x0"),xn=e("v9Dh"),_n=e("OBdK"),Sn=e("OzfB"),Rn=e("4tE/"),kn=e("jQLj"),Nn=e("8Vs6"),wn=e("hq8H"),On=e("n6H/"),In=e("SlDQ"),En=e("wcG+"),Fn=e("A7o+"),Vn=e("wmQ5"),An={breadcrumb:"",menuLabel:"Tool-Box"},Mn={breadcrumb:{"en-US":"contacts.people"},menuLabel:"Contacts/People"},Ln=function(){return function(){}}(),Tn=e("FVSy"),Dn=e("4c35"),Pn=e("qAlS"),jn=e("u7R8"),Un=e("de3e"),Gn=e("seP3"),Jn=e("SMsm"),qn=e("/VYK"),Hn=e("b716"),Bn=e("Blfk"),Xn=e("9It4"),Yn=e("w+lc"),Zn=e("LC5p"),Kn=e("0/Q6"),zn=e("J12g"),Qn=e("SXLW"),Wn=e("21Lb"),$n=e("hUWP"),nl=e("3pJQ"),ll=e("V9q+"),el=e("/dO6"),tl=e("kWGw"),ol=e("UVXo"),al=e("BIqH"),ul=e("iMTk"),dl=e("2wDS"),il=e("3H1x"),rl=e("1MUZ"),pl=e("1cSh"),ml=e("I6xL"),sl=e("r7Sy"),cl=e("L08Y"),gl=e("pcod"),fl=e("G59w"),hl=e("Jt1k"),vl=e("/3kK"),bl=e("M5iK"),Cl=e("xic9"),yl=e("LZPl"),xl=e("usaa"),_l=e("9vck"),Sl=e("cXBl"),Rl=e("8cq0"),kl=e("JFDI"),Nl=e("10iu"),wl=e("xcyh"),Ol=e("QpxQ"),Il=e("tfgC"),El=e("i2L+"),Fl=e("r43C"),Vl=e("Nsh5"),Al=e("y4qS"),Ml=e("BHnd"),Ll=e("8mMr"),Tl=e("Z+uX"),Dl=e("vARd"),Pl=e("YhbO"),jl=e("Lwpp"),Ul=e("6Wmm"),Gl=e("kJ4b"),Jl=e("YSh2");e.d(l,"ToolsModuleNgFactory",function(){return ql});var ql=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,h,D,P.a,j.a,U.b,U.a,G.a,G.b,G.c,G.d,G.e,G.f,G.g,G.h,G.i,G.j,G.k,S.e,S.f,J.a,q.a,H.a,B.a,X.a,Y.a,Z.a,K.a,z.a,Q.a,W.a,$.a,nn.a,ln.a,en.a,tn.a,on.a,an.a,un.a,dn.a,rn.a,pn.a,mn.a,mn.b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.p,v.o,[t.LOCALE_ID,[2,v.D]]),t["\u0275mpd"](4608,sn.j,sn.p,[v.d,t.PLATFORM_ID,sn.n]),t["\u0275mpd"](4608,sn.q,sn.q,[sn.j,sn.o]),t["\u0275mpd"](5120,sn.a,function(n){return[n]},[sn.q]),t["\u0275mpd"](4608,sn.m,sn.m,[]),t["\u0275mpd"](6144,sn.k,null,[sn.m]),t["\u0275mpd"](4608,sn.i,sn.i,[sn.k]),t["\u0275mpd"](6144,sn.b,null,[sn.i]),t["\u0275mpd"](4608,sn.g,sn.l,[sn.b,t.Injector]),t["\u0275mpd"](4608,sn.c,sn.c,[sn.g]),t["\u0275mpd"](4608,b.FormBuilder,b.FormBuilder,[]),t["\u0275mpd"](4608,b["\u0275angular_packages_forms_forms_j"],b["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,cn.c,cn.c,[cn.i,cn.e,t.ComponentFactoryResolver,cn.h,cn.f,t.Injector,t.NgZone,v.d,gn.b,[2,v.i]]),t["\u0275mpd"](5120,cn.j,cn.k,[cn.c]),t["\u0275mpd"](5120,fn.a,fn.c,[cn.c]),t["\u0275mpd"](4608,hn.c,hn.c,[]),t["\u0275mpd"](4608,vn.b,vn.b,[]),t["\u0275mpd"](5120,bn.a,bn.b,[cn.c]),t["\u0275mpd"](4608,Cn.HAMMER_GESTURE_CONFIG,vn.c,[[2,vn.g],[2,vn.l]]),t["\u0275mpd"](5120,yn.c,yn.d,[cn.c]),t["\u0275mpd"](135680,yn.e,yn.e,[cn.c,t.Injector,[2,v.i],[2,yn.b],yn.c,[3,yn.e],cn.e]),t["\u0275mpd"](5120,xn.b,xn.c,[cn.c]),t["\u0275mpd"](135680,p.h,p.h,[t.NgZone,r.a]),t["\u0275mpd"](4608,_n.f,_n.f,[t.TemplateRef]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(n,l){return[Sn.j(n,l)]},[v.d,t.PLATFORM_ID]),t["\u0275mpd"](5120,Rn.b,Rn.c,[cn.c]),t["\u0275mpd"](4608,kn.i,kn.i,[]),t["\u0275mpd"](5120,kn.a,kn.b,[cn.c]),t["\u0275mpd"](4608,R.h,R.h,[R.e,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,vn.a,vn.x,[[2,vn.f],r.a]),t["\u0275mpd"](4608,Nn.Ng2ComponentFactory,Nn.Ng2ComponentFactory,[t.ComponentFactoryResolver]),t["\u0275mpd"](6144,wn.BaseComponentFactory,null,[Nn.Ng2ComponentFactory]),t["\u0275mpd"](4608,v.e,v.e,[t.LOCALE_ID]),t["\u0275mpd"](4608,v.k,v.k,[]),t["\u0275mpd"](4608,On.a,On.a,[sn.c,In.a,En.a,d.l,Fn.j]),t["\u0275mpd"](5120,Vn.b,Vn.a,[[3,Vn.b]]),t["\u0275mpd"](1073742336,v.c,v.c,[]),t["\u0275mpd"](1073742336,d.p,d.p,[[2,d.v],[2,d.l]]),t["\u0275mpd"](1073742336,Ln,Ln,[]),t["\u0275mpd"](1073742336,sn.e,sn.e,[]),t["\u0275mpd"](1073742336,sn.d,sn.d,[]),t["\u0275mpd"](1073742336,b["\u0275angular_packages_forms_forms_bc"],b["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,b.ReactiveFormsModule,b.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,b.FormsModule,b.FormsModule,[]),t["\u0275mpd"](1073742336,gn.a,gn.a,[]),t["\u0275mpd"](1073742336,vn.l,vn.l,[[2,vn.d],[2,Cn.HAMMER_LOADER]]),t["\u0275mpd"](1073742336,Tn.e,Tn.e,[]),t["\u0275mpd"](1073742336,r.b,r.b,[]),t["\u0275mpd"](1073742336,vn.w,vn.w,[]),t["\u0275mpd"](1073742336,Dn.f,Dn.f,[]),t["\u0275mpd"](1073742336,Pn.g,Pn.g,[]),t["\u0275mpd"](1073742336,cn.g,cn.g,[]),t["\u0275mpd"](1073742336,fn.b,fn.b,[]),t["\u0275mpd"](1073742336,jn.a,jn.a,[]),t["\u0275mpd"](1073742336,i.c,i.c,[]),t["\u0275mpd"](1073742336,hn.d,hn.d,[]),t["\u0275mpd"](1073742336,Un.c,Un.c,[]),t["\u0275mpd"](1073742336,Gn.e,Gn.e,[]),t["\u0275mpd"](1073742336,Jn.c,Jn.c,[]),t["\u0275mpd"](1073742336,qn.c,qn.c,[]),t["\u0275mpd"](1073742336,Hn.c,Hn.c,[]),t["\u0275mpd"](1073742336,Bn.c,Bn.c,[]),t["\u0275mpd"](1073742336,Xn.c,Xn.c,[]),t["\u0275mpd"](1073742336,vn.u,vn.u,[]),t["\u0275mpd"](1073742336,vn.r,vn.r,[]),t["\u0275mpd"](1073742336,bn.d,bn.d,[]),t["\u0275mpd"](1073742336,Yn.b,Yn.b,[]),t["\u0275mpd"](1073742336,yn.k,yn.k,[]),t["\u0275mpd"](1073742336,p.a,p.a,[]),t["\u0275mpd"](1073742336,xn.e,xn.e,[]),t["\u0275mpd"](1073742336,vn.n,vn.n,[]),t["\u0275mpd"](1073742336,Zn.a,Zn.a,[]),t["\u0275mpd"](1073742336,Kn.d,Kn.d,[]),t["\u0275mpd"](1073742336,_n.d,_n.d,[]),t["\u0275mpd"](1073742336,zn.c,zn.c,[]),t["\u0275mpd"](1073742336,Qn.AgGridModule,Qn.AgGridModule,[]),t["\u0275mpd"](1073742336,Sn.c,Sn.c,[]),t["\u0275mpd"](1073742336,Wn.f,Wn.f,[]),t["\u0275mpd"](1073742336,$n.b,$n.b,[]),t["\u0275mpd"](1073742336,nl.a,nl.a,[]),t["\u0275mpd"](1073742336,ll.a,ll.a,[[2,Sn.g],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,Rn.e,Rn.e,[]),t["\u0275mpd"](1073742336,el.f,el.f,[]),t["\u0275mpd"](1073742336,kn.j,kn.j,[]),t["\u0275mpd"](1073742336,tl.c,tl.c,[]),t["\u0275mpd"](1073742336,ol.TextMaskModule,ol.TextMaskModule,[]),t["\u0275mpd"](1073742336,al.I,al.I,[]),t["\u0275mpd"](1073742336,ul.a,ul.a,[]),t["\u0275mpd"](512,R.e,R.e,[]),t["\u0275mpd"](1024,R.a,function(n,l){return[{wrappers:[{name:"form-field",component:dl.c}]},{types:[{name:"input",component:il.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:rl.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:pl.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:ml.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:sl.a,wrappers:["form-field"]}]},{types:[{name:"select",component:cl.a,wrappers:["form-field"]}]},{types:[{name:"datepicker",component:gl.b,wrappers:["form-field"]}]},R.j(n),{validationMessages:[{name:"required",message:"err 12: This field is required"},{name:"minlength",message:fl.f},{name:"maxlength",message:fl.d},{name:"min",message:fl.e},{name:"max",message:fl.b},{name:"passwordMatchValidation",message:fl.g},{name:"maximumNumValidation",message:fl.c},{name:"PasswordStrengthValidation",message:fl.a}],wrappers:[{name:"panel",component:hl.a}],types:[{name:"videoviewer",component:vl.a},{name:"visibility",component:bl.a},{name:"playlist",component:Cl.a},{name:"tags",component:yl.a},{name:"tags",component:yl.a},{name:"countries",component:xl.a},{name:"money",component:_l.a,defaultOptions:{expressionProperties:{},defaultValue:5903,templateOptions:{placeholder:"hello",disabled:!1}}},{name:"percentage",component:Sl.a,defaultOptions:{expressionProperties:{},defaultValue:0,templateOptions:{placeholder:"hello",disabled:!1}}},{name:"typeahead",component:Rl.a},{name:"number",extends:"input",defaultOptions:{templateOptions:{type:"number"}}},{name:"date",extends:"input",defaultOptions:{templateOptions:{type:"date"}}},{name:"integer",extends:"input"},{name:"string",extends:"input"},{name:"object",extends:"formly-group"},{name:"boolean",extends:"checkbox"},{name:"enum",extends:"select"}],validators:[{name:"maximumNumValidation",validation:kl.b},{name:"passwordMatchValidation",validation:kl.c},{name:"PasswordStrengthValidation",validation:kl.a}]},R.j(l),{}]},[R.e,R.e]),t["\u0275mpd"](1073742336,R.i,R.i,[R.e,[2,R.a]]),t["\u0275mpd"](1073742336,dl.b,dl.b,[]),t["\u0275mpd"](1073742336,il.b,il.b,[]),t["\u0275mpd"](1073742336,rl.b,rl.b,[]),t["\u0275mpd"](1073742336,Nl.a,Nl.a,[]),t["\u0275mpd"](1073742336,pl.b,pl.b,[]),t["\u0275mpd"](1073742336,ml.b,ml.b,[]),t["\u0275mpd"](1073742336,sl.b,sl.b,[]),t["\u0275mpd"](1073742336,cl.b,cl.b,[]),t["\u0275mpd"](1073742336,wl.a,wl.a,[]),t["\u0275mpd"](1073742336,Ol.c,Ol.c,[]),t["\u0275mpd"](1073742336,gl.a,gl.a,[]),t["\u0275mpd"](1073742336,vn.y,vn.y,[]),t["\u0275mpd"](1073742336,vn.o,vn.o,[]),t["\u0275mpd"](1073742336,Il.a,Il.a,[]),t["\u0275mpd"](1073742336,Fn.g,Fn.g,[]),t["\u0275mpd"](1073742336,El.a,El.a,[]),t["\u0275mpd"](1073742336,Fl.a,Fl.a,[]),t["\u0275mpd"](1073742336,Vl.h,Vl.h,[]),t["\u0275mpd"](1073742336,Al.p,Al.p,[]),t["\u0275mpd"](1073742336,Ml.l,Ml.l,[]),t["\u0275mpd"](1073742336,Ll.b,Ll.b,[]),t["\u0275mpd"](1073742336,Tl.c,Tl.c,[]),t["\u0275mpd"](1073742336,Dl.e,Dl.e,[]),t["\u0275mpd"](1073742336,Pl.c,Pl.c,[]),t["\u0275mpd"](1073742336,y.d,y.d,[]),t["\u0275mpd"](1073742336,jl.e,jl.e,[]),t["\u0275mpd"](1073742336,Vn.c,Vn.c,[]),t["\u0275mpd"](1073742336,Ul.b,Ul.b,[]),t["\u0275mpd"](1073742336,Gl.a,Gl.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,d.j,function(){return[[{path:"",component:s,data:An,children:[{path:"form-generator",component:I,data:Mn}]}]]},[]),t["\u0275mpd"](256,sn.n,"XSRF-TOKEN",[]),t["\u0275mpd"](256,sn.o,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,el.a,{separatorKeyCodes:[Jl.f]},[]),t["\u0275mpd"](256,Ol.d,Ol.e,[]),t["\u0275mpd"](256,vn.e,vn.i,[]),t["\u0275mpd"](1024,b.NG_VALIDATORS,function(){return[El.c,El.d]},[]),t["\u0275mpd"](256,al.a,El.e,[])])})}}]);