import React from 'react';
import EmojiList from './EmojiList';


class Emojis extends React.Component {
    render() {
        return this.props.emojis.slice(0,20).map(currEmoji=>(
          <EmojiList emoji={currEmoji} />  
        ))
    }
}

export default Emojis;