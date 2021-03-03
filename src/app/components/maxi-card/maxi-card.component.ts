import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faConciergeBell} from '@fortawesome/free-solid-svg-icons'
import { IFullRecipe } from 'src/app/interfaces/recipe';
import { GetDataService } from 'src/app/services/get-data.service';

import {  LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-maxi-card',
  templateUrl: './maxi-card.component.html',
  styleUrls: ['./maxi-card.component.scss']
})
export class MaxiCardComponent implements OnInit {

  favoriteRecipe:boolean=false

  data;

  loading:boolean=false

  recipe:IFullRecipe

  faClock=faClock
  faConciergeBell=faConciergeBell
  id:number;
  title:string='Loading...'
  
  ingredients:Set<string>=new Set;

  constructor(private route:ActivatedRoute,private localData:LocalDataService, private getData:GetDataService) {
    this.route.params.subscribe((params:Params)=>{
      this.id=Number(params.id.split('-')[0])
      this.localData.searchById(this.id)
    },error=>{
      this.localData.error.fullRecipe=error.message;
    })
    setTimeout(()=>{
      console.log(this.localData.fullRecipes)
      let recipe;
      this.loading=true
      this.localData.fullRecipes.recipes.forEach(i=>{
        if(i.id==this.id){
          this.recipe=i
        }
      })
      if (this.localData.users.isUserConnected){
        this.localData.users.connectedUser.favoriteRecipes.forEach((item)=>{
          if (item.id===this.id){
            this.favoriteRecipe=true  
          }else{
            this.favoriteRecipe=false
          }
        })
      }
    },800) 

  }

  addRecipeToFavorite(recipe){
    console.log(this.localData.users.connectedUser)
    if(!this.favoriteRecipe){
      this.favoriteRecipe=true
      this.localData.users.connectedUser.favoriteRecipes.add(recipe)
    } else{
      this.favoriteRecipe=false
      this.localData.users.connectedUser.favoriteRecipes.delete(recipe)
    }
  }

  checkIngredient(event,name){
    let input:HTMLInputElement = event.target.parentNode.firstChild
    let label = event.target
    if (!input.checked){

      label.style.backgroundColor = 'lightcoral'
      this.ingredients.add(name)
    } else {

      label.style.backgroundColor = 'lavender'
      this.ingredients.delete(name)
    }
  }



  ngOnInit(): void {

  }





}
