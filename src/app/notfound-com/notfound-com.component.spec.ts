import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComComponent } from './notfound-com.component';

describe('NotfoundComComponent', () => {
  let component: NotfoundComComponent;
  let fixture: ComponentFixture<NotfoundComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
