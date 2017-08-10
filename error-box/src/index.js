import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox({children}) {
  return (
    <div id="container" className="alert alert-danger" role="alert">
      <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true" />
      <div className="warning-text">
        {children}
      </div>
    </div>
  );
}

ReactDOM.render(
  <ErrorBox>The pie is all gone</ErrorBox>,
  document.getElementById('root'),
);
