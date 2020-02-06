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


  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string ) {
    logger.log('connected to' + room);
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('chat')
  async handleEvent(
      @MessageBody() message: any,
      @ConnectedSocket() client: Socket): Promise<any> {
      logger.log(message._id);
      return client.broadcast.in(message._id).emit('private', {
      chatroom: message._id,
    });
  }

}
