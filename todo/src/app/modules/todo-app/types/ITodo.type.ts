export type STATUS = "IN_PROGRESS" | "COMPLETED" | "OPEN";

export interface ITodo {
    label: string;
    status: STATUS;
    props: Object
}

export type ITodoList = Array<ITodo>;

export interface IState {
    list: ITodoList
}