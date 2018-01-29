export interface Task{
    title: string;
    description: string;
    start: any;
    complete: any;
    type: string;
    uid: string;
}
export interface Meeting{
    title: string;
    description: string;
    date: any;
    priority: string;
    clients: string;
    uid: string;
}