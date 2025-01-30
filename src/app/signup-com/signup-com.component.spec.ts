import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComComponent } from './signup-com.component';

describe('SignupComComponent', () => {
  let component: SignupComComponent;
  let fixture: ComponentFixture<SignupComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
