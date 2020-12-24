import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public postAcumulete(data: number[]): number {
    return (data || []).reduce((a: number, b: number) => a + b);
  }
}
