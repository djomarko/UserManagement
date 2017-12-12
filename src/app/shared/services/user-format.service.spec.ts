import { TestBed, inject } from '@angular/core/testing';

import { UserFormatService } from './user-format.service';

import { RestUser } from '../models/rest-user';
import { UserData } from '../models/user-data';

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
    it('should not accept null objects', () => {
      expect(service.format(null)).toBeFalsy();
      expect(service.format(undefined)).toBeFalsy();
    });
    it('should format ad user', () => {
      const joc = jasmine.objectContaining;
      const adUser = require('./../stubs/adUser.json');
        const user = <UserData> service.format(<RestUser>adUser);

        expect(user).toEqual(joc({
          name: 'gavin.lai',
          uid: 'gavin.lai',
          defaultGroup: 'bg-intranet'
        }));
        // @ts-ignore
        expect(user.groups).toEqual(jasmine.arrayContaining(['bg-intranet', 'sp-landcare']));

        expect(user.attributes).toEqual(joc({
          active: true,
          mobile: '+64 27 444 4127'
        }));
        expect(user.business_category).toEqual(joc({
          bi: '200,ALL,ALL,BSPG,ALL,ALL,ALL,ALL',
          jm_businesses: ''
        }));
    });
  });
  describe('parse()', () => {
    it('should not accept null objects', () => {
      expect(service.parse(null)).toBeFalsy();
      expect(service.parse(undefined)).toBeFalsy();
    });
  });
});
