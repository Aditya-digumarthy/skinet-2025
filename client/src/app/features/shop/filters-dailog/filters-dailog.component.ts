import { Component, inject } from '@angular/core';
import { ShopService } from '../../../core/services/shop.service';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filters-dailog',
  imports: [MatDivider, MatSelectionList, MatListOption, MatButton,FormsModule],
  templateUrl: './filters-dailog.component.html',
  styleUrl: './filters-dailog.component.scss'
})
export class FiltersDailogComponent {
  protected shopService = inject(ShopService);
  private dialogRef = inject(MatDialogRef<FiltersDailogComponent>);
  data = inject(MAT_DIALOG_DATA);

  selectedBrands: string[] = this.data.selectedBrands;
  selectedTypes: string[] = this.data.selectedTypes;

  applyFilters() {
    this.dialogRef.close({
      selectedBrands: this.selectedBrands,
      selectedTypes: this.selectedTypes
    })

  }



}
