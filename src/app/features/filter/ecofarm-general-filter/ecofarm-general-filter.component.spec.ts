import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcofarmGeneralFilterComponent } from './ecofarm-general-filter.component';

describe('EcofarmGeneralFilterComponent', () => {
  let component: EcofarmGeneralFilterComponent;
  let fixture: ComponentFixture<EcofarmGeneralFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcofarmGeneralFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcofarmGeneralFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
