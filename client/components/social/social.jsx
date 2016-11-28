import React from 'react';
import { mount } from 'react-mounter';

Social = React.createClass({
  render(){
    return (
      <div className="social-bg hide-project ">
        <div id="social-overlay"></div>
        <div className="container-fluid no-padding landing-zdex" >
        <div className="social-box"></div>
          <div className="one-third">Content</div>
          <div className="one-third">Content</div>
          <div className="one-third">Content</div>
        </div>
      </div>
    )
  }
});
