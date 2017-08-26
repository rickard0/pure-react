import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const CardView = ({cards}) =>
  <div className="card-container">
    <Card card="" />
    <Card card="" />
    <Card card="" />
    <Card card="" />
    <div className="clear">&nbsp;</div>
  </div>;

const Card = ({card}) =>
  <div className="card">
    <div className="card-header">Header</div>
    <div className="card-subtitle">Subtitle</div>
    <div className="card-image-main">
      <img src="images/diy.jpg" />
      <div className="pins-overlay-container">
        <div className="pins-overlay">
          <i className="fa fa-thumb-tack" aria-hidden="true" />
          <span className="pins-count"> 4,850</span>
        </div>
      </div>
      <div className="clear">&nbsp;</div>
    </div>
    <div className="card-image-small">
      <img src="" />
    </div>
    <div className="card-image-small">
      <img src="" />
    </div>
    <div className="card-image-small">
      <img src="" />
    </div>
    <button type="button" className="follow-button">
      Follow
    </button>
  </div>;

ReactDOM.render(<CardView />, document.getElementById('root'));
