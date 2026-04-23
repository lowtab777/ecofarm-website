import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EcofarmHeaderComponent } from './components/ecofarm-header/ecofarm-header.component';
import { EcofarmFooterComponent } from './components/ecofarm-footer/ecofarm-footer.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS } from './navigation/nav-items';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    EcofarmHeaderComponent,
    EcofarmFooterComponent,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('snav') sideNav!: MatSidenav;
  readonly mobileNavItems = NAV_ITEMS;

  isMobileMenuOpened = false;

  openSidenav() {
    this.isMobileMenuOpened = true;
    this.sideNav.open();
  }

  closeSidenav() {
    this.isMobileMenuOpened = false;
    this.sideNav.close();
  }

  onSidenavToggle(isOpen: boolean) {
    this.isMobileMenuOpened = isOpen;
  }
}
