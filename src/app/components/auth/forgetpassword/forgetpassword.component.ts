import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
  private router = inject(Router)
  setnewpassword() {
    this.router.navigate(['new-password']);
  }
}
