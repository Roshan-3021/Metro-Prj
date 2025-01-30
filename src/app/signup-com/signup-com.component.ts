import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrivacypoliciesComComponent } from '../privacypolicies-com/privacypolicies-com.component';
import { ServicesComComponent } from '../services-com/services-com.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-com',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,PrivacypoliciesComComponent,ServicesComComponent,RouterModule],
  templateUrl: './signup-com.component.html',
  styleUrl: './signup-com.component.css'
})
export class SignupComComponent {
  private url = 'http://localhost:8083/adduser';

  constructor(private http: HttpClient) { }

  saveuser(regform: NgForm) {
    const newuser = regform.value;
    this.http.post(this.url, newuser).subscribe(
      data => {
        alert('Registration Successful!! ' + data);
      },
      error => {
        console.error('Registration error:', error);
        alert('Registration Failed!! ' + error.message);
      }
    );
  }

}
