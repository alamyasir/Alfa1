import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [PrimeNgModule, ButtonModule, Menu, BreadCrumbComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  constructor(private router: Router) { }
  ngOnInit() {

    this.items = [
      // {
      //   separator: true
      // },

      {
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O'
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
            command: () => this.logout()
          }
        ]
      },
      // {
      //   separator: true
      // }
    ];
  }
  logout(): void {
    this.router.navigate(['']);
  }




  items: MenuItem[] | undefined;



}
