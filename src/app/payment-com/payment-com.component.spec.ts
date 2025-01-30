import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComComponent } from './payment-com.component';

describe('PaymentComComponent', () => {
  let component: PaymentComComponent;
  let fixture: ComponentFixture<PaymentComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
