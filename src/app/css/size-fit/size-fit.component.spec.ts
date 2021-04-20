import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeFitComponent } from './size-fit.component';

describe('SizeFitComponent', () => {
  let component: SizeFitComponent;
  let fixture: ComponentFixture<SizeFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeFitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
