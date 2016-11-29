import { Component, OnInit } from '@angular/core';
import { UserApi } from '../models/user-api';
import { ApiService } from '../services/api.service';
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
  userApiJson: String;


  constructor(private apiServiceInstance: ApiService) { }

  private getAllItems(): void {
    this.apiServiceInstance
      .GetAll()
      .subscribe(
        data => this.usersApiJson = data,
        error => console.log(error),
        () => console.log('get All Items complete',this.usersApiJson)
      );
  }

  private getOneItems(idToFind: String): void {
    this.apiServiceInstance
      .GetSingleById(idToFind)
      .subscribe(
        data => this.userApiJson = data,
        error => console.log(error),
        () => console.log('get One Items complete ',this.userApiJson),
      );
  }


  ngOnInit() {
    this.getAllItems();
  }

  onSelect(id: String): void {
    this.getOneItems(id);
  }
}
