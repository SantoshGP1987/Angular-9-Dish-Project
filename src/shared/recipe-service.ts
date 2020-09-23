import {Recipe} from '../recipes/Recipe.model'
export class appRecipeService{
    recipe: Recipe[] = [new Recipe('FirstItem','','This is Cool !!!'),
    new Recipe('SecondItem','','This is Super Yummy !!!')];

    ngonInit()
    {
        //this.recipe.push({name:'Testing',description:'Testing this'})
    }
    getRecipe(index: number){
        return this.recipe[index];
    }
}