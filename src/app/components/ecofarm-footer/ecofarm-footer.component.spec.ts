import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcofarmFooterComponent } from './ecofarm-footer.component';

describe('EcofarmFooterComponent', () => {
  let component: EcofarmFooterComponent;
  let fixture: ComponentFixture<EcofarmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcofarmFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcofarmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
