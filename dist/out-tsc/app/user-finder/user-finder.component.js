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
export var UserFinderComponent = (function () {
    function UserFinderComponent(apiServiceInstance) {
        this.apiServiceInstance = apiServiceInstance;
    }
    UserFinderComponent.prototype.getOneItems = function (usernameToFind) {
        var _this = this;
        this.apiServiceInstance
            .GetSingleByUsername(usernameToFind)
            .subscribe(function (data) { return _this.userApiJson = data; }, function (error) { return console.log(error); }, function () { return console.log('get One Items complete ', _this.userApiJson); });
    };
    UserFinderComponent.prototype.ngOnInit = function () {
    };
    UserFinderComponent.prototype.findUser = function (username) {
        this.getOneItems(username);
    };
    UserFinderComponent = __decorate([
        Component({
            selector: 'app-user-finder',
            templateUrl: './user-finder.component.html',
            styleUrls: ['./user-finder.component.css'],
            providers: [ApiService, Configuration]
        }), 
        __metadata('design:paramtypes', [ApiService])
    ], UserFinderComponent);
    return UserFinderComponent;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/user-finder/user-finder.component.js.map