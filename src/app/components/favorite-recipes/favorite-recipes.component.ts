import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.scss']
})
export class FavoriteRecipesComponent implements OnInit {

  constructor(public localData:LocalDataService) { 
    
  }

  ngOnInit(): void {
  }

}
