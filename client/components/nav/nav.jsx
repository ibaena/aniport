import React from 'react';
import { mount } from 'react-mounter';

Nav = React.createClass({
  componentDidMount(){
    $('#nav-wrapper').hide();
    $('#nav-btn').on('click',function() {
      $('#nav-wrapper').show();
      $('#nav-wrapper').toggleClass('slideOutUp slideInDown')
    })
    $(".btn-nav").on("click tap", function(){
      $(".bar").toggleClass("animatedButton");
      $(".bar").toggleClass("border-white");

    });
  },
  render(){
    return (
      <div>
        <btn className="btn-nav btn-square-fixed" id="nav-btn">
          <div className="bar bar-top"></div>
          <div className="bar bar-mid"></div>
          <div className="bar bar-bot"></div>
        </btn>
        <div id="nav-wrapper" className="container-fluid no-padding animated slideOutUp">
          <ul className="navlist vcenter">
            <li className="navlist-item"><a href="#" className="white-text nav-link ">Menu</a></li>
            <li className="navlist-item"><a href="#" className="white-text nav-link">Menu</a></li>
            <li className="navlist-item"><a href="#" className="white-text nav-link">Menu</a></li>
            <li className="navlist-item"><a href="#" className="white-text nav-link">Menu</a></li>
          </ul>
        </div>
      </div>

    )
  }
});
