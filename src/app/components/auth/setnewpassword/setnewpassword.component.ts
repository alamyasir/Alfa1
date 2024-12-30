import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setnewpassword',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './setnewpassword.component.html',
  styleUrl: './setnewpassword.component.scss'
})
export class SetnewpasswordComponent {
  private router = inject(Router)
  changepassword() {
    this.router.navigate(['change-password']);
  }
}
