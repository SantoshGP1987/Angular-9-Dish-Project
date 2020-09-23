import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../Recipe.model';
import {appRecipeService} from '../../../shared/recipe-service';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() index: number
  @Input() recipe: Recipe
  id : number
  selectedRecipe: Recipe
  
  constructor(private appRecipeService: appRecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.index;
    this.selectedRecipe = this.appRecipeService.getRecipe(this.id);
    this.route.params.subscribe((param:Params) => 
    {this.id = param['Id'];}
    );
  

  }}
