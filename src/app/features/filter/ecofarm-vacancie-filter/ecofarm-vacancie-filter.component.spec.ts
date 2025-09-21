import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcofarmVacancieFilterComponent } from './ecofarm-vacancie-filter.component';

describe('EcofarmGeneralFilterComponent', () => {
  let component: EcofarmVacancieFilterComponent;
  let fixture: ComponentFixture<EcofarmVacancieFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcofarmVacancieFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcofarmVacancieFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
