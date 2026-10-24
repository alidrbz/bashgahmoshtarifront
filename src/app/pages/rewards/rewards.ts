
import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  standalone: true,
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
  message = '';
  messageType: 'success' | 'warning' = 'success';

  redeemReward(reward: any): void {
    if (this.userPoints < reward.points) {
      this.messageType = 'warning';
      this.message = 'امتیاز شما برای دریافت این جایزه کافی نیست.';
      return;
    }

    const confirmed = window.confirm(
      `آیا مطمئن هستید که جایزه «${reward.title}» را با ${reward.points} امتیاز دریافت کنید؟`
    );

    if (!confirmed) {
      return;
    }

    this.userPoints -= reward.points;

    this.messageType = 'success';
    this.message =
      `تبریک! جایزه «${reward.title}» با موفقیت دریافت شد. ` +
      `امتیاز باقی‌مانده شما: ${this.userPoints}`;
  }
}
