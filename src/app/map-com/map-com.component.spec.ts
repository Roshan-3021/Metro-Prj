import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComComponent } from './map-com.component';

describe('MapComComponent', () => {
  let component: MapComComponent;
  let fixture: ComponentFixture<MapComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
