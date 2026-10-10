import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions {

  transactions = [
    {
      id: 1001,
      title: 'خرید از فروشگاه',
      date: '۱۴۰۵/۰۶/۱۰',
      amount: '۲,۵۰۰,۰۰۰',
      points: 250,
      type: 'خرید',
      status: 'موفق'
    },
    {
      id: 1002,
      title: 'خرید از فروشگاه',
      date: '۱۴۰۵/۰۶/۰۸',
      amount: '۱,۸۰۰,۰۰۰',
      points: 180,
      type: 'خرید',
      status: 'موفق'
    },
    {
      id: 1003,
      title: 'دریافت جایزه',
      date: '۱۴۰۵/۰۶/۰۵',
      amount: '۰',
      points: -500,
      type: 'جایزه',
      status: 'موفق'
    },
    {
      id: 1004,
      title: 'خرید از فروشگاه',
      date: '۱۴۰۵/۰۶/۰۲',
      amount: '۳,۲۰۰,۰۰۰',
      points: 320,
      type: 'خرید',
      status: 'موفق'
    },
    {
      id: 1005,
      title: 'بازگشت کالا',
      date: '۱۴۰۵/۰۵/۲۸',
      amount: '۱,۲۰۰,۰۰۰',
      points: -120,
      type: 'بازگشت',
      status: 'موفق'
    }
  ];

}