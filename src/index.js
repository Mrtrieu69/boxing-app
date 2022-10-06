import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from './components';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <GlobalStyles>
        <Router>
            <App />
        </Router>
    </GlobalStyles>,
    document.getElementById('root'),
);
