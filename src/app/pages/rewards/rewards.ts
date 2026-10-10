import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  imports: [],
  templateUrl: './rewards.html',
  styleUrl: './rewards.css'
})
export class Rewards {

  rewards = [
    {
      title: 'کد تخفیف ۲۰٪',
      description: '۲۰ درصد تخفیف برای خرید بعدی',
      icon: '🎁',
      points: 500,
      type: 'تخفیف'
    },
    {
      title: 'ارسال رایگان',
      description: 'هزینه ارسال سفارش بعدی رایگان',
      icon: '🚚',
      points: 300,
      type: 'ارسال'
    },
    {
      title: 'کارت هدیه ۵۰۰ هزار تومانی',
      description: 'قابل استفاده برای خرید محصولات',
      icon: '💳',
      points: 1500,
      type: 'کارت هدیه'
    },
    {
      title: 'تخفیف ویژه ۳۰٪',
      description: 'تخفیف ویژه برای مشتریان وفادار',
      icon: '⭐',
      points: 1000,
      type: 'ویژه'
    }
  ];

  userPoints = 1250;

  redeemReward(reward: any) {

    if (this.userPoints >= reward.points) {

      this.userPoints -= reward.points;

      alert(
        `تبریک! جایزه «${reward.title}» برای شما فعال شد.`
      );

    } else {

      alert(
        `امتیاز شما برای دریافت این جایزه کافی نیست.`
      );

    }
  }
}