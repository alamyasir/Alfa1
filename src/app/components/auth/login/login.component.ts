import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router)
  date: Date;

  value: string;
  value2: string;
  login() {
    this.router.navigate(['layout/dashboard'])
  }
  signup() {
    this.router.navigate(['signup'])
  }
  forgetpassword() {
    this.router.navigate(['forget-password'])
  }
}
