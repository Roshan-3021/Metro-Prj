import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Contact } from './ContactInfo';


@Component({
  selector: 'app-contact-com',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './contact-com.component.html',
  styleUrl: './contact-com.component.css'
})
export class ContactComComponent {
  title = 'Contact Us - Pune Maha Metro';


  officeContacts: Contact[] = [
    new Contact(1, 'Maharashtra Metro Rail Corporation Pune Office:<br>A2, A3 Block District Court Interchange Metro Station,<br>Nyaymurti Ranade Path, ShivajiNagar, Pune - 411005', '020 - 26051072 / 26051074'),
    new Contact(2, 'Office of Director (Works), Director (Strategic Planning),<br>Director (Operations & Maintenance)<br>Nyaymurti Ranade Path, ShivajiNagar, Pune - 411005', '7410004068 / 67'),
    new Contact(3, 'Office of Executive Director (reach - 1 & reach - 2),<br>executive director (signal), GM (Safety, O&M),<br>CPM (Telecom), ACPM (AFC)<br>Sr. No. 468,469,470, Behind PCMC Hospital,<br>Phugewadi Octroi naka, Near Sai Service Center, Pune-411012.', '-'),
    new Contact(4, 'Office of Executive Director(System), CPM (Rolling Stock),<br>GM (Planning & Design), CPM (UG)<br>Block no. A43 FGSG Near Saboo Wadi Naka Pune-411007.', '7410004068 / 67')
  ];


  generalCorrespondence = {
    office: 'PUNE METRO RAIL PROJECT, Metro Rail Corporation Pune Office:',
    address: 'A2, A3 Block District Court Interchange Metro Station, Nyaymurti Ranade Path, ShivajiNagar, Pune - 411005',
    email: 'mail.pune@mahametro.org',
    phone: '020-26051074'
  };

  quickResponse = {
    emergency: '18002705501',
    bsnl: '020-29860928'
  };

  operations = {
    email: 'customercare.pmrp@mahametro.org',
    phone: '18002705501'
  };


  scheduleMeeting = {
    person: 'Shri. Shravan Hardikar (IAS)',
    contact: 'Sushma Prabhu (PS To Managing Director)',
    phone: '020-29707192',
    time: '10:30 AM To 6:30 PM'
  };


}

