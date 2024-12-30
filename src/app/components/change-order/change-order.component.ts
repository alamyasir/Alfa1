import { Component } from '@angular/core';
import { ChangeOrderFormComponent } from './change-order-form/change-order-form.component';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { ChangeOrderTableComponent } from './change-order-table/change-order-table.component';
@Component({
  selector: 'app-change-order',
  standalone: true,
  imports: [PrimeNgModule, ChangeOrderFormComponent, ChangeOrderTableComponent,
  ],
  templateUrl: './change-order.component.html',
  styleUrl: './change-order.component.scss'
})
export class ChangeOrderComponent {
  constructor(private router: Router,) { }
  activeTab = 0;
  tabs = [
    { value: 0, label: 'All', count: 150, icon: 'pi pi-file', color: 'blue', class: 'primary' },
    { value: 1, label: 'Draft', count: 5, icon: 'pi pi-clipboard', color: 'gray', class: 'secondary' },
    { value: 2, label: 'Pending', count: 20, icon: 'pi pi-clock', color: 'orange', class: 'warning' },
    { value: 3, label: 'Approved', count: 90, icon: 'pi pi-check-circle', color: 'green', class: 'success' },
    { value: 4, label: 'Rejected', count: 10, icon: 'pi pi-file-excel', color: 'red', class: 'danger' },
    { value: 5, label: 'Closed', count: 25, icon: 'pi pi-times-circle', color: 'blue', class: 'primary-light' },
  ];
}
