import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { RecipeService } from "../recipes/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  public storeRecipes(): Observable<Object> {
    const recipes = this.recipeService.getRecipes();

    return this.http.put(
      'https://ng-recipe-book-438e2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    );
  }
}
