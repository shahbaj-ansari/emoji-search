import React from 'react';
import "../css/EmojiList.css";
import { v4 as uuidv4 } from 'uuid';

class EmojiList extends React.Component {
  
    // onClicking in an emoji copy it
    emojiClicked= ()=> {
       navigator.clipboard.writeText(this.props.emoji.symbol);
    }

    render () {
        return (
            <div key={uuidv4()} className="emoji-row" onClick={this.emojiClicked}>
                <span className="symbol">{this.props.emoji.symbol}</span>
                <span>{this.props.emoji.title}</span>
                <span className="copy-emoji">Click to copy emoji</span>
            </div>
        )
    }
}

export default EmojiList;