export class Task {
    id: number;
    name: String;
    dueDate: TaskDueDate;
}

export enum TaskDueDate {
    urgent,
    days,
    week
}
