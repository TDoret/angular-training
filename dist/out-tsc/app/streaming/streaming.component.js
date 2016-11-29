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
import { StreamingService } from '../services/streaming.service';
import { Configuration } from '../app.constants';
export var StreamingComponent = (function () {
    function StreamingComponent(streamingServiceInstance) {
        this.streamingServiceInstance = streamingServiceInstance;
    }
    StreamingComponent.prototype.getStreaming = function (usernameToFind) {
        var _this = this;
        this.streamingServiceInstance
            .refresh(usernameToFind)
            .subscribe(function (val) { return _this.val = val; }, function (error) { return console.log(error); }, //this.errorMessage = <any>error,
        function () { return console.log('get streaming twitch complete'); });
    };
    StreamingComponent.prototype.findStreamer = function (username) {
        this.getStreaming(username);
    };
    StreamingComponent.prototype.ngOnInit = function () {
    };
    StreamingComponent = __decorate([
        Component({
            selector: 'app-streaming',
            templateUrl: 'streaming.component.html',
            styleUrls: ['streaming.component.css'],
            providers: [StreamingService, Configuration]
        }), 
        __metadata('design:paramtypes', [StreamingService])
    ], StreamingComponent);
    return StreamingComponent;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/streaming/streaming.component.js.map