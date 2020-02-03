import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection,
          OnGatewayDisconnect, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { SessionService } from './session.service';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  logger = new Logger();
  constructor(private sessionService: SessionService) {}


  @WebSocketServer() server;
  users: number = 0;

  async handleConnection() {

    // A client has connected
    this.users++;

    // Notify connected clients of current users
    this.server.emit('users', this.users);

  }

  async handleDisconnect() {

    // A client has disconnected
    this.users--;

    // Notify connected clients of current users
    this.server.emit('users', this.users);

  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string ) {
    this.logger.log('connected to' + room);
    client.join(room);
    client.emit('joinedRoom', room);
  }

}
