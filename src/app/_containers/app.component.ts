import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Starter';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(nav => {
        const previousUrl = this.router.url;
        console.log('previousUrl', previousUrl);
      });
  }
}