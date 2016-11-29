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
import { Jsonp } from '@angular/Http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
export var StreamingService = (function () {
    function StreamingService(jsonp) {
        var _this = this;
        this.jsonp = jsonp;
        this.apiBaseUrl = 'https://wind-bow.hyperdev.space/twitch-api/streams/';
        this.user = 'ESL_SC2';
        this.query = '?callback=JSONP_CALLBACK';
        this.refresh = function (username) {
            var apiCall = _this.apiBaseUrl + username /*this.user*/ + _this.query;
            return _this.jsonp.get(apiCall)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return Observable.throw(err.json().err); });
        };
    }
    StreamingService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Jsonp])
    ], StreamingService);
    return StreamingService;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/services/streaming.service.js.map