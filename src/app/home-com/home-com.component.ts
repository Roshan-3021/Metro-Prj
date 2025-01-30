import { Component } from '@angular/core';

@Component({
  selector: 'app-home-com',
  standalone: true,
  imports: [],
  templateUrl: './home-com.component.html',
  styleUrl: './home-com.component.css'
})
export class HomeComComponent {
  about: string = '';
  imgpath: string = '';
  desc: string = '';
  imagePaths: string[] = [];
  currentImageIndex: number = 0;

  constructor() {
    this.about = 'Welcome to Pune Metro';
    this.imgpath = 'Train2 (1).jpeg'; // Initial image path
    this.imagePaths = ['Train2 (1).jpeg', 'Train2 (2).jpeg', 'Train2 (3).jpeg']; // Add more images as needed
  }

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
      this.imgpath = this.imagePaths[this.currentImageIndex];
    }, 3000); // Change image every 3 seconds
  }

}
