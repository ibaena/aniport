import React from 'react';
import { mount } from 'react-mounter';

Nav = React.createClass({
  menu:[
    {_id:'0',name:'Home', background:'', animate:'', color:'' },
    {_id:'1',name:'Amloid Toys', background:'images/nav/bothamloid.png', animate:'', color:'' },
    {_id:'2',name:'Feverall', background:'images/nav/feverthree.png', animate:'', color:'' },
    {_id:'3',name:'Nice n Clean', background:'images/nav/nicencleanboth.png', animate:'', color:'' },
    {_id:'4',name:'Wine 4 Food', background:'', animate:'', color:'' },
  ],
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
    $('.nav-link').on('mouseover', function(){
      $(this).find('.nav-bg').toggleClass('hide-nav-bg hvr-shrink');
    });
    $('.nav-link').on('mouseleave', function(){
      $(this).find('.nav-bg').toggleClass('hvr-shrink hide-nav-bg');
    });
  },
  render(){
    var links = this.menu.map(function(item){
      return (

        <li className="navlist-item" key={item._id}>
          <a href="#" className="white-text nav-link alwaysTop">{item.name}
            <img src={item.background} className="nav-bg hide-nav-bg animated center-img" alt={item.name} />
          </a>
        </li>
      )
    })
    return (
      <div>
        <btn className="btn-nav btn-square-fixed" id="nav-btn">
          <div className="bar bar-top"></div>
          <div className="bar bar-mid"></div>
          <div className="bar bar-bot"></div>
        </btn>
        <div id="nav-wrapper" className="container-fluid no-padding animated slideOutUp">
          <ul className="navlist vcenter col-xs-12">
            {links}
          </ul>
        </div>
      </div>

    )
  }
});
