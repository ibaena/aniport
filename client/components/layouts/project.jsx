import React from 'react';
import { mount } from 'react-mounter';

Projectlayout = React.createClass({
  render(){
    return (
      <div >
        <Nav />
        <div className="">
            <Single />
            <Roles />
            <Jumbo />
        </div>
      </div>
    )
  }
});
