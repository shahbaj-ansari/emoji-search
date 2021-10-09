import React from 'react';
import "../css/EmojiList.css";
import useState from 'react';
import { v4 as uuidv4 } from 'uuid';

class EmojiList extends React.Component {

    state = {
        isHover:false
    }

    onHover = () =>{
      //   console.log('hover over emoji row');
        this.setState({isHover : !this.state.isHover})   
    }

    // hover to be implemented later

    render () {
        return (
            <div key={uuidv4()} className="emoji-row" onMouseEnter={this.onHover} onMouseLeave={this.onHover} >
                <span className="symbol">{this.props.emoji.symbol}</span>
                <span>{this.props.emoji.title}</span>
                <span className={this.isHover?"copy-emoji":"hide"} >Click to copy emoji</span>
            </div>
        )
    }
}

export default EmojiList;