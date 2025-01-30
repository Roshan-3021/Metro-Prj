import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentComComponent } from '../payment-com/payment-com.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookticket-com',
  standalone: true,
  imports: [FormsModule, CommonModule, PaymentComComponent,HttpClientModule],
  templateUrl: './bookticket-com.component.html',
  styleUrl: './bookticket-com.component.css'
})
export class BookticketComComponent {
  sources = [
    { name: 'PCMC', destination: ['Sant Tukaram Nagar', 'Bhosari', 'Kasarwadi', 'Phugewadi', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Sant Tukaram Nagar', destination: ['PCMC', 'Bhosari', 'Kasarwadi', 'Phugewadi', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Bhosari', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Kasarwadi', destination: ['PCMC', 'Sant Tukaram Nagar', 'Bhosari', 'Phugewadi', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Phugewadi', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Dapodi', 'Bhosari', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Dapodi', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Bhosari', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Harris Bridge', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Khadki', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Range Hills', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Khadki', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Shivaji Nagar', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Civil Court', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Civil Court', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Budhwar Peth', 'Mandai', 'Swargate'] },
    { name: 'Budhwar Peth', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Mandai', 'Swargate'] },
    { name: 'Mandai', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Swargate'] },
    { name: 'Swargate', destination: ['PCMC', 'Sant Tukaram Nagar', 'Kasarwadi', 'Phugewadi', 'Bhosari', 'Dapodi', 'Harris Bridge', 'Khadki', 'Range Hills', 'Shivaji Nagar', 'Civil Court', 'Budhwar Peth', 'Mandai'] },

    { name: 'Vanaz', destination: ['Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Anand Nagar', destination: ['Vanaz', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Ideal Colony', destination: ['Vanaz', 'Anand Nagar', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Nal Stop', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Garware College', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Deccan Gymkhana', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Chhatrapati Sambhaji Udyan', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'PMC', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Civil Court', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Mangalwar Peth', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Pune Railway Station', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Ruby Hall Clinic', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Bund Garden', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Bund Garden', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Yerawada', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Yerawada', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Kalyani Nagar', 'Ramwadi'] },
    { name: 'Kalyani Nagar', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Ramwadi'] },
    { name: 'Ramwadi', destination: ['Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College', 'Deccan Gymkhana', 'Chhatrapati Sambhaji Udyan', 'PMC', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden', 'Yerawada', 'Kalyani Nagar'] }
  ];

  from: string = '';
  destination: string[] = [];
  to: string = '';
  noofTicket:number=0;
  


  onSourceChange() {
    const fromstation = this.sources.find(c => c.name === this.from);
    this.destination = fromstation ? fromstation.destination : [];
    this.to = '';
  }

  NoofTicket: string = ('1,2,3,4,5,6,7,8,9');

  constructor(private router: Router,private http: HttpClient) { 
    if (localStorage.getItem("currentuser") == "GUEST"){
      Swal.fire({
        icon: 'error',
        title: 'Login to continue',
        text: 'You need to login for booking.',
        confirmButtonText: 'OK'
      });

      this.router.navigate(['/login']);
    }

  }

  isFormValid(): boolean {
    return this.from !== '' && this.to !== '' && this.NoofTicket !== '';
  }

  private url = 'http://localhost:8083/addbooking';

  onSubmit(bookform:NgForm) {
    if (this.isFormValid()) {      
      const newuser = bookform.value;
      this.http.post(this.url+"/"+localStorage.getItem("currentuserid"), newuser).subscribe(
        (data: any) => {
          alert('Ticket booked!! ' + newuser.from+"---"+newuser.to+"---"+newuser.noofTicket);
        },
        (error: any) => {
          console.error('Booking error:', error);
          alert('Try again!! ' + error.message);
        }
      );

      this.router.navigate(['/payment']);
    }
  }

}
