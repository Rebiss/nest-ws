import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WsResponse,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3023)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() wss: Server;

    private logger: Logger = new Logger('AppGateway');

    handleDisconnect(client: Socket) {
        this.logger.log(`Disconnect action: => ${client.id}`);
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log(`Connection action: => ${client.id}`);
    }

    afterInit(server: Server) {
        this.logger.log(`init: ${server}`);
    }

    @SubscribeMessage('msgToServer')
    handleMessage(client: Socket, text: string): WsResponse<string> {
        console.log(`>>>>>>>SERVER_MSG: ${text}`);
        return { event: `msgToClient`, data: text };
    }
}
