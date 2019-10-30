export class Task {
    id: number;
    name: String;
    dueDate: TaskDueDate;
}

export enum TaskDueDate {
    urgent = "Urgent",
    days = "Days",
    Week = "Week"
}
