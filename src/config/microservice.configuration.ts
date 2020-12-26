import { Transport, ClientOptions } from '@nestjs/microservices';

export const microserviceOptions: ClientOptions = {
    transport: Transport.TCP,
    options: {
        host: 'localhost',
        port: 3022,
    },
};
