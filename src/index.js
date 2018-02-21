import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function updateDate() {
var element= (
  <div>
    Bay gio dang la {new Date().toLocaleTimeString()}
  </div>
);
  ReactDOM.render(element, document.getElementById('root'));
}


setInterval(updateDate,1000);
