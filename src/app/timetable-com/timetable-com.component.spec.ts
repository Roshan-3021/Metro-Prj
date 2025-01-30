import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableComComponent } from './timetable-com.component';

describe('TimetableComComponent', () => {
  let component: TimetableComComponent;
  let fixture: ComponentFixture<TimetableComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetableComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
