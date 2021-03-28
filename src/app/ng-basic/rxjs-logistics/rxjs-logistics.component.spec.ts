import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLogisticsComponent } from './rxjs-logistics.component';

describe('RxjsLogisticsComponent', () => {
  let component: RxjsLogisticsComponent;
  let fixture: ComponentFixture<RxjsLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
