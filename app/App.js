import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers/index';
import App from './components/App';

let store = createStore(todoApp);

console.log(store);
console.log(store.getState());

const Test = ()=>{
    return <p>Hello</p>
}

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
