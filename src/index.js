import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store/index';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

ReactDOM.render(
    (
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    ), 
document.getElementById('root')
);

serviceWorker.unregister();//开发时

// serviceWorker.register(); //生产发布时
