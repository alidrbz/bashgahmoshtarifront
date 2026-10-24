
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TransactionType = 'خرید' | 'جایزه' | 'بازگشت';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions {
  searchText = '';
  selectedType = 'همه';

  transactionTypes = ['همه', 'خرید', 'جایزه', 'بازگشت'];

  transactions: {
    id: number;
    title: string;
    date: string;
    amount: string;
    points: number;
    type: TransactionType;
    status: string;
  }[] = [
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

  get filteredTransactions() {
    const search = this.searchText.trim().toLowerCase();

    return this.transactions.filter(transaction => {
      const matchesSearch =
        transaction.title.toLowerCase().includes(search) ||
        transaction.id.toString().includes(search);

      const matchesType =
        this.selectedType === 'همه' ||
        transaction.type === this.selectedType;

      return matchesSearch && matchesType;
    });
  }

  get totalPurchases(): number {
    return this.transactions
      .filter(transaction => transaction.type === 'خرید')
      .reduce(
        (total, transaction) =>
          total + Number(
            transaction.amount.replaceAll(',', '').replaceAll('،', '')
          ),
        0
      );
  }

  get netPoints(): number {
    return this.transactions.reduce(
      (total, transaction) => total + transaction.points,
      0
    );
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('fa-IR').format(value);
  }
}
