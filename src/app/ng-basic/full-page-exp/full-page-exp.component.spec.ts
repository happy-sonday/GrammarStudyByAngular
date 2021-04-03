import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageExpComponent } from './full-page-exp.component';

describe('FullPageExpComponent', () => {
  let component: FullPageExpComponent;
  let fixture: ComponentFixture<FullPageExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPageExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
