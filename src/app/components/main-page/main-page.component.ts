import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageHeadlineComponent } from '../../shared/ui/page-headline/page-headline.component';
import { InfoBlockComponent } from '../../shared/ui/info-block/info-block.component';

@Component({
  selector: 'app-main-page',
  imports: [MatButtonModule, RouterModule, PageHeadlineComponent, InfoBlockComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
