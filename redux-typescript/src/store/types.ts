export interface Task{
    text: string;
    done: boolean;
}
export interface TaskArr{
    task: Task[];
}
export interface FieldState{
    addNewTask: boolean;
}
export const OPEN_FIELD = 'OPEN_FIELD';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

interface OpenField {
    type: typeof OPEN_FIELD;
    payload: boolean;
}
interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: Task;
}
interface RemoveTask {
    type: typeof REMOVE_TASK;
    payload: Task;
}

export type ActionTypes = OpenField | AddTaskAction | RemoveTask;