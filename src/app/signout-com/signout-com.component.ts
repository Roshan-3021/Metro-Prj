import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signout-com',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './signout-com.component.html',
  styleUrl: './signout-com.component.css'
})
export class SignoutComComponent {
  constructor(private router: Router) { }

  signOut(): void {
    // Clear user data (e.g., remove token from localStorage or sessionStorage)
   // localStorage.removeItem('userToken');
   localStorage.setItem("currentuser", "GUEST");
//reload the webpage
    // Navigate back to the login or welcome page
    this.router.navigate(['/login']).then(() => {
      // Reload the webpage after navigation
      window.location.reload();
    });

  }

}
