import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { CommonModule } from '@angular/common';
import { ContactInterface } from '../../interfaces/contact-interface.model';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactInfoComponent, MapComponent, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements OnInit {
  @ViewChild('mapRef') mapRef!: ElementRef;

  selectedAddressId!: number;

  ngOnInit(): void {
    this.selectedAddressId = this.contactList[0].id;
  }

  scrollToMap(): void {
    console.log('non exis')
    if(this.mapRef){
      console.log('ref')
      this.mapRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  contactList: ContactInterface[] = [
    {
      id: 1,
      address: 'місто Вінниця, вул. Привокзальна буд. 2/1',
      phoneNumber: '+38 (067) 541 29 97',
      mapSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.81276829168004!2d28.50822362568349!3d49.23840781973628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b3e9941d801%3A0xce984d00c1b7fe8!2z0LLRg9C70LjRhtGPINCf0YDQuNCy0L7QutC30LDQu9GM0L3QsCwgMi8xLCDQktGW0L3QvdC40YbRjywg0JLRltC90L3QuNGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAyMTAwMA!5e0!3m2!1suk!2sua!4v1754947920146!5m2!1suk!2sua',
    },
    {
      id: 2,
      address: 'м. Хмельницький, вул. Володимирська, буд. 47',
      phoneNumber: '+38 (067) 243 07 23',
      mapSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.7890548834168!2d26.988332736402516!3d49.4248605176392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732065624e5c1f1%3A0x8138ff36498b4088!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNGB0YzQutCwLCA0Nywg0KXQvNC10LvRjNC90LjRhtGM0LrQuNC5LCDQpdC80LXQu9GM0L3QuNGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAyOTAwMA!5e0!3m2!1suk!2sua!4v1759061315796!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    }
  ];

  handleAddressChange(newId: number){
    this.selectedAddressId = newId;
  }
}
