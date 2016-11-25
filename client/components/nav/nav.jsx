import React from 'react';
import { mount } from 'react-mounter';

Nav = React.createClass({
  menu:[
    {_id:'0',name:'Home', background:'images/nav/ivan-stencil.png', class:'nav-bg-home hide-nav-bg animated home-nav-img ', color:'', elementId: 'home-bg' },
    {_id:'1',name:'Amloid Toys', background:'images/nav/bothamloid.png', class:'nav-bg hide-nav-bg animated center-img', color:'' },
    {_id:'2',name:'Feverall', background:'images/nav/feverthree.png', class:'nav-bg hide-nav-bg animated center-img', color:'' },
    {_id:'3',name:'Nice n Clean', background:'images/nav/nicencleanboth.png', class:'nav-bg hide-nav-bg animated center-img', color:'' },
    {_id:'4',name:'Wine 4 Food', background:'images/nav/wineboth.png', class:'nav-bg hide-nav-bg animated center-img', color:'' },
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
    $('.nav-link').on('mouseover', function(){
      $(this).find('.nav-bg-home').toggleClass('hide-nav-bg hvr-grow');
    });
    $('.nav-link').on('mouseleave', function(){
      $(this).find('.nav-bg-home').toggleClass('hvr-grow hide-nav-bg ');
    });
  },
  render(){
    var links = this.menu.map(function(item){
      return (

        <li className="navlist-item" key={item._id}>
          <a href="#" className="white-text nav-link alwaysTop">{item.name}
            <img src={item.background} className={item.class} id={item.elementId} alt={item.name} />
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
