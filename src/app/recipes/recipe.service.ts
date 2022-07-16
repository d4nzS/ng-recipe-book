import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2021/11/GPBlog_RecipeAdventures_Gyudon3-1024x640.jpg')
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
