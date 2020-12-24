import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private logger;
    constructor(appService: AppService);
    accumulation(data: number[]): Promise<import("rxjs").Observable<number>>;
    getHello(): string;
}
