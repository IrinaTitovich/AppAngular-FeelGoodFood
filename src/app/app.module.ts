import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';
import { FindRecipeComponent } from './components/find-recipe/find-recipe.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { SmallCardRandomComponent } from './components/small-card-random/small-card-random.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { MaxiCardComponent } from './components/maxi-card/maxi-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SmallCardRandomComponent,
    HomeComponent,
    SettingsComponent,
    FavoriteRecipesComponent,
    FindRecipeComponent,
    MiniCardComponent,
    MaxiCardComponent,
    ShoppingListComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
