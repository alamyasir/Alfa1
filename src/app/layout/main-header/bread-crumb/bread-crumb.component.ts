import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {
  itemsbreadcrumbList: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.itemsbreadcrumbList = [
      // { icon: 'pi pi-home', label: 'Home', route: '/installation' },
      { label: 'Home', route: '/' },
      // { label: 'Components' },
      // { label: 'Form' },
      { label: 'Current Page', route: '/' }
    ];
  }
}
