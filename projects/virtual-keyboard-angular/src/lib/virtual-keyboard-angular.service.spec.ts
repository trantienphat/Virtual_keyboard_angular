import { TestBed } from '@angular/core/testing';

import { VirtualKeyboardAngularService } from './virtual-keyboard-angular.service';

describe('VirtualKeyboardAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirtualKeyboardAngularService = TestBed.get(VirtualKeyboardAngularService);
    expect(service).toBeTruthy();
  });
});
