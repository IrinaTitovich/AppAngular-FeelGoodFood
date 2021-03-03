import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { IFullRecipe, Recipe } from 'src/app/interfaces/recipe';

import { LocalDataService } from '../../services/local-data.service';
import { MaxiCardComponent } from '../maxi-card/maxi-card.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';

@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.component.html',
  styleUrls: ['./find-recipe.component.scss']
})

@ViewChild(MiniCardComponent)
@ViewChild(MaxiCardComponent)

export class FindRecipeComponent implements OnInit {
  error=''
  recipes:Recipe[] =[]
  @Output() maxiCardRecipe:IFullRecipe
  constructor(public localData: LocalDataService) {
  }

  ngOnInit(): void {
    this.getRecipesBySettingsChecked()
  }
  showMaxiCard(event){
    let title = event.target.parentNode.children[0].textContent;
    let id = this.localData.searchRecipeByTitle(title)
    this.localData.searchById(id)
    setTimeout(()=>{
      let index = this.localData.searchByIdInLocalData(id)
      this.maxiCardRecipe = this.localData.fullRecipes.recipes[index]
      console.log(this.maxiCardRecipe)
    },300)
  }

  getRecipesBySettingsChecked(){
    this.localData.numberOfRecipes=6
    let settingsChecked = this.localData.settingsChecked
    let url:string=this.localData.complexSearch.url
    url = url+'type='+settingsChecked.type.join(',')+
    '&'+'cuisine='+settingsChecked.cuisine.join(',')+
    '&'+'diet='+settingsChecked.diet.join(',')+
    '&'+'intolerances='+Array.from(settingsChecked.intolerance).join(',')+
    '&'+'number='+this.localData.numberOfRecipes
    if(this.localData.settingsChecked.autocomplete){
      url=url+'&'+'query='+this.localData.settingsChecked.autocomplete
    }

    this.localData.getData.getRecipe(url).subscribe(response => {
          this.localData.numberOfRecipes = response.results.length
          this.localData.complexSearch.recipes = response.results
    },error=>{
      console.log(error)
      this.error=error.message;
      
    })
    }
}
