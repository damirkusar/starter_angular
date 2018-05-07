import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <div [formGroup]="inputFormGroup">
      <mat-form-field class="w-full">
        <input
        matInput
        [type]="inputType"
        [placeholder]="inputPlaceholder"
        [formGroup]="inputFormGroup"
        [formControlName]="inputFormControl"
        >
      </mat-form-field>
    </div>
      `,
  styles: ['']
})
export class InputComponent implements OnInit {
  @Input() inputType: string;
  @Input() inputPlaceholder: string;
  @Input() inputFormGroup: FormGroup;
  @Input() inputFormControl: AbstractControl;
  constructor() {}

  ngOnInit() {}
}
