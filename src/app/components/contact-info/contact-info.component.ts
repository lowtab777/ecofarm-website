import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactInterface } from '../../interfaces/contact-interface';

@Component({
  selector: 'app-contact-info',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent implements OnInit {
  @Input() name: string = 'Адреса';
  @Input() contact!: ContactInterface;
  @Output() addressSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {

  }

  selectAddressId(id: number){
    console.log('emited id: ', id);
    this.addressSelected.emit(id);
  }

}
