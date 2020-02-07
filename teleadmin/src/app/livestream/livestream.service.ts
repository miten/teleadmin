import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivestreamService {


  constructor(private http: HttpClient, private socket: Socket) {}


  call(message: object): Observable<any> {
    return this.socket.emit('call', message);
  }

  connectRoom(chatroomId: string): Observable<any> {
    return this.socket.emit('joinRoom', chatroomId);
  }

  getCall(): Observable<number> {
    return this.socket.fromEvent('privateCall');
  }
}
