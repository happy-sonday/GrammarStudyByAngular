import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMainComponent } from './interactive-main.component';

describe('InteractiveMainComponent', () => {
  let component: InteractiveMainComponent;
  let fixture: ComponentFixture<InteractiveMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
