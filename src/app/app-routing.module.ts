import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '../recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { dropdownDirective } from '../shared/dropdown.directive';
import { ErrorComponent } from './error/error.component';
import {RecipeStartComponent} from '../recipes/recipe-start/recipe-start/recipe-start.component';

const routes: Routes = [
  {path:'',component:AppComponent,pathMatch:'full'},
  {path:'redirect',redirectTo:''},
   {path:'recipes',component:RecipesComponent,
  children:[
    {path: '',component:RecipeStartComponent},
    {path: ':Id',component:RecipeDetailsComponent}
  ]
},
  {path:'shopping/shopping-list',component:ShoppingListComponent},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
