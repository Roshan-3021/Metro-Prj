import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackaquametroComComponent } from './trackaquametro-com.component';

describe('TrackaquametroComComponent', () => {
  let component: TrackaquametroComComponent;
  let fixture: ComponentFixture<TrackaquametroComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackaquametroComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackaquametroComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
