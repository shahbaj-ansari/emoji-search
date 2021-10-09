import React from 'react';
import "../css/SearchEmoji.css"

class SearchEmoji extends React.Component {

    state = {
        name:''
    }

    onInput = (e) =>{
        this.setState({name:e.target.value});
        this.props.searchEmojiPattern(e.target.value);
       // console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <input id="name" onInput = {this.onInput} ></input>
            </div>
        )
    }
}

export default SearchEmoji;