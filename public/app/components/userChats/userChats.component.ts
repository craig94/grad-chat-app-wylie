import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../objects/user";
import { Chat } from "../../objects/chat";
import { Observable } from "rxjs/Rx";
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: "user-chats",
    templateUrl: "templates/user-chats.html",
})
export class UserChats implements OnInit {

    selectedChat: Chat;
    chatsLoaded: boolean;
    @Input()
    user: User;

    constructor(private service: UserService, private router: Router, private chatService: ChatService) {}

    ngOnInit(): void {
        this.getChats();
        this.chatsLoaded = true;
    }

    getChats(): void {
        this.service.getChats(this.user._id).then(
            result => {
                this.chatService.chats = result;
            }
        );
    }

    selectChat(chat: Chat): void {
        this.selectedChat = chat;
    }

    chat(): void {
        let link = ["/chat/", this.selectedChat.chatID];
        this.router.navigate(link);
    }
}
