import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');
const microserviceOptions = {
    transport: Transport.TCP,
    options: {
        host: 'redis:/localhost:6379',
    },
};

const bootstrap = async () => {
    const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
    app.listen(() => {
        logger.log('Microservice Lissen ,,,,');
    });
};

// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     await app.listen(3022);
// }
bootstrap();
