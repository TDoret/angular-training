import { Component, OnInit } from '@angular/core';
import { UserApi } from '../models/user-api';
import { ApiService } from '../services/api.service';
import { Http, HttpModule } from "@angular/Http";
import { Configuration } from '../app.constants';

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.css'],
  providers: [ ApiService, Configuration ]
})
export class UserFinderComponent implements OnInit {
  usersApiJson: String;
  userApiJson: String;

  constructor(private apiServiceInstance: ApiService) { }

  private getOneItems(usernameToFind: String): void {
    this.apiServiceInstance
      .GetSingleByUsername(usernameToFind)
      .subscribe(
        data => this.userApiJson = data,
        error => console.log(error),
        () => console.log('get One Items complete ',this.userApiJson),
      );
  }

  ngOnInit() {
  }

  findUser(username: String): void {
    this.getOneItems(username);
  }
}
