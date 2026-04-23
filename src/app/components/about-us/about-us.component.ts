import { Component } from '@angular/core';
import { PageHeadlineComponent } from '../../shared/ui/page-headline/page-headline.component';
import { InfoBlockComponent } from '../../shared/ui/info-block/info-block.component';

@Component({
  selector: 'app-about-us',
  imports: [PageHeadlineComponent, InfoBlockComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
