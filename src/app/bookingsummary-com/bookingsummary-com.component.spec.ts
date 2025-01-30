import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsummaryComComponent } from './bookingsummary-com.component';

describe('BookingsummaryComComponent', () => {
  let component: BookingsummaryComComponent;
  let fixture: ComponentFixture<BookingsummaryComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsummaryComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsummaryComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
