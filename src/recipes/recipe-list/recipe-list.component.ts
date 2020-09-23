import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../Recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() selelectedRecipe  = new EventEmitter<Recipe>();
Recipes: Recipe[] = [new Recipe('FirstItem','','This is Cool !!!'),
new Recipe('SecondItem','','This is Super Yummy !!!')];

  constructor() { }

  ngOnInit(): void {
  }
  OnRecipeSelected(selectedRecipe: Recipe)
  {
    //this.selelectedRecipe.emit(selectedRecipe);
  }

}
