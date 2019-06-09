import {
    Task,
    ActionTypes,
    OPEN_FIELD,
    ADD_TASK,
    REMOVE_TASK,
    FieldState,
    TaskArr
} from './types';
import {booleanLiteral} from "@babel/types";

const initialFieldState: FieldState = {
    addNewTask: false
};

export function appReducer(state = initialFieldState, action: ActionTypes): FieldState {
    switch (action.type) {
        case OPEN_FIELD:
            return {
                addNewTask: true
            };
        default:
            return state
    }
}

const initialTaskState: TaskArr = {
    task: []
};

export function taskReducer(state = initialTaskState, action: ActionTypes): TaskArr{
    switch (action.type) {
        case ADD_TASK:
            return {
                task: [...state.task, action.payload]
            };
        case REMOVE_TASK:
            return {
                task: state.task.filter(
                    task => task.text !== action.payload.text
                )
            };
        default:
            return state
    }
}