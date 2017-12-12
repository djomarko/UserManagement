import { Injectable } from '@angular/core';
import { RestUser } from '../models/rest-user';
import { UserData } from '../models/user-data';

@Injectable()
export class UserFormatService {

  constructor() { }

  format(rest: RestUser|any): UserData|any {
    if (!rest) {
      return undefined;
    }
    const user = {
      attributes: {},
      business_category: {},
      ...rest
    };

    // convert the attributes
    if (rest.attributes && rest.attributes.property) {
      rest.attributes.property
        .forEach(element => {
          user.attributes[element.name] = element.value;
        });
    }

    user.attributes.active = user.attributes.active !== 'false';

    // convert business categories
    if (rest.business_category && rest.business_category.property) {
      rest.business_category.property
        .forEach(element => {
          user.business_category[element.name.toLowerCase()] = element.value.replace(`${element.name}=`, '') ;
        });
    }
    return user;
  }

  parse(user: UserData|any): RestUser|any {

    if (!user) {
      return null;
    }

    const rest = {
      attributes: {},
      ...user
    };


    rest.attributes.active = rest.attributes.active ? '' : 'false';

    rest.attributes.forEach((item) => {
      rest.attributes.property = {name: item};
    });

    return rest;
  }
}
