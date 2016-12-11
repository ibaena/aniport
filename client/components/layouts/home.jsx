import React from 'react';
import { mount } from 'react-mounter';

Homelayout = React.createClass({
  render(){
    return (
      <div id="home-layout">
        <Nav />
        <div className="container-fluid no-padding hiddenscrollbars" id="container-home">
          <Preloader />
          <Landing />
          <Projects />
          <Social />
        </div>
      </div>
    )
  }
});
