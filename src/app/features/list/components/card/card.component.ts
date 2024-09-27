import { Component, computed, input } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  //Usaremos o Signal de Input, não mais um decorator
  product = input.required<Product>();

  // Precido com Vue, computed é um 'signal' que ouve outros signals. mas é um função de leitura e é reativo. 
  // Então se o valor de product mudar ele vai computar esse valor novo, já que o computed vai estar observando essa variável
  productTitle = computed(() => { this.product().title })
}
