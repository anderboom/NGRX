import { Component } from '@angular/core';

import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import {
  countSelector,
  decrease,
  increase,
  reset,
} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  updatedAt?: number;
  count$ = this.store.select(countSelector);
  isNegative$ = this.count$.pipe(map((count) => count <= 0));

  constructor(private store: Store) {}

  increase(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease());
  }
  reset(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(reset());
  }
}
