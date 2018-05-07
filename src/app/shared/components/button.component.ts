import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
      <button
      mat-raised-button
      color="{{buttonColor}}"
      [routerLink]="buttonLink"
      class="w-full"
      [disabled]="buttonDisabled">
         {{buttonText}}
      </button>
      `,
  styles: ['']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonDisabled: boolean;
  @Input() buttonColor: string;
  @Input() buttonLink: string;
  constructor() {}

  ngOnInit() {}
}
