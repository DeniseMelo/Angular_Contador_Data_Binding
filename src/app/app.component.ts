import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  valorInput: number = 0
  constructor() {}
   
    aumenta() {
      this.valorInput++;
    }

    diminui() {
      this.valorInput--;
    }

  }
  
