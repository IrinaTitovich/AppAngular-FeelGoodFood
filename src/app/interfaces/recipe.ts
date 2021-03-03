export interface IRecipes{
    recipes:Recipe[]
    completed:Boolean
    url:string
  }
  export interface IIngredient{
    original:string,
    name:string,
  }
  
  export interface IFullRecipe{
    id:number,
    title:string,
    image:string,
    servings:number,
    readyInMinutes:number,
    extendedIngredients:IIngredient[],
    pairingText:string,
    fat:string,
    calories:number,
    carbs:string,
    instructions:string
  }
  export interface IFullRecipes{
    recipes :IFullRecipe[],
    url:string,
    currentRecipe?:IFullRecipe
  
  }
  export interface RandomRecipe{
    recipes?: Recipe[]
  }
  
  export interface Recipe {
    id:number,
    title:string,
    image:string,
    imageType?:string
  }