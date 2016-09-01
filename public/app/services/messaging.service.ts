import { Injectable, Inject } from '@angular/core';
import { User } from '../objects/user';
import { Chat } from '../objects/chat';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Rx";
import * as io from  "socket.io-client";

@Injectable()
export class MessagingService {

    private url = "http://localhost:8080";
    private socket;

    sendMsg(msg: string): void {
        this.socket.emit("message", msg);
    }

    getMsgs() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })
        return observable;
    }
}