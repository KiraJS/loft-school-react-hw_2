import React, {Component} from 'react';
import NewsPost from './NewsPost';

import './App.css';



class App extends Component {

  state = {
    newsInput:  '',
    news: []
  }

  id = 0;

  getNewsItemId = () => ++this.id;

  handleChange = event => {
    const value = event.target.value;
    this.setState({newsInput: value});
  };

  handleKeyDown = event => {
    const enterKeyCode = 13;
    const {newsInput, news} = this.state;
    if(event.keyCode === enterKeyCode) {
      let newsItem = {id: this.getNewsItemId(), text: newsInput}
      this.setState({newsInput: '', news: [...news, newsItem]})
    }
  }

  render() {
    return (
      <div>

        <input
          className="todo-input "
          placeholder="Текст новости"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />

        <div className="App"/>

        <div>
          {this.state.news.map(item => (
            <NewsPost
              text={item.text}
              key={item.text}
            />
          ))}
        </div>
      </div>
  );
  }
}

export default App;
