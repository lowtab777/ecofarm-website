import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team-page',
  imports: [CommonModule, TeamMemberCardComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss',
})
export class TeamPageComponent implements OnInit {
  ngOnInit(): void {
    this.tempDescription = `Очолює команду ТОВ "ФК "Екофарм" з моменту її заснування. Має стратегічне бачення розвитку фармацевтичного ринку в Україні з акцентом на натуральні терапії, легальне застосування канабіноїдів та новий формат аптечного виробництва.
      Антон Володимирович ініціював створення мережі виробничих аптек, які виготовляють лікарські засоби індивідуального приготування на основі канабісу — відповідно до чинного законодавства та міжнародних стандартів якості.
      Його підхід поєднує високий рівень соціальної відповідальності, інвестиційну прозорість і глибоке розуміння фармацевтичних процесів.`;
  }
  tempDescription!: string;
}
