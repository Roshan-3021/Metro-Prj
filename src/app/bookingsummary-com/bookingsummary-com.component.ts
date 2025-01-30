import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComComponent } from '../home-com/home-com.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Booking } from './Booking';

@Component({
  selector: 'app-bookingsummary-com',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComComponent, HttpClientModule],
  templateUrl: './bookingsummary-com.component.html',
  styleUrl: './bookingsummary-com.component.css'
})
export class BookingsummaryComComponent {
  private url = 'http://localhost:8083/getthebooking';
  booking: Booking[] | null = [];
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {
    const userId = localStorage.getItem('currentuserid');
    if (userId) {
      this.fetchBooking(userId);
    } else {
      this.errorMessage = 'No user ID found in local storage!';
    }

  }
  fetchBooking(userId: string): void {
    this.http.get<Booking[]>(`${this.url}/${userId}`).subscribe(
      (data: Booking[]) => {
        this.booking = data;
        console.log("fetch booking ="+this.booking);
      },
      (error) => {
        console.error('Booking fetch error:', error);
        this.errorMessage = `Error retrieving booking: ${error.message}`;
      }
    );
  }

  backHome(): void {
    this.router.navigate(['/']);
  }


}
