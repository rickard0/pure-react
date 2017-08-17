import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function App() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal">
        Launch Modal
      </button>
      <Dialog>
        <Title>This Is Important</Title>
        <Body>Here is some important text or error or something</Body>
        <Footer />
      </Dialog>
    </div>
  );
}

function Dialog({children}) {
  console.log('Dialog children:');
  console.log(children);
  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <Title>
              {children[0]}
            </Title>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Body>
            {children[1]}
          </Body>
          <Footer>
            {children[2]}
          </Footer>
        </div>
      </div>
    </div>
  );
}
Dialog.propTypes = { 
	children: PropTypes.element
};

function Title({children}) {
  console.log('Title Children: ');
  console.log(children);
  return (
    <h5 className="modal-title">
      {children.props.children}
    </h5>
  );
}

function Body({children}) {
  return (
    <div className="modal-body">
      <p>
        {children}
      </p>
    </div>
  );
}

function Footer({children}) {
  return (
    <button type="button" className="btn btn-secondary" data-dismiss="modal">
      Close
    </button>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
