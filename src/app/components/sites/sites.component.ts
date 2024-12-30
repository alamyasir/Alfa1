import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { SitesTableComponent } from './sites-table/sites-table.component';

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [PrimeNgModule, SitesTableComponent],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss',
})
export class SitesComponent {
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
