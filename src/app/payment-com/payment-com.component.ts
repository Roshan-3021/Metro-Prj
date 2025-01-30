import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingsummaryComComponent } from '../bookingsummary-com/bookingsummary-com.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-com',
  standalone: true,
  imports: [CommonModule, FormsModule, BookingsummaryComComponent],
  templateUrl: './payment-com.component.html',
  styleUrl: './payment-com.component.css'
})
export class PaymentComComponent {
  paymentDone: boolean = false;
  timerStarted: boolean = false;
  remainingTime: number = 10;

  startPaymentTimer() {
    this.timerStarted = true;
    const interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(interval);
        this.paymentDone = true;
        this.showPaymentSuccessAlert();
      }
    }, 1000);
  }

  constructor(private router: Router) { }
  onSubmit() {
    this.router.navigate(['/bookingsummary']);
  }

  showPaymentSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'You can now view your ticket details.',
      confirmButtonText: 'OK'
    });
  }

}
