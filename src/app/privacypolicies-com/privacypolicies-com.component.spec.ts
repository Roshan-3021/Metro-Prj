import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypoliciesComComponent } from './privacypolicies-com.component';

describe('PrivacypoliciesComComponent', () => {
  let component: PrivacypoliciesComComponent;
  let fixture: ComponentFixture<PrivacypoliciesComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacypoliciesComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacypoliciesComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
