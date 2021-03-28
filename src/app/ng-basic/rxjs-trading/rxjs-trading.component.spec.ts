import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTradingComponent } from './rxjs-trading.component';

describe('RxjsTradingComponent', () => {
  let component: RxjsTradingComponent;
  let fixture: ComponentFixture<RxjsTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
