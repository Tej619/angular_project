import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipesChanged= new Subject<Recipe[]>();

  /*
    private recipes: Recipe[] = [
        new Recipe('Grilled Chicken','Eat chicken do nothing','https://www.liveroughcreek.com/wp-content/uploads/2019/09/Rough-Creek-Lodge-Grilled-Quail-Recipe-Texas-Hill-Country-Vacation-Homes-for-Sale.jpg',[new Ingredient('Chicken',5),new Ingredient('Barbeque Sauce',5)]),
        new Recipe('Chicken Cheese Nachos','Khake Nacho','https://kimspireddiy.com/wp-content/uploads/2020/12/beef-nachos-1.jpg',[new Ingredient('Nacho',100),new Ingredient('White Chicken',2)])
      ];
      */

      private recipes: Recipe[]=[];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes : Recipe[]){
       this.recipes= recipes;
       this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[])
      {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

      
}