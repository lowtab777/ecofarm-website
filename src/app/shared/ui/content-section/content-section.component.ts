import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content-section',
  imports: [NgClass],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss',
})
export class ContentSectionComponent {
  @Input() extraClass = '';
}
