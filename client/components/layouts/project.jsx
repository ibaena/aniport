import React from 'react';
import { mount } from 'react-mounter';

Projectlayout = React.createClass({
  render(){
    return (
      <div id="project-layout" >
        <Nav />
        <div className="no-scroll">
            <Single />
            <Roles />
            <Jumbo />
            <Mobile />
            <Parallax />

        </div>
      </div>
    )
  }
});
