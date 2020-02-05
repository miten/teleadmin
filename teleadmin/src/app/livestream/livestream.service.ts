import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivestreamService {


  constructor(private http: HttpClient, private socket: Socket) {}


  addMessage(message: any, chatroomId: string): Observable<any> {
    message._id = chatroomId;
    return this.socket.emit('chat', message);
  }

  receiveChat(): Observable<any> {
    return this.socket.fromEvent('chat');
  }

  getUsers(): Observable<number> {
    return this.socket.fromEvent('users');
  }

  connectChatroom(chatroomId: string): Observable<any> {
    return this.socket.emit('joinRoom', chatroomId);
  }

  getMessChatroom(): Observable<number> {
    return this.socket.fromEvent('conversation private post');
  }
}
