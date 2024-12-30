import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContractualItemsComponent } from '../../components/contractual-items/contractual-items.component';
import { NonContractualItemsComponent } from '../../components/non-contractual-items/non-contractual-items.component';

@Component({
  selector: 'app-change-order-dialog',
  standalone: true,
  imports: [PrimeNgModule,ContractualItemsComponent,NonContractualItemsComponent],
  templateUrl: './change-order-dialog.component.html',
  styleUrl: './change-order-dialog.component.scss'
})
export class ChangeOrderDialogComponent {
  
 constructor(private ref: DynamicDialogRef) {}
  onDialogClose() {
    this.ref.close();
  }
}
