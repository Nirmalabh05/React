import React from 'react';

export const ReplyButton = () => (
    <i className='fa fa-reply button' />
)
function getRetweetCount(count){
    if(count > 0){
        return <span className='retweet-count'>{count}</span>
    }
    return null;
}
export const ReTweetButton = ({count}) => (

   <span className = 'retweet-button button'>
        <i className='fa fa-retweet' />
        {getRetweetCount(count)}
    </span>
)
export const LikeButton = ({count}) => (
    <span className = 'like-button button'>
        <i className='fa fa-heart' />
        {count > 0 && <span className='like-count'>{count}</span>}
    </span>
)
export const MoreOptionsButton = () => (
    <i className='fa fa-ellipsis-h button' />
)