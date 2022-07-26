import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  public storeRecipes(): Subscription {
    const recipes = this.recipeService.getRecipes();

    return this.http
      .put<Recipe[]>(
        'https://ng-recipe-book-438e2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe(response => console.log(response));
  }

  public fetchRecipes(): Subscription {
    return this.http
      .get<Recipe[]>('https://ng-recipe-book-438e2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .subscribe(recipes => this.recipeService.setRecipes(recipes));
  }
}
