import { User } from "./user";

export class Message {
    id: number;
    content: string;
    from: User;
    to: User;
    createdDate: string;
}
