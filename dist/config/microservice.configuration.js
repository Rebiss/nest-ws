"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microserviceOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.microserviceOptions = {
    transport: microservices_1.Transport.TCP,
    options: {
        host: 'localhost',
        port: 3022,
    },
};
//# sourceMappingURL=microservice.configuration.js.map