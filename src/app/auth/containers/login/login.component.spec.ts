import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services';
import { StoreModule, combineReducers } from '@ngrx/store';
import * as fromAuth from '../../store/reducers';

class AuthServiceMock { }

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
          StoreModule.forRoot({
            auth: combineReducers(fromAuth.reducers)
          })
        ],
        providers: [{ provide: AuthService, useClass: AuthServiceMock }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
