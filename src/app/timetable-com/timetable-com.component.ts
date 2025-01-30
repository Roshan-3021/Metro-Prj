import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-timetable-com',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './timetable-com.component.html',
  styleUrl: './timetable-com.component.css'
})
export class TimetableComComponent {
  title = 'Metro Timetable';
  selectedLanguage: 'marathi' | 'english' = 'marathi';
  timetableData = {
    marathi: {
      title: 'Metro Timetable - Marathi',
      imagePath: 'TimeTable1.jfif',
      caption: 'The above is the metro timetable in Marathi.'
    },
    english: {
      title: 'Metro Timetable - English',
      imagePath: 'TimeTable2.jfif',
      caption: 'The above is the metro timetable in English.'
    }
  };

  showTimetable(language: 'marathi' | 'english') {
    this.selectedLanguage = language;
  }

}

