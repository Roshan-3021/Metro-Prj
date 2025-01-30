import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StationschildComComponent } from '../stationschild-com/stationschild-com.component';

@Component({
  selector: 'app-stations-com',
  standalone: true,
  imports: [CommonModule, FormsModule,StationschildComComponent],
  templateUrl: './stations-com.component.html',
  styleUrl: './stations-com.component.css'
})
export class StationsComComponent {
  lines: any[] = [];

  aqua() {
    this.lines = ['PCMC',
      'Dapodi',
      'Phugewadi',
      'Shivajinagar',
      'Swargate',
      'Hinjewadi',
      'Baner',
      'Balewadi',
      'Pashan',
      'Kothrud',
      'Khadki',
      'Mahalunge',
      'Vanaj',
      'Vishrantwadi'
    ];
  }
  purple() {
    this.lines = ['Ramwadi',
      'Katraj',
      'Bhakti Shakti',
      'Warje',
      'Dattawadi',
      'Kothrud',
      'Balaji Nagar',
      'Erandwane',
      'Vishrantwadi',
      'Sainath Nagar',
      'Shivaji Nagar',
      'Swargate',
    ];
  }


}
