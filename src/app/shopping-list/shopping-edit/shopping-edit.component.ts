import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') private nameInputRef: ElementRef;
  @ViewChild('amountInput') private amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  public onAddItem(): void {
    const ingName = this.nameInputRef.nativeElement.value.trim();
    const ingAmount = this.amountInputRef.nativeElement.value.trim();

    if (ingName && ingAmount) {
      const newIngredient = new Ingredient(ingName, Number(ingAmount));

      this.slService.addIngredient(newIngredient);
    }
  }
}
