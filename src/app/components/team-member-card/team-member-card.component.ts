import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-team-member-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss',
  animations: [
    trigger('toggleDescrtiption', [
      transition(':enter', [
        style({ height: 0, opacity: 1 }), 
        animate('300ms ease-out', style({height: '*', opacity: 1}))]),
      transition(':leave', [
        animate('300ms ease-in', style({height: 0, opacity: 0}))
      ]),
    ]),
  ],
})
export class TeamMemberCardComponent {
  @Input() name!: string;
  @Input() role!: string;
  @Input() description!: string;

  isOpened: boolean = false;

  descrtiptionClicked(): void {
    this.isOpened = !this.isOpened;
  }
}
