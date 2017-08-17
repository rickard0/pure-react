import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './time';
import './index.css';

const FileList = ({files}) =>
  <table className="file-list">
    <tbody>
      {files.map(file => <FileListItem key={file.id} file={file} />)}
    </tbody>
  </table>;
FileList.propTypes = {
  files: PropTypes.array,
};

const FileListItem = ({file}) =>
  <tr className="file-list-item">
    <td className="file-name">
      <FileName file={file} />
    </td>
    <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>;
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

function FileName({file}) {
  return (
    <span>
      <FileIcon file={file} />&nbsp;{file.name}
    </span>
  );
}

function FileIcon({file}) {
  let iconClass = file.type === 'folder' ? 'fa-folder' : 'fa-file-text-o';
  return <i className={`fa ${iconClass}`} aria-hidden="true" />;
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};

const CommitMessage = ({commit}) =>
  <span className="commit-message">
    {commit.message}
  </span>;
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

const testFile = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2017-08-17 08:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2017-08-10 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2017-08-02 21:24:00',
    latestCommit: {
      message: 'Added a readme',
    },
  },
];

ReactDOM.render(<FileList files={testFile} />, document.getElementById('root'));
