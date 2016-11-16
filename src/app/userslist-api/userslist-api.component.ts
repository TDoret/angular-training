import { Component, OnInit } from '@angular/core';
import { UserApi } from '../models/user-api';
import { ApiService } from '../services/api.service';
import { Http, HttpModule } from "@angular/Http";
import { Configuration } from '../app.constants';

@Component({
  selector: 'app-userslist-api',
  templateUrl: './userslist-api.component.html',
  styleUrls: ['./userslist-api.component.css'],
  providers: [ApiService, Configuration]
})
export class UserslistApiComponent implements OnInit {
  usersApi: UserApi[];
  usersApiJson: String;

  constructor(private apiServiceInstance: ApiService) { }

  private getAllItems(): void {
    this.apiServiceInstance
      .GetAll()
      .subscribe(
        data => this.usersApiJson = data,
        error => console.log(error),
        () => console.log(this.usersApiJson)//console.log('get All Items complete')
      );
  }

  ngOnInit() {
    this.getAllItems();
  }

}
