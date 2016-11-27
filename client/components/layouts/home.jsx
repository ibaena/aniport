import React from 'react';
import { mount } from 'react-mounter';

Homelayout = React.createClass({
  render(){
    return (
      <div >
        <Nav />
        <div className="" id="container-home">
          <Landing />
          <Projects />
        </div>
      </div>
    )
  }
});
