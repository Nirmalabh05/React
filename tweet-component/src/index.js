import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Tweet(){
    return(
        <div className = 'tweet' >
            <Avatar/>
            <div className = 'content'>
                <Author/>
                <Time/>
                <Message/>
                <div className = 'buttons'>
                    <ReplyButton/>
                    <ReTweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )
}

const ReplyButton = () => (
    <button className = 'reply-button button' >reply</button>
)
const ReTweetButton = () => (
    <button className = 'retweet-button button' >retweet</button>
)
const LikeButton = () => (
    <button className = 'like-button button' >like</button>
)
const MoreOptionsButton = () => (
    <button className = 'more-options-button button' >more...</button>
)
function Message(){
    return <div className = 'message'>Something great...</div>
}
function Time(){
    return <span className = 'time'>3hrs ago</span>
}

function Author(){
    return(
        <span className = 'author'>
            <span className = 'name'>Nirmala Halappa</span>
            <span className = 'handle'>@nhalappa</span>
        </span>
    )
}
function Avatar(){
    return(
        <img
        alt = 'avatar'
        className = 'avatar'
        src = 'https://www.gravatar.com/avatar/nothing' />
    )
}

ReactDom.render(
    <Tweet/>,
    document.querySelector('#root')
);