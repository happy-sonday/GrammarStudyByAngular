import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentCardComponent } from './add-component-card.component';

describe('AddComponentCardComponent', () => {
  let component: AddComponentCardComponent;
  let fixture: ComponentFixture<AddComponentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
