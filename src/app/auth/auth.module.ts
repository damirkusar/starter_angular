import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { routes } from './auth-routing';
import { containers } from './containers';
import { services } from './services';

import { reducers, effects } from './store';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('authReducer', reducers),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [...containers],
  providers: [...services]
})
export class AuthModule {}
