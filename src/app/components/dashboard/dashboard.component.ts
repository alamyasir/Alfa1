
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimeNgModule, DashboardTableComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  activeTabIndex: number = 0;

  tabs = [
    {
      value: 0,
      title: 'Total Sites',
      total: 25,
      icon: 'pi pi-chart-line',
      statuses: [
        { color: 'gray', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'orange', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'green', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'red', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'blue', label: '02 Draft', icon: 'pi pi-clipboard' },
      ],
    },
    {
      value: 1,
      title: 'Total Items',
      total: 25,
      icon: 'pi pi-chart-line',
      statuses: [
        { color: 'gray', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'orange', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'green', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'red', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'blue', label: '02 Draft', icon: 'pi pi-clipboard' },
      ],
    },
    {
      value: 2,
      title: 'Total Contracts',
      total: 25,
      icon: 'pi pi-chart-line',
      statuses: [
        { color: 'gray', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'orange', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'green', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'red', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'blue', label: '02 Draft', icon: 'pi pi-clipboard' },
      ],
    },
    {
      value: 3,
      title: 'Total Change Orders',
      total: 25,
      icon: 'pi pi-chart-line',
      statuses: [
        { color: 'gray', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'orange', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'green', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'red', label: '02 Draft', icon: 'pi pi-clipboard' },
        { color: 'blue', label: '02 Draft', icon: 'pi pi-clipboard' },
      ],
    },
  ];

  // Method to switch active tab
  onTabChange(index: number): void {
    this.activeTabIndex = index;
  }

}
