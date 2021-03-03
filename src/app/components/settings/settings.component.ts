import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  showSettings = true

  constructor( public localData:LocalDataService) { 

  }

  ngOnInit(): void {
  }

  skip(event){
    let type = event.target.parentNode.firstChild.textContent.toLowerCase()
    console.log (type)
    if(type  === 'intolerance'){
      this.localData.settingsChecked.intolerance=new Set
    } else{
      this.localData.settingsChecked[type]=[]
    }
    console.log(this.localData.settingsChecked)
  }


  makeActiveRadio(event){

    let radioBtns:Array<any> = Array.from(event.target.parentNode.children) ;
    let label = event.target
    let input:HTMLInputElement =event.target.children[0] 
    if(input.checked===true){
      input.checked=false
      label.style.backgroundColor ='lavender'
      let key = event.target.parentNode.parentNode.firstChild.textContent.toLowerCase()
      this.localData.settingsChecked[key]=[]
    } else{
      radioBtns.forEach(i=>{
        let input:HTMLInputElement = i.children[0]
        input.checked = false
        i.style.backgroundColor ='lavender'
      })
      input.checked=!input.checked
      label.style.backgroundColor ='lightcoral'
  
      let filterName:string = event.target.htmlFor
      let checkedParameter:string = this.transformParameter( label)
  
      this.addRadioBtnParameter(filterName,checkedParameter)
  
    }
    
  }
  valueToService(event){
    this.localData.settingsChecked.autocomplete=event.target.value

  }
  transformParameter( label:any):string{
      return label.textContent.trim().toLowerCase().split(' ').join('-')
  }

  addRadioBtnParameter(key:string,value:string):void{
    this.localData.settingsChecked[key][0]=value
  }

  makeActiveCheckbox(event):void{

    let label = event.target
    let input =event.target.children[0] 
    input.checked=!input.checked

    let filterName:string = event.target.htmlFor
    let checkedParameter:string = this.transformParameter(label)
    if (input.checked){
      label.style.backgroundColor ='lightcoral'
      this.localData.settingsChecked[filterName].add(checkedParameter)
    } else {
      label.style.backgroundColor ='lavender'
      this.localData.settingsChecked[filterName].delete(checkedParameter)
    }
    console.log(this.localData.settingsChecked)
  }

}
