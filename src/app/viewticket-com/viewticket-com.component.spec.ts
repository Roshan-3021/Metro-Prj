import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewticketComComponent } from './viewticket-com.component';

describe('ViewticketComComponent', () => {
  let component: ViewticketComComponent;
  let fixture: ComponentFixture<ViewticketComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewticketComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewticketComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
