import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsComComponent } from './stations-com.component';

describe('StationsComComponent', () => {
  let component: StationsComComponent;
  let fixture: ComponentFixture<StationsComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
