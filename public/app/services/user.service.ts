import { Injectable } from '@angular/core';
import { User } from '../objects/user';
import { Chat } from '../objects/chat';
import { Conversation } from '../objects/conversation';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ChatService } from './chat.service';

@Injectable()
export class UserService {
    constructor (private http: Http, private chatService: ChatService) {}

    private url = "/api/user";
    private uriUrl = "/api/oauth/uri";

    getUser(): Promise<User> {
        return this.http.get(this.url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getUsers(): Promise<User[]> {
        return this.http.get(this.url + "s")
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getUri(): Promise<any> {
        return this.http.get(this.uriUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getOtherUser(id: string): Promise<User> {
        let userUrl = this.url + "/" + id;

        return this.http.get(userUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getChats(userID): Promise<Chat[]> {
        let chatsUrl = "/api/getchats/" + userID;

        return this.http.get(chatsUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    createChat(user: User, selectedUser: User): Promise<any> {
        let chatsUrl = "/api/newchat";
        let body = JSON.stringify({"user": user, "selectedUser": selectedUser});
        let headers = new Headers({"Content-Type": "application/json"});

        return this.http.post(chatsUrl, body, {headers: headers})
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
    }

    getChatDetails(chatID: string): Promise<Conversation> {
        let chatUrl = "/api/chat/" + chatID;

        return this.http.get(chatUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
