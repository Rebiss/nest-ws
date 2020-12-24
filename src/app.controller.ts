import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  async accumulation(data: number[]) {
    this.logger.log(`Adding ${data.toString()}`);
    return this.appService.add(data);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
