"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const microservice_configuration_1 = require("./config/microservice.configuration");
const logger = new common_2.Logger('AppService');
let AppService = class AppService {
    costructor() {
        this.client = microservices_1.ClientProxyFactory.create(microservice_configuration_1.microserviceOptions);
    }
    getHello() {
        return 'Hello Nest js ';
    }
    postAcumulete(data) {
        return (data || []).reduce((a, b) => a + b);
    }
    add(data) {
        return this.client.send('add', data);
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map