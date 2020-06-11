import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import './index.css';

const FileList = ({files}) => (
    <table className = 'file-list'>
        <tbody>{files.map(file => (
            <FileListItem file={file} key={file.id}/>
        ))}</tbody>
    </table>
);

const FileListItem = ({file}) => (
    <tr className = 'file-list-item'>
        <FileName file = {file}/>
        <CommitMessage commit = {file.latestCommit} />
        <td className = 'age'>
            <Time time = {file.updated_at} />
        </td>
    </tr>
)

const CommitMessage = ({commit}) => (
    <td className = 'commit-message'>{commit.message}</td>
)

const Time = ({time}) => {
   const timeString = moment(time).fromNow();
    return <span className = 'time'>{timeString}</span>

}

const FileName = ({file}) => (
    <>
        <td className = 'file-icon'><FileIcon file={file}/></td>
        <td className = 'file-name'>{file.name}</td>
    </>
)

const FileIcon = ({file}) => {
    let icon;
    switch(file.type){
        case 'folder':
            icon = 'fa-folder'
            break;
        default:
            icon = 'fa-file-text-o'
    }
    return(
        <i className = {`fa ${icon}`}/>
    )
}

const data = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: '2016-04-25 21:15:00',
        latestCommit: {
            message: 'initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: '2019-06-03 09:00:00',
        latestCommit: {
            message: 'initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'text',
        updated_at: '2020-04-25 09:00:00',
        latestCommit: {
            message: 'added readme'
        }
    }
]

ReactDom.render(
    <FileList files={data}/>,
    document.getElementById('root')
)