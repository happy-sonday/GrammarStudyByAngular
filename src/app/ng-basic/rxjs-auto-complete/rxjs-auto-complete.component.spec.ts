import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAutoCompleteComponent } from './rxjs-auto-complete.component';

describe('RxjsAutoCompleteComponent', () => {
  let component: RxjsAutoCompleteComponent;
  let fixture: ComponentFixture<RxjsAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
