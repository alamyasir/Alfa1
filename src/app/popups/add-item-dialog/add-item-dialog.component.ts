import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { SelectItemsComponent } from '../../components/select-items/select-items.component';
import { ImportItemsComponent } from '../../components/import-items/import-items.component';
import { AddNewItemsComponent } from '../../components/add-new-items/add-new-items.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-item-dialog',
  standalone: true,
  imports: [
    PrimeNgModule,
    SelectItemsComponent,
    ImportItemsComponent,
    AddNewItemsComponent,
  ],
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.scss',
})
export class AddItemDialogComponent {
  constructor(private ref: DynamicDialogRef) {}
  onDialogClose() {
    this.ref.close();
  }
}
