import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
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

  saveProfile() {
    this.saved = true;

    setTimeout(() => {
      this.saved = false;
    }, 3000);

    console.log('اطلاعات کاربر:', this.user);
  }
}