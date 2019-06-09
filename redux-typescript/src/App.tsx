import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Redux from "redux";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import {reducers} from './store/index';
import { openField, addTask, removeTask} from './store/actions';
import {StateType} from './store/index';
import {State} from './store/types';
import {connect} from "react-redux";
import ReactDOM from "react-dom";

const mapStateToProps = (state: StateType) =>({
    appReducer: state.appReducer,
    taskReducer: state.taskReducer
});

const store = Redux.createStore(reducers);

interface AppProps {
    state: State;
    openField: typeof openField;
    addTask: typeof addTask;
    removeTask: typeof removeTask;
}
class App extends React.Component/*<AppProps, {}>*/{

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}
export function run(){
/*    const AppStore: AppProps = {
        state: {appReducer: state.appReducer,
        taskReducer: state.taskReducer},
        openField,
        addTask,
        removeTask
    }*/
    ReactDOM.render(
        <Provider store={store}>
            {console.log(store.getState())}
            <h1>Provider works</h1>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}
//ReactDOM.render(<App />, document.getElementById('root'));

//connect(mapStateToProps)(App);

