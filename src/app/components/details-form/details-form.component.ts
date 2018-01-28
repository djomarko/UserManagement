import { Component, OnInit, Input } from '@angular/core';

import { UserData } from '../../shared/models/user-data';
import * as countryJson from './countries.json';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  @Input() user: UserData;
  editMode = false;
  passwordUpdateMode = true;

  ngOnInit() {
    // initalise attributes in case they don't exist
    this.user = {
      attributes: {
        active: true,
        country: 'New Zealand'
      },
      ...this.user
    };

    this.editMode = !!this.user.uid;
    this.passwordUpdateMode = !this.user.ad_user;
  }

  public get countries() {
    return (<any> countryJson).countries.map(country => country.name);
  }
}
