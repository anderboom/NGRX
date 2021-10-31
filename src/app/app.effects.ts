import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';

import {
  changeUpdatedAt,
  decrease,
  increase,
  reset,
} from './reducers/counter';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, reset),
      map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    )
  );
}
