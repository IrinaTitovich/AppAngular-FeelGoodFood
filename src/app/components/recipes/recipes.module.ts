import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { MealTypeCardComponent } from './meal-type-card/meal-type-card.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
declarations:[
    MealTypeCardComponent,
    RecipesComponent

],
imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild([
        {
            path: '', component:RecipesComponent
        },
        {
            path: ':type',component:MealTypeCardComponent
        }
        ])
],
exports:[
    RouterModule,
]
})
export class RecipesModule{

}