import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { NAV_ITEMS } from '../../navigation/nav-items';

@Component({
  selector: 'app-ecofarm-header',
  imports: [MatToolbarModule, RouterModule, MatButtonModule, MatIconModule, CommonModule, MatListModule, MatSidenavModule],
  templateUrl: './ecofarm-header.component.html',
  styleUrl: './ecofarm-header.component.scss',
})
export class EcofarmHeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  readonly navItems = NAV_ITEMS;

  onMenuClick() {
    this.menuToggle.emit();
  }
}
