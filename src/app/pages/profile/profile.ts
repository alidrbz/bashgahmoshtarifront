
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  user = {
    firstName: 'علی',
    lastName: 'دارابزاده',
    username: 'ali123',
    email: 'ali@example.com',
    phone: '09123456789',
    city: 'تهران'
  };

  saved = false;
  errorMessage = '';

  saveProfile() {
    this.saved = false;
    this.errorMessage = '';

    if (
      !this.user.firstName.trim() ||
      !this.user.lastName.trim() ||
      !this.user.username.trim() ||
      !this.user.city.trim()
    ) {
      this.errorMessage = 'لطفاً تمام فیلدهای ضروری را تکمیل کن.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.user.email)) {
      this.errorMessage = 'لطفاً یک ایمیل معتبر وارد کن.';
      return;
    }

    const phonePattern = /^09\d{9}$/;

    if (!phonePattern.test(this.user.phone)) {
      this.errorMessage = 'شماره موبایل باید ۱۱ رقم و با 09 شروع شود.';
      return;
    }

    this.saved = true;

    console.log('اطلاعات کاربر:', this.user);
  }
}
