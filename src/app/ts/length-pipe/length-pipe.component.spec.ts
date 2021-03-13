import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthPipeComponent } from './length-pipe.component';

describe('LengthPipeComponent', () => {
  let component: LengthPipeComponent;
  let fixture: ComponentFixture<LengthPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
