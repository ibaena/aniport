import React from 'react';
import { mount } from 'react-mounter';

Preloader = React.createClass({
  componentDidMount(){
    setTimeout(function(){
      $('.preloader-bg').fadeOut(2200,'linear');
      $('.cssload-loader').fadeOut(1000,'swing');
    },5800);
  },
  render(){
    return (
      <div className="preloader-bg">
        <div className="cssload-loader"></div>
      </div>
    )
  }
});
