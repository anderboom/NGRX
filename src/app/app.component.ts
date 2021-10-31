import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;
  updatedAt?: number;

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  get isNegative(): boolean {
    return this.counter <= 0;
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;
  }
  reset(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
