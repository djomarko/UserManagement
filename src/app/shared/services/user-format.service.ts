import { Injectable } from '@angular/core';
import { RestUser } from '../models/rest-user';
import { UserData } from '../models/user-data';

@Injectable()
export class UserFormatService {

  constructor() { }

  format(rest: RestUser|any): UserData|any {
    if (!rest) {
      return {};
    }
    const user = { ...rest};

    // convert the attributes
    if (rest.attributes && rest.attributes.property) {
      rest.attributes.property
        .forEach(element => {
          user[element.name] = element.value;
        });
    }

    user.active = user.active !== 'false';

    // convert business categories
    user.business_category = {};
    if (rest.business_category && rest.business_category.property) {
      rest.business_category.property
        .forEach(element => {
          user.business_category[element.name.toLowerCase()] = element.value.replace(`${element.name}=`, '') ;
        });
    }


    return user;
  }

  parse(user: UserData): RestUser|any {

    const rest = { ...user};

    return rest;
  }
}
