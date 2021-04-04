import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDoorComponent } from './three-door.component';

describe('ThreeDoorComponent', () => {
  let component: ThreeDoorComponent;
  let fixture: ComponentFixture<ThreeDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
