import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, IAppSatate, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<{ app: IAppSatate }>) {}

  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
    )
  ;

  incrementaContador() {
    this.store.dispatch(incrementaContador());
  }
  decrementaContador() {
    this.store.dispatch(decrementaContador());
  }
}
