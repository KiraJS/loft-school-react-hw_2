import React, {Component} from 'react';

import './Comment.css';



class Comment extends Component {

  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {

    const {text} = this.props;

    return (
      <div>
        <p>{text}</p>
        <span className="delete" onClick={this.handleDelete}>X</span>
      </div>
    );
  }
}

export default Comment;
