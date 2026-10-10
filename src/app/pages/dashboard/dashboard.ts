import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  username = '';


constructor(

  
  private auth: Auth,
  private router: Router
) {
  this.username = this.auth.getUsername();
}

logout(): void {

  this.auth.logout();

  this.router.navigate(['/login']);

}



  user = {
    name: 'علی درابزاده',
    level: 'طلایی',
    points: 12500,
    nextLevel: 15000
  };

  stats = [
    {
      title: 'امتیاز فعلی',
      value: '۱۲,۵۰۰',
      icon: '⭐',
      description: 'امتیاز قابل استفاده'
    },
    {
      title: 'خریدهای من',
      value: '۲۴',
      icon: '🛍️',
      description: 'تعداد خریدها'
    },
    {
      title: 'تخفیف دریافت شده',
      value: '۳,۸۵۰,۰۰۰',
      icon: '🎁',
      description: 'تومان'
    },
    {
      title: 'سطح مشتری',
      value: 'طلایی',
      icon: '👑',
      description: 'سطح فعلی شما'
    }
  ];

  recentTransactions = [
    {
      title: 'خرید از فروشگاه',
      date: '۱۴۰۴/۰۶/۰۸',
      points: '+۵۰۰',
      type: 'plus'
    },
    {
      title: 'دریافت جایزه',
      date: '۱۴۰۴/۰۶/۰۵',
      points: '-۱۰۰۰',
      type: 'minus'
    },
    {
      title: 'خرید از فروشگاه',
      date: '۱۴۰۴/۰۶/۰۲',
      points: '+۸۰۰',
      type: 'plus'
    },
    {
      title: 'امتیاز ویژه',
      date: '۱۴۰۴/۰۵/۲۸',
      points: '+۳۰۰',
      type: 'plus'
    }
  ];

  getProgress(): number {
    return (this.user.points / this.user.nextLevel) * 100;
  }
}