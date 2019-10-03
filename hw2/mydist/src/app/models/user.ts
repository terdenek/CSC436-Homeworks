import { Messages } from "./messages";

export class User {
    name: string;
    createdDate: string;
    isDeleted: boolean;
    messages: Messages;

    constructor(name: string) {
        this.name = name;
        this.createdDate = Date.now().toString();
    }
}
