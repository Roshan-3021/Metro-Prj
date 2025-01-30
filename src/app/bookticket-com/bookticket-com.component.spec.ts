import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketComComponent } from './bookticket-com.component';

describe('BookticketComComponent', () => {
  let component: BookticketComComponent;
  let fixture: ComponentFixture<BookticketComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookticketComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookticketComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
