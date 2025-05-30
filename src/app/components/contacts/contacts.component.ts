import { Component } from '@angular/core';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { CommonModule } from '@angular/common';
import { ContactInterface } from '../../interfaces/contact-interface';

@Component({
  selector: 'app-contacts',
  imports: [ContactInfoComponent, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contactList: ContactInterface[] = [
    {
      address: 'місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
    },
    {
      address: 'місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
    },
    {
      address: 'місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
    },
    {
      address:
        '21029, Україна, Вінницький р-н, Вінницька обл., місто Вінниця, Хмельницьке шосе, будинок, 114в, офіс, 203-2',
      phoneNumber: '+38 099 00 00 000',
    },
  ];
}
