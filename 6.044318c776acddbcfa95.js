(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Rqzx:function(e,t,n){"use strict";n.r(t),n.d(t,"RecipesModule",function(){return f});var c=n("ofXK"),i=n("tyNb"),r=n("fXoL"),o=n("9bf1");const a=function(e){return["/recipes",e]},s=function(e){return{"background-image":e}};function p(e,t){if(1&e&&(r.Lb(0,"a",4),r.Lb(1,"span",5),r.nc(2),r.Vb(3,"uppercase"),r.Kb(),r.Jb(4,"span",6),r.Kb()),2&e){const e=t.$implicit;r.Zb("routerLink",r.cc(5,a,e)),r.yb(2),r.oc(r.Wb(3,3,e.split("-").join(" "))),r.yb(2),r.Zb("ngStyle",r.cc(7,s,"url(../../../assets/img/recipes/"+e+".jpg)"))}}let l=(()=>{class e{constructor(e){this.localData=e,this.localDataTypes=this.localData.settings.type.map(e=>e),this.types=this.localDataTypes.splice(0,6)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(o.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-recipes"]],decls:4,vars:1,consts:[[1,"recipes"],[1,"recipes__container","container"],[1,"card"],["class","card__item",3,"routerLink",4,"ngFor","ngForOf"],[1,"card__item",3,"routerLink"],[1,"card__meal-type"],[1,"card__img",3,"ngStyle"]],template:function(e,t){1&e&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Lb(2,"div",2),r.lc(3,p,5,9,"a",3),r.Kb(),r.Kb(),r.Kb()),2&e&&(r.yb(3),r.Zb("ngForOf",t.types))},directives:[c.h,i.e,c.j],pipes:[c.m],styles:[".recipes[_ngcontent-%COMP%]{width:100%;height:90vh;background-image:url(recipes.07bfe8a90b36d8d42fc3.jpg);background-position:50%;background-size:cover}.recipes__container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-content:space-around;flex-wrap:wrap}.card[_ngcontent-%COMP%], .recipes__card[_ngcontent-%COMP%], .recipes__container[_ngcontent-%COMP%]{width:100%;height:100%}.card[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-content:space-around}.card__item[_ngcontent-%COMP%]{background-color:#fff;width:27%;height:40%;box-shadow:8px 8px 15px #275831}.card__meal-type[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:15%}.card__img[_ngcontent-%COMP%]{display:block;width:100%;height:85%;background-position:50%;background-size:cover}@media (max-width:768px){.recipes__container[_ngcontent-%COMP%]{position:relative;height:-webkit-max-content;height:max-content;display:flex}.card[_ngcontent-%COMP%]{justify-content:center}.card__item[_ngcontent-%COMP%]{width:60%;height:50vw;margin-top:1em}}"]}),e})();var g=n("EQNs");function b(e,t){if(1&e&&(r.Lb(0,"p",8),r.nc(1),r.Kb()),2&e){const e=r.Ub();r.kc("text-align",e.center),r.yb(1),r.oc(e.error)}}const d=function(e){return["/find-recipe",e]};function u(e,t){if(1&e){const e=r.Mb();r.Lb(0,"a",9),r.Sb("click",function(){r.fc(e);const n=t.$implicit;return r.Ub().localData.searchById(n.id)}),r.Lb(1,"span",10),r.nc(2),r.Kb(),r.Jb(3,"span",11),r.Kb()}if(2&e){const e=t.$implicit;r.Zb("routerLink",r.cc(4,d,(e.id+"-"+e.title).split(" ").join("-"))),r.yb(2),r.oc(e.title),r.yb(1),r.kc("background-image","url("+e.image+")")}}const h=function(){return["/recipes"]};let m=(()=>{class e{constructor(e,t,n){this.localData=e,this.route=t,this.getData=n,this.recipes=[],this.urlSearchByType="https://api.spoonacular.com/recipes/complexSearch?type=",this.numberOfRecipes=6,this.urlRandomRecipe="https://api.spoonacular.com/recipes/random?tags=",this.backgroundImg="",this.error="",this.getRecipesByType()}ngOnInit(){}ngOnChanges(){}getMoreRecipes(){this.route.params.subscribe(e=>{let t=this.generateUrl(e.type,this.urlRandomRecipe);this.getRecipesRandom(t)},e=>{console.log(e),this.error=e.message}),console.log(this.recipes)}getRecipesByType(){this.route.params.subscribe(e=>{this.changeBackground(e.type);let t=this.generateUrl(e.type,this.urlSearchByType);this.getRecipes(t)},e=>{console.log(e),this.error=e.message})}changeBackground(e){this.backgroundImg=this.backgroundImg+e}generateUrl(e,t){return t+e.split("-").join(" ")+"&number="+this.numberOfRecipes}getRecipes(e){this.getData.getRecipe(e).subscribe(t=>{this.recipes=t.results,console.log(e),console.log(t)},e=>{console.log(e),this.error=e.message})}getRecipesRandom(e){this.getData.getRecipe(e).subscribe(t=>{this.recipes=t.recipes,console.log(e),console.log(t)},e=>{console.log(e),this.error=e.message})}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(o.a),r.Ib(i.a),r.Ib(g.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-meal-type-card"]],features:[r.wb],decls:10,vars:6,consts:[[1,"meal-type-cards"],[1,"container","meal-type-cards__container"],[1,"meal-type-cards__name"],[1,"btn","breadcrumbs","meal-type-cards__btn",3,"routerLink"],[1,"btn","reload",3,"click"],[1,"meal-type-cards__box"],["class","error",3,"textAlign",4,"ngIf"],["class","meal-type-cards__item item",3,"routerLink","click",4,"ngFor","ngForOf"],[1,"error"],[1,"meal-type-cards__item","item",3,"routerLink","click"],[1,"item__name"],[1,"item__image"]],template:function(e,t){1&e&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Lb(2,"header",2),r.Lb(3,"button",3),r.nc(4,"< Recipes"),r.Kb(),r.Lb(5,"button",4),r.Sb("click",function(){return t.getMoreRecipes()}),r.nc(6,"\t\u21bb reload recipes"),r.Kb(),r.Kb(),r.Lb(7,"section",5),r.lc(8,b,2,3,"p",6),r.lc(9,u,4,6,"a",7),r.Kb(),r.Kb(),r.Kb()),2&e&&(r.kc("background-image","url(../../../assets/img/recipes/"+t.backgroundImg+".jpg)"),r.yb(3),r.Zb("routerLink",r.bc(5,h)),r.yb(5),r.Zb("ngIf",t.error),r.yb(1),r.Zb("ngForOf",t.recipes))},directives:[i.c,c.i,c.h,i.e],styles:[".meal-type-cards[_ngcontent-%COMP%]{width:100%;height:90vh;background-color:#fffacd;background-position:50%;background-size:cover}.meal-type-cards__container[_ngcontent-%COMP%]{width:100%;height:100%}.meal-type-cards__name[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;box-shadow:none;height:15%}.meal-type-cards__box[_ngcontent-%COMP%]{box-shadow:2px 3px 15px #275831;background-color:#fafafa;width:100%;height:85%;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:space-around}.meal-type-cards__item[_ngcontent-%COMP%]{background-color:khaki;width:30%;height:40%}.item[_ngcontent-%COMP%]{box-shadow:1px 1px 15px #275831;color:#275831;text-transform:uppercase}.item__name[_ngcontent-%COMP%]{background-color:#fafafa;width:100%;height:25%;display:flex;align-items:center;justify-content:center;text-align:center}.item__image[_ngcontent-%COMP%]{display:block;width:100%;height:75%;background-size:cover;background-position:50%}.breadcrumbs[_ngcontent-%COMP%], .reload[_ngcontent-%COMP%]{height:3em}"]}),e})();var _=n("PCNd");let f=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(t){return new(t||e)},imports:[[c.b,_.a,i.f.forChild([{path:"",component:l},{path:":type",component:m}])],i.f]}),e})()}}]);