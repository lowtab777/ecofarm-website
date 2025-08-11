import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EcofarmHeaderComponent } from './components/ecofarm-header/ecofarm-header.component';
import { EcofarmFooterComponent } from './components/ecofarm-footer/ecofarm-footer.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    EcofarmHeaderComponent,
    EcofarmFooterComponent,
    MatSidenavModule,
    MatListModule,
    NgClass,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('snav') sideNav!: MatSidenav;
  title = 'ecofarm-website';

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
