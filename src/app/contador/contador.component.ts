import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppSatate } from '../store/app.state';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor(private store: Store<{ app: IAppSatate }>) {}

  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
    )
  ;

  ngOnInit(): void {
  }

}
