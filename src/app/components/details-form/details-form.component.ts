import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../../shared/models/user-data';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  @Input() user: UserData;
  editMode = false;
  passwordUpdateMode = true;

  constructor() {
   }

  ngOnInit() {
    // initalise attibutes in case they don't exist
    this.user = {
      attributes: {},
      ...this.user
    };

    this.editMode = !!this.user.uid;
    this.passwordUpdateMode = !this.user.ad_user;
  }

}
