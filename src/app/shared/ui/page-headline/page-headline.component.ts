import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page-headline',
  imports: [NgIf],
  templateUrl: './page-headline.component.html',
  styleUrl: './page-headline.component.scss',
})
export class PageHeadlineComponent {
  @Input() mainText = '';
  @Input() accentText = '';
}
