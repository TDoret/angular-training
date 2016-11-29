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
import { ApiService } from '../services/api.service';
import { Configuration } from '../app.constants';
export var UserslistApiComponent = (function () {
    function UserslistApiComponent(apiServiceInstance) {
        this.apiServiceInstance = apiServiceInstance;
    }
    UserslistApiComponent.prototype.getAllItems = function () {
        var _this = this;
        this.apiServiceInstance
            .GetAll()
            .subscribe(function (data) { return _this.usersApiJson = data; }, function (error) { return console.log(error); }, function () { return console.log('get All Items complete', _this.usersApiJson); });
    };
    UserslistApiComponent.prototype.getOneItems = function (idToFind) {
        var _this = this;
        this.apiServiceInstance
            .GetSingleById(idToFind)
            .subscribe(function (data) { return _this.userApiJson = data; }, function (error) { return console.log(error); }, function () { return console.log('get One Items complete ', _this.userApiJson); });
    };
    UserslistApiComponent.prototype.ngOnInit = function () {
        this.getAllItems();
    };
    UserslistApiComponent.prototype.onSelect = function (id) {
        this.getOneItems(id);
    };
    UserslistApiComponent = __decorate([
        Component({
            selector: 'app-userslist-api',
            templateUrl: './userslist-api.component.html',
            styleUrls: ['./userslist-api.component.css'],
            providers: [ApiService, Configuration]
        }), 
        __metadata('design:paramtypes', [ApiService])
    ], UserslistApiComponent);
    return UserslistApiComponent;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/userslist-api/userslist-api.component.js.map