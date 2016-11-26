import React from 'react';
import { mount } from 'react-mounter';

Landing = React.createClass({
  componentDidMount(){
  },
  render(){
    return (
      <div className="landing-bg">
        <div id="landing-overlay"></div>
        <div className="container-fluid landing-zdex" >
          <h1 className="white-text">ivan</h1>
        </div>
      </div>
    )
  }
});
