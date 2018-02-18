import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { containers } from './containers';
import { services, AuthService } from './services';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [...containers],
  providers: [...services, AuthService]
})
export class AuthModule {}
