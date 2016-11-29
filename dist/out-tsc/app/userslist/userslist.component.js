var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
export var UserslistComponent = (function () {
    function UserslistComponent(userServiceInstance) {
        this.userServiceInstance = userServiceInstance;
    }
    UserslistComponent.prototype.getUsers = function () {
        var _this = this;
        this.userServiceInstance.getUsers().then(function (users) { return _this.users = users; });
    };
    UserslistComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserslistComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
        console.log(user.id);
    };
    UserslistComponent = __decorate([
        Component({
            selector: 'app-userslist',
            templateUrl: './userslist.component.html',
            styleUrls: ['./userslist.component.css'],
            providers: [UserService]
        }), 
        __metadata('design:paramtypes', [UserService])
    ], UserslistComponent);
    return UserslistComponent;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/userslist/userslist.component.js.map