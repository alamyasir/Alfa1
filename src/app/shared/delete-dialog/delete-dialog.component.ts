import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {
  constructor(
    public dialogService: DialogService,
    private ref: DynamicDialogRef
  ) {}
  onClose() {
    this.ref.close();
  }
}
