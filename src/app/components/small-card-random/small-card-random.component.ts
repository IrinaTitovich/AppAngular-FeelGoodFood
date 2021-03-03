import { Component, OnChanges, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GetDataService } from '../../services/get-data.service';
import { LocalDataService } from '../../services/local-data.service';



@Component({
  selector: 'app-small-card-random',
  templateUrl: './small-card-random.component.html',
  styleUrls: ['./small-card-random.component.scss']
})


export class SmallCardRandomComponent implements OnInit {
  error:string
  

  ngOnInit(): void {
  this.getRandomRecipe()
  }
  constructor( public http:HttpClient, public getData:GetDataService,public localData:LocalDataService) {
  }

  getRandomRecipe(){
    this.localData.randomRecipes.completed = true

      this.getData.getRecipe(this.localData.randomRecipes.url).subscribe(response => {
        this.localData.randomRecipes.recipes = response.recipes;
        this.localData.randomRecipes.completed = false
        }, error=>{
          console.log(error)
          this.error=error.message
        })
  }

}
