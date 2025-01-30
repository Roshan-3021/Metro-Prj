import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { BookticketComComponent } from './bookticket-com/bookticket-com.component';
import { ContactComComponent } from './contact-com/contact-com.component';
import { LoginComComponent } from './login-com/login-com.component';
import { MapComComponent } from './map-com/map-com.component';
import { NotfoundComComponent } from './notfound-com/notfound-com.component';
import { StationsComComponent } from './stations/stations-com/stations-com.component';
import { filter } from 'rxjs';
import { SignupComComponent } from './signup-com/signup-com.component';
import { HomeComComponent } from './home-com/home-com.component';
import { SignoutComComponent } from './signout-com/signout-com.component';
import { CommonModule } from '@angular/common';
import { TrackmetroComComponent } from './trackmetro-com/trackmetro-com.component';
import { PaymentComComponent } from './payment-com/payment-com.component';
import { BookingsummaryComComponent } from './bookingsummary-com/bookingsummary-com.component';
import { AboutusComComponent } from './aboutus-com/aboutus-com.component';
import { TrackaquametroComComponent } from './trackaquametro-com/trackaquametro-com.component';
import { ViewticketComComponent } from './viewticket-com/viewticket-com.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule, BookticketComComponent, ContactComComponent, LoginComComponent, MapComComponent, NotfoundComComponent, StationsComComponent, SignupComComponent, HomeComComponent,SignoutComComponent,TrackmetroComComponent,PaymentComComponent,BookingsummaryComComponent,AboutusComComponent,TrackaquametroComComponent,ViewticketComComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'punemetro-prj';
  showStationsComponent: boolean = false;

  currentuser = localStorage.getItem("currentuser");
  islogin: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events to check the current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Set the flag based on the current route
      this.showStationsComponent = event.url === '/stations/stations-com';
    });

    if (localStorage.getItem("currentuser") == null) {
      //create a key in localstorage for the first time
      localStorage.setItem("currentuser", "GUEST");
      localStorage.setItem("currentuserid", "GUEST");
    }
    //toggle signin and signout links
    if (localStorage.getItem("currentuser") == "GUEST")
      this.islogin = false;
    else
      this.islogin = true;
  }
}


















