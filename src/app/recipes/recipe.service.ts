import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://www.liveroughcreek.com/wp-content/uploads/2019/09/Rough-Creek-Lodge-Grilled-Quail-Recipe-Texas-Hill-Country-Vacation-Homes-for-Sale.jpg'),
        new Recipe('Another Recipe','This is simply a test','https://www.liveroughcreek.com/wp-content/uploads/2019/09/Rough-Creek-Lodge-Grilled-Quail-Recipe-Texas-Hill-Country-Vacation-Homes-for-Sale.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}