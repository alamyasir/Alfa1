import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';


@Component({
  selector: 'app-change-order-table',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './change-order-table.component.html',
  styleUrl: './change-order-table.component.scss'
})
export class ChangeOrderTableComponent {
  //Table Headers
  tableHeaders: { field: string; header: string }[] = [
    { field: 'code', header: '#' },
    { field: 'name', header: 'Name' },
    { field: 'organization', header: 'Organization' },
    { field: 'contract', header: 'Contract' },
    { field: 'status', header: 'Status' },
    { field: 'date', header: 'Due Date' },
    { field: 'cost', header: 'Total Cost' },
    { field: 'assignee', header: 'Assignee' },
    { field: 'actions', header: 'Action' },
  ];

  ///Table Data
  ordertable: any[] = [
    {
      code: 'P001',
      name: 'Product 1',
      organization: 'Organization',
      contract: 'Contract Title',
      status: 'Approved',
      date: '2024-01-01',
      cost: '100.00 SAR',
      assignee: 'Assignee',
    },
    {
      code: 'P002',
      name: 'Product 2',
      organization: 'Organization',
      contract: 'Contract Title',
      status: 'Approved',
      date: '2024-01-01',
      cost: '100.00 SAR',
      assignee: 'Assignee',
    },
  ];

  selecteddata: any[] = [];
 
}
