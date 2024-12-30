import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  private router = inject(Router)
  login() {
    this.router.navigate(['layout/dashboard']);
  }
}
