import { OnGatewayInit } from '@nestjs/websockets';
export declare class AppGateway implements OnGatewayInit {
    private logger;
    afterInit(server: any): void;
    handleMessage(client: any, payload: any): string;
}
