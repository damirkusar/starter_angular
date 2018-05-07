import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { components } from './components';
import { RouterModule } from '@angular/router';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  RouterModule
];

@NgModule({
  declarations: [...components],
  imports: [...sharedModules],
  exports: [...sharedModules, ...components]
})
export class SharedModule {}
