import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})

export class MapComponent implements OnChanges {
  @Input() mapSource!: string;
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){

  }

  ngOnChanges(changes: SimpleChanges): void {
    const url = this.mapSource || this.testSrc;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  testSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.1251266628105!2d24.006553911925515!3d49.81309103940159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae79843a94deb%3A0xd21865a052f1fc0!2z0JzQsNC60JTQvtC90LDQu9GM0LTQtw!5e0!3m2!1suk!2sua!4v1748881804378!5m2!1suk!2sua';
}
