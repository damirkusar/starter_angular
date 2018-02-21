import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  // {
  //   path: 'auth',
  //   loadChildren: './auth/auth.module#AuthModule'
  // },
  { path: '**', redirectTo: '' }
];
