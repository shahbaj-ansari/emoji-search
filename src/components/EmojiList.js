import React from 'react';
import "../css/EmojiList.css";
import { v4 as uuidv4 } from 'uuid';

class EmojiList extends React.Component {

    state = {
        isHover:false
    }

    onHover = () =>{
      //   console.log('hover over emoji row');
        this.setState({isHover : !this.state.isHover})   
    }

    // onClicking in an emoji copy it
    emojiClicked= ()=> {
        navigator.clipboard.writeText(this.props.emoji.symbol);
    }

    render () {
        return (
            <div key={uuidv4()} className="emoji-row" onMouseEnter={this.onHover} onMouseLeave={this.onHover} onClick={this.emojiClicked}>
                <span className="symbol">{this.props.emoji.symbol}</span>
                <span>{this.props.emoji.title}</span>
                <span className={this.isHover?"copy-emoji":"hide"} >Click to copy emoji</span>
            </div>
        )
    }
}

export default EmojiList;