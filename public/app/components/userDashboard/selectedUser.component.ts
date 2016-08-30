import { Component, Input } from "@angular/core";
import { User } from "../../objects/user";
import { UserService } from "../../services/user.service";
import { ChatService } from "../../services/chat.service";

@Component({
    selector: "user-detail",
    templateUrl: "templates/user-detail.html",
})
export class SelectedUser {
    @Input()
    user: User;
    @Input()
    selectedUser: User;

    constructor(private service: UserService, private chatService: ChatService) {}

    createChat(): void {
        this.service.createChat(this.user, this.selectedUser).then(
            result => {
                this.service.getChats(this.user._id).then(
                    chats => {
                        this.chatService.chats = chats;
                    }
                );
            }
        ).catch(
            error => error
        );
    }
}
