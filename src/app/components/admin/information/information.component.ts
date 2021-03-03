import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(public localData:LocalDataService) { }

  ngOnInit(): void {
  }

}
