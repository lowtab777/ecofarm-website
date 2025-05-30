import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-info',
  imports: [MatIconModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent implements OnInit {
  @Input() name: string = 'Адреса';
  @Input() address!: string;
  @Input() phoneNumber!: string;

  contactForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      adress: [''],
      phoneNumber: ['']
    });
  }

}
