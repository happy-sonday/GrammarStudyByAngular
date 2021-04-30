import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncComponent } from './fnc.component';

describe('FncComponent', () => {
  let component: FncComponent;
  let fixture: ComponentFixture<FncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
