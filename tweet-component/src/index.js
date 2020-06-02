import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Tweet({tweet}){
    return(
        <div className = 'tweet' >
            <Avatar hash = {tweet.gravatar}/>
            <div className = 'content'>
                <Author author = {tweet.author}/>
                <Time time = {tweet.timeStamp}/>
                <Message text = {tweet.message}/>
                <div className = 'buttons'>
                    <ReplyButton/>
                    <ReTweetButton count = {tweet.retweets}/>
                    <LikeButton count = {tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )
}

const ReplyButton = () => (
    <button className = 'reply-button button' >reply</button>
)
function getRetweetCount(count){
    if(count > 0){
        return <span className='retweet-count'>{count}</span>
    }
    return null;
}
const ReTweetButton = ({count}) => (

   <span className = 'retweet-button'>
        <button className = 'button' >retweet</button>
        {getRetweetCount(count)}
    </span>
)
const LikeButton = ({count}) => (
    <span className = 'like-button'>
        <button className = 'button' >like</button>
        {count > 0 && <span className='like-count'>{count}</span>}
    </span>
)
const MoreOptionsButton = () => (
    <button className = 'more-options-button button' >more...</button>
)
function Message({text}){
    return <div className = 'message'>{text}</div>
}
function Time({time}){
    return <span className = 'time'>{time}</span>
}

function Author({author}){
    return(
        <span className = 'author'>
            <span className = 'name'>{author.name}</span>
            <span className = 'handle'>{author.handle}</span>
        </span>
    )
}
function Avatar({hash}){
    return(
        <img
        alt = 'avatar'
        className = 'avatar'
        src = {`https://www.gravatar.com/avatar/${hash}`} />
    )
}

const data = {
    message: 'a tweet about learing react',
    gravatar: 'e62685a54f531f03e0db79714b901d7c',
    author: {
        name: 'Nirmala Halappa',
        handle: '@nhalappa'
    },
    likes: 25,
    retweets: 0,
    timeStamp: Date()
}

ReactDom.render(
    <Tweet tweet={data}/>,
    document.querySelector('#root')
);