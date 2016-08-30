import { Injectable, Inject } from '@angular/core';
import { User } from '../objects/user';
import { Chat } from '../objects/chat';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {

    chats: Chat[];

    setChats(chats: Chat[]): void {
        this.chats = chats;
    }
}
