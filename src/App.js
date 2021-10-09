import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import SearchEmoji from './components/SearchEmoji';
import Emojis from './components/Emojis';

const emojiList= require('./emojiList.json')

class App extends React.Component {

    state = {
        emojis:emojiList
    }

    searchEmojiPattern = (pattern) =>{
        if(pattern===''){
            this.setState({emojis:emojiList});
        }else{
            this.setState({emojis:emojiList.filter(curr=>curr.keywords.includes(pattern))})
        }
    }

    render () {
        return (
            <div className="App">
                <Header />
                <SearchEmoji searchEmojiPattern= {this.searchEmojiPattern} />
                <Emojis emojis= {this.state.emojis} />
            </div>
          );
    }
}

export default App;
