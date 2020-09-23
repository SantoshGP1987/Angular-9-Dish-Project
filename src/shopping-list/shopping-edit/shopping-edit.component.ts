import { Component, OnInit, ViewChild,EventEmitter, ElementRef, Output } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef : ElementRef; 
  @ViewChild('inputAmount') inputAmountRef : ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const name = this.inputNameRef.nativeElement.value;
    const amount = this.inputAmountRef.nativeElement.value;
    const nwIngre = new Ingredient(name,amount);
    this.newIngredient.emit(nwIngre);
  }
}
