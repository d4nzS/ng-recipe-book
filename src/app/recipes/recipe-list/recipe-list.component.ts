import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2021/11/GPBlog_RecipeAdventures_Gyudon3-1024x640.jpg')
  ];

  @Output() private recipeWasSelected: EventEmitter<Recipe>
    = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
