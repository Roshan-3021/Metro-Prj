import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComComponent } from './services-com.component';

describe('ServicesComComponent', () => {
  let component: ServicesComComponent;
  let fixture: ComponentFixture<ServicesComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
