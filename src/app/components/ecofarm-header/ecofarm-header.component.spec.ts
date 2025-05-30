import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcofarmHeaderComponent } from './ecofarm-header.component';

describe('EcofarmHeaderComponent', () => {
  let component: EcofarmHeaderComponent;
  let fixture: ComponentFixture<EcofarmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcofarmHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcofarmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
