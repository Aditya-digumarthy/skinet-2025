import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Product;
}
