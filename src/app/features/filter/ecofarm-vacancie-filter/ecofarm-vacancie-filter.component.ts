import { UAREGIONS } from './../../../services/ua-regions-repository.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { POSITIONS } from '../../../services/positions-repository.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ecofarm-vacancie-filter',
  imports: [
    MatAutocompleteModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './ecofarm-vacancie-filter.component.html',
  styleUrl: './ecofarm-vacancie-filter.component.scss',
})
export class EcofarmVacancieFilterComponent implements OnInit {
  // todo separate model for eventEmiiters so it returns 1 object with specialized fields for filtering
  // to remove all outputs
  @Output() filterCityChange = new EventEmitter<string>();
  @Output() filterRoleChange = new EventEmitter<string>();

  regions!: string[];
  positions!: string[];

  filterForm!: FormGroup;

  filteredCities!: Observable<string[]>;
  filteredRoles!: Observable<string[]>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      city: this.formBuilder.control(''),
      role: this.formBuilder.control(''),
    });

    this.regions = [...UAREGIONS];
    this.positions = [...POSITIONS];

    this.filteredCities = this.filterForm.controls['city'].valueChanges.pipe(
      startWith(''),
      map((v) => {
        this.filterCityChange.emit(v);
        return this._filterRegions(v || '');
      }),
      debounceTime(300)
    );

    this.filteredRoles = this.filterForm.controls['role'].valueChanges.pipe(
      startWith(''),
      map((v) => {
        this.filterRoleChange.emit(v);
        return this._filterPositions(v || '');
      }),
      debounceTime(300)
    );
  }

  private _filterRegions(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.regions.filter((option) =>
      option.toLowerCase().startsWith(filterValue)
    );
  }

  private _filterPositions(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.positions.filter((option) =>
      option.toLowerCase().startsWith(filterValue)
    );
  }
}
