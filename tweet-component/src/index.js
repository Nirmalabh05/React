import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Tweet } from './Tweet';

const data = {
    message: 'a tweet about learing react',
    gravatar: 'e62685a54f531f03e0db79714b901d7c',
    author: {
        name: 'Nirmala Halappa',
        handle: '@nhalappa'
    },
    likes: 25,
    retweets: 0,
    timeStamp: '3hrs ago'
}

ReactDom.render(
    <Tweet tweet={data}/>,
    document.querySelector('#root')
);