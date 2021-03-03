import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';
import { FindRecipeComponent } from './components/find-recipe/find-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { MaxiCardComponent } from './components/maxi-card/maxi-card.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'recipes', loadChildren:()=>import('./components/recipes/recipes.module').then(m => m.RecipesModule)},
  {path:'favorite-recipes',component:FavoriteRecipesComponent},
  {path:'find-recipe',component:FindRecipeComponent},
  {path:'find-recipe/:id',component:MaxiCardComponent},
  {path:'contacts',loadChildren:()=>import('./components/contacts/contacts.module').then(m => m.ContactsModule)},
  {path:'admin',loadChildren:()=>import('./components/admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
