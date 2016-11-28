import React from 'react';
import { mount } from 'react-mounter';

Homelayout = React.createClass({
  render(){
    return (
      <div >
        <Nav />
        <div className="container-fluid no-padding" id="container-home">
          <Landing />
          <Projects />
        </div>
      </div>
    )
  }
});
