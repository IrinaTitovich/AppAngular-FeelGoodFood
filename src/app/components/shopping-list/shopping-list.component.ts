import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  showShoppingList = true
  constructor( public localData:LocalDataService) { 

 }

  ngOnInit(): void {
    
  }





}
