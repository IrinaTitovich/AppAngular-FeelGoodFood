import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],

})
export class RecipesComponent implements OnInit {
  localDataTypes:Array<string> = this.localData.settings.type.map(i=>i)
  types = this.localDataTypes.splice(0,6)
  constructor(public localData:LocalDataService) { }

  ngOnInit(): void {

  }

}
