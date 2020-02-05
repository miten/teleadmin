import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Socket} from 'socket.io';
import { Logger } from '@nestjs/common';
const logger = new Logger();

@WebSocketGateway()
export class LivestreamGateway {
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
      logger.log(message);
      return await  client.broadcast.in(message._id).emit('conversation private post', {
      message: message,
      chatroom: message._id,
    });
  }

}
