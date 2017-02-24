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
import { Observable } from 'rxjs/Observable';
var ChooseDisplayService = (function () {
    function ChooseDisplayService() {
        this.url = 'ws://localhost:5000/boxoffice';
    }
    ChooseDisplayService.prototype.connect = function () {
        console.log("Connected to \"" + this.url + "\"");
    };
    ChooseDisplayService.prototype.disconnect = function () {
        console.log("Disconnected from \"" + this.url + "\"");
    };
    ChooseDisplayService.prototype.error = function (error) {
        console.log("ERROR: \"" + error + "\" (" + this.url + ")");
    };
    ChooseDisplayService.prototype.get_realtime_boxoffice = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on("connect", function () { return _this.connect(); });
            _this.socket.on("disconnect", function () { return _this.disconnect(); });
            _this.socket.on("error", function (error) { return _this.error(error); });
            _this.socket.on('cn_box_office_realtime', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChooseDisplayService.prototype.query_realtime_boxoffice = function () {
        this.socket.emit('cn_box_office_realtime', { 'query': "ok" });
    };
    return ChooseDisplayService;
}());
ChooseDisplayService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ChooseDisplayService);
export { ChooseDisplayService };
//# sourceMappingURL=../../../../src/app/control/choose-display.service.js.map