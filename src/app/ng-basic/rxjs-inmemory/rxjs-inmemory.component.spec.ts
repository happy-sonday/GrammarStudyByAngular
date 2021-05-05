import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInmemoryComponent } from './rxjs-inmemory.component';

describe('RxjsInmemoryComponent', () => {
  let component: RxjsInmemoryComponent;
  let fixture: ComponentFixture<RxjsInmemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsInmemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsInmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
