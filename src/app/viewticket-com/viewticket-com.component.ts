import { Component } from '@angular/core';
import { Booking } from '../bookingsummary-com/Booking';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComComponent } from '../home-com/home-com.component';

@Component({
  selector: 'app-viewticket-com',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComComponent, HttpClientModule],
  templateUrl: './viewticket-com.component.html',
  styleUrl: './viewticket-com.component.css'
})
export class ViewticketComComponent {
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
      (error: any) => {
        console.error('Booking fetch error:', error);
        this.errorMessage = `Error retrieving booking: ${error.message}`;
      }
    );
  }

  backHome(): void {
    this.router.navigate(['/']);
  }


}
