import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Post('add')
  async accumulation(@Body('data') data: number[]): Promise<number> {
    this.logger.log(`Adding ${data.toString()}`);
    return this.appService.postAcumulete(data);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
