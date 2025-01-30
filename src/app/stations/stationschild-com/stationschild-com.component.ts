import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stationschild-com',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stationschild-com.component.html',
  styleUrl: './stationschild-com.component.css'
})
export class StationschildComComponent {
  @Output() myevent1 = new EventEmitter<string>();
  @Output() myevent2 = new EventEmitter<string>();

  m1() {
    this.myevent1.emit();
  }
  m2() {
    this.myevent2.emit();
  }


}
