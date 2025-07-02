import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-news-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() title = '';
  @Input() description = `Sunlight filtered through the forest canopy, creating a dynamic
        interplay of light and shadow that influences local microclimates. This
        dappled illumination affects photosynthetic activity and regulates
        understory vegetation growth. Combined with ambient humidity and soil
        composition, these factors form a complex ecological system supporting
        biodiversity and nutrient cycling within temperate woodland
        environments.`;
}
