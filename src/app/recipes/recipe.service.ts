import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Grilled Chicken','Eat chicken do nothing','https://www.liveroughcreek.com/wp-content/uploads/2019/09/Rough-Creek-Lodge-Grilled-Quail-Recipe-Texas-Hill-Country-Vacation-Homes-for-Sale.jpg',[new Ingredient('Chicken',5),new Ingredient('Barbeque Sauce',5)]),
        new Recipe('Chicken Cheese Nachos','Khake Nacho','https://kimspireddiy.com/wp-content/uploads/2020/12/beef-nachos-1.jpg',[new Ingredient('Nacho',100),new Ingredient('White Chicken',2)])
      ];

      constructor(private slService: ShoppingListService){}

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

      
}