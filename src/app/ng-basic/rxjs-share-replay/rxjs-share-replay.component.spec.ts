import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsShareReplayComponent } from './rxjs-share-replay.component';

describe('RxjsShareReplayComponent', () => {
  let component: RxjsShareReplayComponent;
  let fixture: ComponentFixture<RxjsShareReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsShareReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsShareReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
