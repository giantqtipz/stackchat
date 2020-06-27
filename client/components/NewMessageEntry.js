import React, { Component } from 'react';
import store from '../store';
import Axios from 'axios';

export default class NewMessageEntry extends Component {
  constructor(){
    super()
    this.state = store.getState();
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  async post(message){
    await Axios.post('http://localhost:8080/api/messages/', {} )
  }

  render () {
    return (
      <form id="new-message-form">
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}
