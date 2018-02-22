import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { User } from '../auth/models';
import * as fromAuth from '../auth/store/reducers';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Starter';
  user$: Observable<User>;

  constructor(private store: Store<fromAuth.State>, public router: Router) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromAuth.getUser));

    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(nav => {
        const previousUrl = this.router.url;
        console.log('previousUrl', previousUrl);
      });
  }
}
