import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationschildComComponent } from './stationschild-com.component';

describe('StationschildComComponent', () => {
  let component: StationschildComComponent;
  let fixture: ComponentFixture<StationschildComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationschildComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationschildComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
