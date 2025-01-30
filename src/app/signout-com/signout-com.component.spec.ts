import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutComComponent } from './signout-com.component';

describe('SignoutComComponent', () => {
  let component: SignoutComComponent;
  let fixture: ComponentFixture<SignoutComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignoutComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignoutComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
