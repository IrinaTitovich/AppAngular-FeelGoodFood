import { Injectable } from '@angular/core';
import { MaxiCardComponent } from '../components/maxi-card/maxi-card.component';
import { IFullRecipe, IFullRecipes, IRecipes } from '../interfaces/recipe';
import { ISettings, ISettingsChecked } from '../interfaces/settings';
import { ShoppingList } from '../interfaces/shoppingList';
import { User, UserGet, Users } from '../interfaces/user';

import { GetDataService } from './get-data.service'

@Injectable({
  providedIn: 'root'
})

export class LocalDataService {

  shoppingList:ShoppingList={
    ingredients:new Set,
    deletedIngredients:new Set,
    url:'https://api.spoonacular.com/mealplanner/',
  }
  

  userGet:UserGet={
    username:'',
    hash:''
  }

  users:Users={
    users:[
      {username: 'api-72265-2642840a-a2d7-4ecb-9ea9-19f28f30f870',
      hash: 'cca187b0b1ff53e91759ea0b37d89ef9ad737b9d',
      email:'1@3',
      password:'333333'},
      {email: "2@2.com",
      hash: "27442897caec22d566ef7cfba8666e03ae9936a5",
      password: "222222",
      username: "api-72265-509838a8-1c3d-40fe-90f5-9d5c19931b7b"},
      { username: 'api-72265-648ca44f-c84d-4bd6-a6ec-289a79d1d7f9',
      hash: '1d2ad9bd958926be469a9d9849e10c8e2ecb9bb1',
      email:'1@1',
      password:'111111'}
    ],
    email:'',
    username:'',
    hash:'',
    password:'',
    userGet:this.userGet,
    urlConnectUser:'https://api.spoonacular.com/users/connect',
    isUserConnected:false,
    
  }


  numberOfRecipes=6;

  fullRecipes:IFullRecipes={
    recipes:[],
    url:'https://api.spoonacular.com/recipes/',
  }


  complexSearch:IRecipes={
    recipes :[],
    completed:false,
    url:'https://api.spoonacular.com/recipes/complexSearch?',
  }

  randomRecipes:IRecipes={
    recipes :[],
    completed:false,
    url:'https://api.spoonacular.com/recipes/random?',
  }

  settings:ISettings = {
    type:[
      'appetizer',
      'salad',
      'main-course',
      'side-dish',
      'dessert',
      'beverage','sauce','bread','breakfast','soup'
    ],
    cuisine:['spanish','mexican','chinese','european','french','italian','mediterranean','thai'],
    diet:['gluten-free','vegetarian','lacto-vegetarian','vegan'],
    intolerance:['dairy','egg','gluten','grain','peanut','seafood','seasame','soy','wheat']
  }

  settingsChecked:ISettingsChecked = {
    type:[],
    cuisine:[],
    diet:[],
    intolerance:new Set
  }

  error={
    fullRecipe:''
  }

  constructor(public getData:GetDataService) {
  }


  saveShoppingList(){
    if (this.users.isUserConnected){
      console.log(this.users.isUserConnected)
      this.shoppingList.deletedIngredients.forEach((deletedItem)=>{
        this.shoppingList.ingredients.forEach((ingredientsItem)=>{
          if (deletedItem===ingredientsItem){
            this.shoppingList.ingredients.delete(ingredientsItem)
          } else{
            this.users.connectedUser.shoppingList.add(ingredientsItem)
          }
        })
      })
      this.users.connectedUser.shoppingList=new Set
      console.log(this.shoppingList)
      this.shoppingList.ingredients.forEach((ingredientsItem)=>{
        
          this.users.connectedUser.shoppingList.add(ingredientsItem)
      })
      console.log(this.users)
    }
  }


  logOff(){
    this.users.isUserConnected=false
    delete this.users.connectedUser
    console.log(this.users)
    this.shoppingList.ingredients.clear()
    this.shoppingList.deletedIngredients.clear()
  }

  generateShoppingList(username:string,hash:string){
    console.log(username)
    let url = this.shoppingList.url+username+'/'+'shopping-list'+'/'+'2021-02-25'+'/'+'2021-10-25'+'?hash='+hash+'?apiKey='+'a3c00363bf63449db8ecd2115fdcbf15'
    console.log(url)
    this.getData.generateShoppingList(url).subscribe((response)=>{
    console.log(response)
    })
  }
  



  isPassword(inputPassword:string,index:number):boolean{
    let usersPassword = this.users.users[index].password
    console.log(usersPassword)
    console.log(inputPassword)
    if(usersPassword===inputPassword){
      return true} else{
        return false
      }
  }

    getUserIndex(email:string):number{
      let index:number
      for (let i=0;i<this.users.users.length;i++){
        if (this.users.users[i].email===email){
          return i
        }
      }
      return -1
    }

  searchRecipeByInput(event){
    console.log(event.target.parentNode.firstChild.value)
    let response:string = event.target.parentNode.firstChild.value
    let url:string
    console.log(this.complexSearch)
    
    if (response){
      this.settingsChecked.autocomplete=response,
      url=`https://api.spoonacular.com/recipes/autocomplete?number=${this.numberOfRecipes}&query=${response}`
    this.getData.getRecipe(url).subscribe((response)=>{

        this.complexSearch.recipes= response

        this.complexSearch.recipes.map((i)=>{
          i.image = 'https://spoonacular.com/recipeImages/'+i.id+'-'+'312x231.'+i.imageType
          console.log(this.complexSearch)
        })
    })
    }
  }



  deleteIngredient(event){
    let crossedElement = event.target.parentNode.parentNode.firstChild.lastChild
    this.shoppingList.ingredients.delete(crossedElement.textContent)
    this.shoppingList.deletedIngredients.add(crossedElement.textContent)
  console.log(this.shoppingList)
  }
  addIngredientToDeleted(event){
    let crossedElement = event.target.parentNode.parentNode.firstChild.lastChild
    console.log(crossedElement)
    crossedElement.style.textDecoration='line-through'
    this.shoppingList.deletedIngredients.add(crossedElement.textContent)
    console.log(this.shoppingList)
  }
  addToTheShoppingList(ingredients){

    ingredients.forEach(i => {
      this.shoppingList.ingredients.add(i)
    });
    console.log(this.shoppingList)
  }


  searchRecipeByTitle(title:string):number{
      let id:number;
      this.complexSearch.recipes.forEach(i=>{if (i.title===title){
        id=i.id
      }})
      return id
  }


  updateUsers(){
    let newUser:User={
      email:'',
    username:'',
    hash:'',
    password:'',
    };
    console.log(newUser)
    newUser.email=this.users.email
    newUser.hash=this.users.hash
    newUser.password=this.users.password
    newUser.username=this.users.username

    this.users.users.push(newUser)
    this.clearUser()
    
    console.log(this.users)
  }
  clearUser(){
    this.users.email=this.users.hash=this.users.password=this.users.username=''
  }


  searchById(id:number):IFullRecipe{
    delete this.fullRecipes.currentRecipe
    let fullRecipe:IFullRecipe;
    let indexOfRecipeInArray = this.searchByIdInLocalData(id)
    console.log(indexOfRecipeInArray)
    if (indexOfRecipeInArray){
      fullRecipe=this.fullRecipes[indexOfRecipeInArray]
    } else{
      fullRecipe = this.getFullRecipeById(id)
    }
    this.fullRecipes.currentRecipe=fullRecipe
    return fullRecipe
  }

  searchByIdInLocalData(id:number):number{
    let indexOfRecipeInArray:number;
    this.fullRecipes.recipes.forEach((item,index)=>{
      if (item.id===id){
        indexOfRecipeInArray=index
      }})
      return indexOfRecipeInArray
  }

  getFullRecipeById(id:number):IFullRecipe{
    let fullRecipe:IFullRecipe;
    let url=this.fullRecipes.url;
    url= url+id+'/information'

    this.getData.getRecipe(url).subscribe(response => {
      this.fullRecipes.recipes.push(response)
      fullRecipe=response
},error=>{

  this.error.fullRecipe=error.message;

})
    return fullRecipe
  }
}
