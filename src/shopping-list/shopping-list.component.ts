import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
Ingredients:Ingredient[] = [new Ingredient("Apples",10),new Ingredient("Mangoes",10)];
  constructor() { }

  ngOnInit(): void {
  }
  ingredientAdded(ingredient : Ingredient)
  { 
    this.Ingredients.push(ingredient);
  }
}
