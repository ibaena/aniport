import React from 'react';
import { mount } from 'react-mounter';

Pagenav = React.createClass({
  componentDidMount(){

  },
  render(){
    return (
      <div className="btn-wrapper-top">
        <span className="btn-home">
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </span>
      </div>

    )
  }
});
