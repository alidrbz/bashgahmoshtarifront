import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  message = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  login(): void {

    const result = this.auth.login(
      this.username,
      this.password
    );

    if (result) {

      this.message = 'ورود موفق بود ✅';

      // انتقال به Dashboard
      this.router.navigate(['/dashboard']);

    } else {

      this.message = 'نام کاربری یا رمز عبور اشتباه است ❌';

    }
  }
}