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
export var CounterComponent = (function () {
    function CounterComponent() {
        this.counterValue = 0;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.increment = function () {
        this.counterValue++;
    };
    CounterComponent.prototype.decrement = function () {
        this.counterValue--;
    };
    CounterComponent = __decorate([
        Component({
            selector: 'app-counter',
            templateUrl: './counter.component.html',
            styleUrls: ['./counter.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
//# sourceMappingURL=C:/Users/Thomas/Documents/NodeJsProject/angular-training/src/app/counter/counter.component.js.map