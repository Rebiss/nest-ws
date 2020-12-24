import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy } from '@nestjs/microservices';
import { microserviceOptions } from './config/microservice.configuration';

const logger = new Logger('AppService');
@Injectable()
export class AppService {
  private client: ClientProxy;

  costructor() {
    this.client = ClientProxyFactory.create(microserviceOptions);
  }

  public getHello(): string {
    return 'Hello Nest js ';
  }

  public postAcumulete(data: number[]): number {
    return (data || []).reduce((a: number, b: number) => a + b);
  }

  public add(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}
