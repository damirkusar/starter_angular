import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import * as fromAuth from '../auth/store/reducers';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: any;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            authReducer: combineReducers(fromAuth.reducers)
          })
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it(
    'should create the app', () => {
      expect(component).toBeTruthy();
    }
  );

  it(
    `should have as title 'Angular Starter'`, () => {
      expect(component.title).toEqual('Angular Starter');
    }
  );

  it(
    'should render title in a h1 tag', () => {
      expect(element.querySelector('h1').textContent).toContain(
        'Welcome to Angular Starter!'
      );
    }
  );
});
