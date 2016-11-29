var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/Http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
export var ApiService = (function () {
    function ApiService(_http, _configuration) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.GetAll = function () {
            console.log(_this.actionUrl);
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.GetSingleById = function (id) {
            console.log(_this.actionUrl + id + '/getUserById');
            return _this._http.get(_this.actionUrl + id + '/getUserById')
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.GetSingleByUsername = function (username) {
            console.log(_this.actionUrl + username + '/getUserByUsername');
            return _this._http.get(_this.actionUrl + username + '/getUserByUsername')
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.actionUrl = _configuration.ServerWithApiUrl + 'users/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    /*
      public Add = (itemName: string): Observable<UserApi> => {
        let toAdd = JSON.stringify({ ItemName: itemName });
    
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
          .map((response: Response) => <UserApi>response.json())
          .catch(this.handleError);
      }
    
      public Update = (id: number, itemToUpdate: UserApi): Observable<UserApi> => {
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
          .map((response: Response) => <UserApi>response.json())
          .catch(this.handleError);
      }
    
      public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
          .catch(this.handleError);
      }*/
    ApiService.prototype.handleError = function (error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
    ApiService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, Configuration])
    ], ApiService);
    return ApiService;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/services/api.service.js.map