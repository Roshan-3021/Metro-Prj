import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusComComponent } from './aboutus-com.component';

describe('AboutusComComponent', () => {
  let component: AboutusComComponent;
  let fixture: ComponentFixture<AboutusComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
