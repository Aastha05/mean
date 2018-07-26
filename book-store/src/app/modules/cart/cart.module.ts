import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeComponent } from './components/cart-home/cart-home.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartHomeComponent, CartListComponent, CartItemComponent]
})
export class CartModule { }
