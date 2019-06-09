import {Task, OPEN_FIELD, ADD_TASK, REMOVE_TASK, ActionTypes} from './types';

export function openField (permission: boolean): ActionTypes{
    return {
        type: OPEN_FIELD,
        payload: permission
    }
}

export function addTask (newTask: Task): ActionTypes{
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export function removeTask (oldTask: Task): ActionTypes{
    return {
        type: REMOVE_TASK,
        payload: oldTask
    }
}