import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackmetroComComponent } from './trackmetro-com.component';

describe('TrackmetroComComponent', () => {
  let component: TrackmetroComComponent;
  let fixture: ComponentFixture<TrackmetroComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackmetroComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackmetroComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
