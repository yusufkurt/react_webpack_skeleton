import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import '../css/w.css'

function component() {

    const element = document.createElement('div');
    element.id = 'root';

    return element;
}

document.body.appendChild(component());
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);
