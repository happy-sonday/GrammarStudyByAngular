import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageGridComponent } from './mypage-grid.component';

describe('MypageGridComponent', () => {
  let component: MypageGridComponent;
  let fixture: ComponentFixture<MypageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypageGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
