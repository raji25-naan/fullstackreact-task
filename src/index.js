import React from 'react';
import ReactDOM from 'react-dom';
import App from './Info/App'
//import reportWebVitals from './reportWebVitals';

function MyApp (){
  return (
    <h1>hai</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
