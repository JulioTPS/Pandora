import { Component, inject } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../chat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  userInput: string = "";
  chatList: Chat[] = []
  chatService: ChatService = inject(ChatService);

  constructor() {
    this.chatService.getAllChats().subscribe(chatList => this.chatList = chatList);
  }

  onSubmit(message: string) {
    if (!message) { return; }
    console.log(message);
    this.chatService.postChat(message).subscribe(message => {
      this.chatList.push(message);
    });
  }
}
