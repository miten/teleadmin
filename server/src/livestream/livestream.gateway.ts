import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Socket} from 'socket.io';
import { Logger } from '@nestjs/common';
const logger = new Logger();

@WebSocketGateway()
export class LivestreamGateway {

    @WebSocketServer() server;
    users: number = 0;

    async handleConnection() {

        // A client has connected
        this.users++;

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string ) {
    logger.log('connected to' + room);
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('call')
  async handleEvent(
      @MessageBody() message: any,
      @ConnectedSocket() client: Socket): Promise<any> {
      return client.broadcast.in(message.contactId).emit('privateCall', {
      id: message.id,
    });
  }

}
