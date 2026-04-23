import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-info-block',
  imports: [NgClass],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.scss',
})
export class InfoBlockComponent {
  @Input() variant: 'green' | 'white' = 'white';
}
