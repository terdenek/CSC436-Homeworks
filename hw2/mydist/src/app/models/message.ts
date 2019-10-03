import { User } from "./user";

export class Message {
    id: number;
    content: string;
    from: User;
    to: User;
    timestamp: string;

    constructor(id: number, content: string, from: User, to: User) {
        this.timestamp = Date.now().toString();
        this.id = id;
        this.content = content;
        this.from = from;
        this.to = to;
    }
}
