import { Injectable } from '@angular/core';
import { Messages } from "./models/messages";
import { Message } from "./models/message";
import { User } from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages = new Messages();

  constructor() { }

  messageGeneratify() {
    // create users
    var userBob = new User("Bob");
    var userBobette = new User("Bobette");
    // create messages
    this.messages.messages.push(new Message(1, "Hi, whats up", userBob, userBobette));
    this.messages.messages.push(new Message(2, "Not much, just chilling at home. hbu?", userBobette, userBob));
    this.messages.messages.push(new Message(3, "Haha me too.. planning on maybe cooking dinner", userBob, userBobette));
    this.messages.messages.push(new Message(4, "Did you eat yet? Do you want to go out for dinner together instead? haha", userBob, userBobette));
    this.messages.messages.push(new Message(5, "Seen.", userBobette, userBob));
  }

  getMessages() {
    return this.messages.messages;
  }
}
