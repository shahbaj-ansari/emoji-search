import React from 'react';
import "../css/EmojiList.css";
import { v4 as uuidv4 } from 'uuid';

class EmojiList extends React.Component {

    state = {
        Copystyle: "hide"
    }

    onHover = () =>{
        this.setState({Copystyle : "copy-emoji"})      
    }

    onHoverOff = () =>{
          this.setState({Copystyle : "hide"})      
    }
  
    // onClicking in an emoji copy it
    emojiClicked= ()=> {
        navigator.clipboard.writeText(this.props.emoji.symbol);
    }

    render () {
        return (
            <div key={uuidv4()} className="emoji-row" onClick={this.emojiClicked} onMouseEnter={this.onHover} onMouseLeave={this.onHoverOff}>
                <span className="symbol">{this.props.emoji.symbol}</span>
                <span>{this.props.emoji.title}</span>
                <span className={this.state.Copystyle}>Click to copy emoji</span>
            </div>
        )
    }
}

export default EmojiList;