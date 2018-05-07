import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `<a [routerLink]="linkUrl" class="text-purple hover:text-purple-darker no-underline">{{linkText}}</a>`,
  styles: ['']
})
export class LinkComponent implements OnInit {
  @Input() linkUrl: string;
  @Input() linkText: string;
  constructor() {}

  ngOnInit() {}
}
