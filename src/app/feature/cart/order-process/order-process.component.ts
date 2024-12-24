import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrls: ['./order-process.component.css']
})
export class OrderProcessComponent {
  @Input() currentStep: 'account' | 'address' | 'payment' | 'confirm' = 'account';

  // Adımların tanımları
  steps = [
    { name: 'account', label: 'Account', icon: 'user.svg', route: '/zomo/order/checkout' },
    { name: 'address', label: 'Address', icon: 'location.svg', route: '' },
    { name: 'payment', label: 'Payment', icon: 'wallet-add.svg', route: '/payment' },
    { name: 'confirm', label: 'Confirm', icon: 'verify.svg', route: '/order/confirm-order' },
  ];
}
