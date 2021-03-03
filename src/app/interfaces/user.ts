import { Recipe } from "./recipe";


export interface Users{
    isUserConnected?:boolean
    connectedUser?:User
    connectedUsersShoppingList?:Set<string>
    users:User[],
    email: string,
    username: string,
    hash: string,
    password:string,
    userGet:UserGet,
    urlConnectUser:string
  }

  export interface UserPost{
    username?: string,
    firstName?: string,
    lastName?: string,
    email: string,
  }

  export interface UserGet{
    username: string,
    hash: string,
  }

  export interface User{
    username: string,
    hash: string,
    email:string,
    password?:string,
    shoppingList?:Set<string>
    favoriteRecipes?:Set<Recipe>
  }
