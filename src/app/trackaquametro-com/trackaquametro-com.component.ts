import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trackaquametro-com',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './trackaquametro-com.component.html',
  styleUrl: './trackaquametro-com.component.css'
})
export class TrackaquametroComComponent {
  stations: string[] = [
    'Vanaz', 'Anand Nagar', 'Ideal Colony', 'Nal Stop', 'Garware College','Deccan Gymkhana',
    'Chhatrapati Sambhaji Udyan', 'PMC Bhavan', 'Civil Court', 'Mangalwar Peth', 'Pune Railway Station', 'Ruby Hall Clinic', 'Bund Garden','Yerwada','Kalyani Nagar','Ramwadi'
  ];
  trainStartTime: Date = new Date();
  currentStation: number = 0; // Start at Station 1 (index 0)
  direction: number = 1; // 1 for forward, -1 for reverse
  progress: number = 0; // Progress between stations (0-100%)
  intervalId: any;
  currentTime: Date = new Date();

  ngOnInit(): void {
    // Train starts at 6:00 AM
    this.trainStartTime.setHours(6, 0, 0);
    this.startTrain();
  }

  startTrain(): void {
    this.updateCurrentStation();
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
      this.updateCurrentStation();
    }, 100);
  }

  updateCurrentStation(): void {
    const now = this.currentTime;
    const minutesSinceStart = Math.floor((now.getTime() - this.trainStartTime.getTime()) / (1000 * 60));

    // Each station is reached every 2 minutes, with a 1-minute stop
    const cycleTime = 2 + 1; // 2 minutes moving + 1 minute stopping
    const totalStations = this.stations.length;

    const stationCycle = Math.floor(minutesSinceStart / cycleTime); // Full cycles completed
    const stationPosition = minutesSinceStart % cycleTime; // Position within the current cycle

    // Determine direction and station
    if (stationCycle < totalStations) {
      this.currentStation = stationCycle;
      this.direction = 1; // Forward
    } else {
      this.currentStation = totalStations - 1 - (stationCycle % totalStations);
      this.direction = -1; // Reverse
    }

    // Progress within the current station segment
    this.progress = stationPosition < 2 ? (stationPosition / 2) * 100 : 100;
  }

  getSegmentColor(index: number): string {
    if (index < this.currentStation) {
      return '#4caf50'; // Completed stations
    } else if (index === this.currentStation) {
      return this.progress === 100 ? '#ff9800' : `rgba(76, 175, 80, ${this.progress / 100})`; // Current station
    } else {
      return '#ddd'; // Upcoming stations
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


}
