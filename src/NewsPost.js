import React, {Component} from 'react';
import Comment from './Comment';

import './NewsPost.css';



class NewsPost extends Component {

  state = {
    commentInput:  '',
    comments: []
  }

  id = 0;

  getCommentId = () => {
    ++this.id;
    return this.id;
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({commentInput: value});
  }

  handleKeyDown = event => {
    const enterKeyCode = 13;
    const {commentInput, comments} = this.state;
    if(event.keyCode === enterKeyCode) {
      let comment = {id: this.getCommentId(), text: commentInput}
      this.setState({commentInput: '', comments: [...comments, comment]})
    }
  }

  handleDelete = id => {
    console.log(id, this.id)
    let { comments } = this.state;
    comments = comments.filter(comment => comment.id !== id);
    this.setState({ comments });
  };

  render() {
    const {text} = this.props;

    return (
      <div className="news-post">

        <p>{text}</p>

        <input
          className="comment-input"
          placeholder="Ваш комментарий"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div>
          {this.state.comments.map(item => (
            <Comment
              text={item.text}
              key={item.id}
              id={item.id}
              onDelete={this.handleDelete}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default NewsPost;
