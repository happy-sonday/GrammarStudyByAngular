import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendsInheritComponent } from './extends-inherit.component';

describe('ExtendsInheritComponent', () => {
  let component: ExtendsInheritComponent;
  let fixture: ComponentFixture<ExtendsInheritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendsInheritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendsInheritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
