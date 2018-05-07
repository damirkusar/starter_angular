import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormField,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class AngularMaterialModule {}
