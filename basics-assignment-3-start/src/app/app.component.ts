import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayEyes: boolean = false;
  buttonClickCount: number = 0;
  buttonClicks: number[] = [];

  onClick() {
    this.displayEyes = !this.displayEyes;
    ++this.buttonClickCount;
    this.buttonClicks.push(this.buttonClickCount);
  }

  getColor(number: number) {
    return number > 5 ? 'blue' : 'none';
  }
}
