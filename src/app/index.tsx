import React from 'react';
<<<<<<< HEAD
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { App } from './App';
import { } from 'dotenv'


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><App /></Provider>);

=======
import ReactDOM from 'react-dom/client';
import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
>>>>>>> 08c08570ff38da3501e1efa9e049cc8ec2f39802
