import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  isClickable: boolean = false;

  ngOnInit() {
  }

  onUserInput() {
    this.userName == '' ? this.isClickable = false : this.isClickable = true;
  }

  onResetUsername() {
    this.userName = '';
    this.isClickable = false;
  }
}

