import { TestBed, inject } from '@angular/core/testing';

import { UserFormatService } from './user-format.service';

import adUser from '../stubs/adUser.json';

fdescribe('UserFormatService', () => {

  let service: UserFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFormatService]
    });

    service = TestBed.get(UserFormatService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('format()', () => {
    it('should format ad user', () => {
        const user = service.format(adUser);

        expect(user).toEqual(jasmine.objectContaining({
          name: 'gavin.lai'
        }));
    });
  });

});
