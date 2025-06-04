import { Component, OnInit } from '@angular/core';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { CommonModule } from '@angular/common';
import { ContactInterface } from '../../interfaces/contact-interface';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactInfoComponent, MapComponent, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements OnInit {
  selectedAddressId!: number;

  ngOnInit(): void {
    this.selectedAddressId = this.contactList[0].id;
  }

  contactList: ContactInterface[] = [
    {
      id: 1,
      address: 'місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
      mapSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.1251266628105!2d24.006553911925515!3d49.81309103940159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae79843a94deb%3A0xd21865a052f1fc0!2z0JzQsNC60JTQvtC90LDQu9GM0LTQtw!5e0!3m2!1suk!2sua!4v1748881804378!5m2!1suk!2sua',
    },
    {
      id: 2,
      address: 'місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
      mapSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3062031171876!2d-74.04707532272275!3d40.68925343900584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2z0KHRgtCw0YLRg9GPINCh0LLQvtCx0L7QtNC4!5e0!3m2!1suk!2sua!4v1749044618366!5m2!1suk!2sua',
    },
    {
      id: 3,
      address: 'місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
      mapSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.916839991983!2d24.021341397080793!3d49.84402005731751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72f9bc6a89%3A0xf9783fecb4fecf1f!2z0JvRjNCy0ZbQstGB0YzQutCwINCd0LDRhtGW0L7QvdCw0LvRjNC90LAg0J7Qv9C10YDQsA!5e0!3m2!1suk!2sua!4v1749044674596!5m2!1suk!2sua',
    },
    {
      id: 4,
      address:
        '21029, Україна, Вінницький р-н, Вінницька обл., місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
      mapSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.1251266628105!2d24.006553911925515!3d49.81309103940159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae79843a94deb%3A0xd21865a052f1fc0!2z0JzQsNC60JTQvtC90LDQu9GM0LTQtw!5e0!3m2!1suk!2sua!4v1748881804378!5m2!1suk!2sua',
    },
  ];

  handleAddressChange(newId: number){
    this.selectedAddressId = newId;
  }
}
