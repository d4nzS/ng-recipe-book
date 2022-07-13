import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') private nameInputRef: ElementRef;
  @ViewChild('amountInput') private amountInputRef: ElementRef;

  @Output() private ingredientAdded: EventEmitter<Ingredient>
    = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onAddItem(): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    if (ingName.trim() && ingAmount.trim()) {
      this.ingredientAdded.emit(newIngredient);
    }
  }
}
