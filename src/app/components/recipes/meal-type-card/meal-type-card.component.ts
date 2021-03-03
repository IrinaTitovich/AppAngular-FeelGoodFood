import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';

import { GetDataService } from 'src/app/services/get-data.service';
import { LocalDataService } from 'src/app/services/local-data.service';



@Component({
  selector: 'app-meal-type-card',
  templateUrl: './meal-type-card.component.html',
  styleUrls: ['./meal-type-card.component.scss']
})
export class MealTypeCardComponent implements OnInit, OnChanges {
  recipes:Recipe[]=[];
  urlSearchByType ='https://api.spoonacular.com/recipes/complexSearch?type=' 
  numberOfRecipes:number = 6;
  urlRandomRecipe:string='https://api.spoonacular.com/recipes/random?'
  backgroundImg:string=''
  error=''

  constructor(public localData:LocalDataService, private route:ActivatedRoute,public getData:GetDataService) {
    this.getMoreRecipes()
   }

  ngOnInit(): void {
  this.getRecipesByType()
  }
  ngOnChanges():void{
    this.getRecipesByType()
  }
  getMoreRecipes(){
    this.route.params.subscribe((params:Params)=>{
      let urlSearchByType:string = this.generateUrl(params.type,this.urlRandomRecipe);
      this.getRecipes(urlSearchByType)
    },error=>{
      console.log(error)
      this.error=error.message;
      
    })

  }

  getRecipesByType(){
    this.route.params.subscribe((params:Params)=>{
    this.changeBackground(params.type)
    let urlSearchByType:string = this.generateUrl(params.type,this.urlSearchByType);
    this.getRecipes(urlSearchByType)
},error=>{
  console.log(error)
  this.error=error.message;
  
})
}
  changeBackground(type:string){
    this.backgroundImg = this.backgroundImg+type;
  }
  generateUrl(type:string,url:string){
  return url+type+'&number='+this.numberOfRecipes;
  }
  getRecipes(url:string){
    this.getData.getRecipe(url).subscribe(response => {
      this.recipes= response.recipes

    },error=>{
      console.log(error)
      this.error=error.message;
      
    })
  }
}
