import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcofarmVacancyFilterComponent } from './ecofarm-vacancie-filter.component';

describe('EcofarmGeneralFilterComponent', () => {
  let component: EcofarmVacancyFilterComponent;
  let fixture: ComponentFixture<EcofarmVacancyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcofarmVacancyFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcofarmVacancyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
