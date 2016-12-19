import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class PictureDrop extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    }
  }
  
  onSubmit() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="msgtype" value="2"/>
        <input type="file" name="avatar" />
        <input type="submit" value="Upload" />
      </form>
    )
  }
}

export default PictureDrop;