import { Component, OnInit,Input } from '@angular/core';
import{Recipe} from '../recipes/Recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedRecipe : Recipe
  constructor() { }
  SelectedRecipe(recipe:Recipe)
  {
    this.selectedRecipe = recipe;
  }
  ngOnInit(): void {
  }

}
