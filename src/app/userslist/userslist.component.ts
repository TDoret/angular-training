import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
  providers: [UserService]
})

export class UserslistComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private userServiceInstance: UserService) { }

  getUsers(): void {
    this.userServiceInstance.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log(user.id)
  }
}
