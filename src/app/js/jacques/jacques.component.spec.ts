import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacquesComponent } from './jacques.component';

describe('JacquesComponent', () => {
  let component: JacquesComponent;
  let fixture: ComponentFixture<JacquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
