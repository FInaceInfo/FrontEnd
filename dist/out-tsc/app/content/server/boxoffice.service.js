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
import 'rxjs/add/operator/toPromise';
import * as io from 'socket.io-client';
var SocketUrl = 'ws://localhost:5000/boxoffice';
var BoxOfficeService = (function () {
    function BoxOfficeService(socket) {
        if (socket === void 0) { socket = io(SocketUrl); }
        var _this = this;
        this.socket = socket;
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("error", function (error) { return _this.error(error); });
        this.socket.on("cn_box_office_realtime", function (data) { return _this.cn_box_office_realtime(data); });
    }
    BoxOfficeService.prototype.connect = function () {
        console.log("Connected to \"" + SocketUrl + "\"");
    };
    BoxOfficeService.prototype.disconnect = function () {
        console.log("Disconnected from \"" + SocketUrl + "\"");
    };
    BoxOfficeService.prototype.error = function (error) {
        console.log("ERROR: \"" + error + "\" (" + SocketUrl + ")");
    };
    BoxOfficeService.prototype.cn_box_office_realtime = function (data) {
        console.log(data);
        this.socket.close();
    };
    BoxOfficeService.prototype.get_realtime_boxoffice = function () {
        this.socket.connect();
        this.socket.emit('cn_box_office_realtime', { 'query': "ok" });
    };
    return BoxOfficeService;
}());
BoxOfficeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Object])
], BoxOfficeService);
export { BoxOfficeService };
//# sourceMappingURL=../../../../../src/app/content/server/boxoffice.service.js.map