import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutus-com',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './aboutus-com.component.html',
  styleUrl: './aboutus-com.component.css'
})
export class AboutusComComponent {
  teamMembers = [
    {
      name: 'Roshan Deshmukh (Team Lead)',
      photo: 'roshan.JPG', 
      education: 'Bachelor of Technology in Information Technology',
      role: 'Backend Development & Frontend Development',
      description: 'Oversees the project and ensures timely delivery.'
    },
    {
      name: 'Avantika Patil',
      photo: 'avani.jpg',
      education: 'Bachelor of Technology in Computer Science and Engineering',
      role: 'Backend Development & Frontend Development',
      description: 'Handles server-side functionalities and database integration.'
    },
    {
      name: 'Sakshi Kale',
      photo: 'sakshi.jpg',
      education: 'Bachelor of Engineering in Electronics and Telecommunication',
      role: 'Backend Development & Frontend Development',
      description: 'Designs and develops the user interface for the application.'
    },
    {
      name: 'Sonal Salgar',
      photo: 'sona.jpg',
      education: 'Bachelor of Technology in Computer Science and Engineering',
      role: 'Backend Development & Frontend Development',
      description: 'Works on promoting the app and enhancing its reach.'
    }
  ];

}
