import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../Recipe.model';
import {appRecipeService} from '../../shared/recipe-service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  id: number
  selectedRecipe: Recipe
  
  constructor(private appRecipeService: appRecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['Id']
    this.selectedRecipe = this.appRecipeService.getRecipe(this.id);
    this.route.params.subscribe((param:Params) => 
    {this.id = param['Id'];}
    );
  }



}
