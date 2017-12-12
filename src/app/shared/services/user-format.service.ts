import { Injectable } from '@angular/core';
import { RestUser } from '../models/rest-user';
import { UserData } from '../models/user-data';

@Injectable()
export class UserFormatService {

  constructor() { }

  format(rest: RestUser): UserData {
    const user = { ...rest};

    console.log(user);
    // convert attributes


    return user;
  }

  parse(user: UserData): RestUser {

    const rest = { ...user};

    return rest;
  }
}
