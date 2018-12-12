import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualKeyboardAngularComponent } from './virtual-keyboard-angular.component';

describe('VirtualKeyboardAngularComponent', () => {
  let component: VirtualKeyboardAngularComponent;
  let fixture: ComponentFixture<VirtualKeyboardAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualKeyboardAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualKeyboardAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
