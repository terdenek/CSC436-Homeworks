import { Component } from '@angular/core';
import {MessagesService} from "./messages.service";
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  messages: Message[] = [];
  constructor(private _messagesService: MessagesService) { }

  ngOnInit() {
    this._messagesService.messageGeneratify();
    this.messages = this._messagesService.getMessages();
    console.log(this.messages);
  }

}
