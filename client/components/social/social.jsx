import React from 'react';
import { mount } from 'react-mounter';

Social = React.createClass({
  render(){
    return (
      <div className="social-bg">

        <div id="social-overlay"></div>
        <div className="container-fluid no-padding landing-zdex" >
        <div className="social-box"></div>

          <div className="one-third circle">Content</div>
          <div className="one-third circle">Content</div>
          <div className="one-third circle">Content</div>
        </div>
      </div>
    )
  }
});
