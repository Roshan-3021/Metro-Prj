import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Metro } from './Metro';

@Component({
  selector: 'app-login-com',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule,FormsModule],
  templateUrl: './login-com.component.html',
  styleUrl: './login-com.component.css'
})
export class LoginComComponent {
  constructor(private http: HttpClient, private router: Router) { }

  checkuser(logform: NgForm) {
    let user: any = logform.controls["email"].value;
    let pass: any = logform.controls["Password"].value;
    console.log(user + '--------' + pass);

    this.http.get<Metro>("http://localhost:8083/perform_login/" + user + "/" + pass).subscribe(
      (data) => {
        if (data != null) {
          alert(data);
          localStorage.setItem('currentuser', data.firstName);
          localStorage.setItem('currentuserid', user);
          window.location.reload();

          Swal.fire({
            icon: 'success',
            title: 'WOW...',
            text: 'Login Succesfully',
          });
        } else
          Swal.fire({
            icon: 'error',
            title: 'Oops111...',
            text: 'Login Failed',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops2222...',
          text: 'Login Failed',
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    );

    this.router.navigate(['/']);

  }
}
