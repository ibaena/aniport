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
  contact:[
    {_id:'0', name:'TWITTER', link:'https://twitter.com/NotThefakeIB'},
    {_id:'1', name:'LINKEDIN', link:'https://www.linkedin.com/in/ivanbaena'},
    {_id:'2', name:'GITHUB', link:'https://github.com/ibaena'},
    {_id:'3', name:'IVANBAENA04 [AT] GMAIL.COM', link:'ivan.baena04@gmail.com'},
  ],
  componentDidMount(){
    $('#nav-wrapper').hide();
    $('#nav-btn').on('click',function() {
      $('#nav-wrapper').show();
      $('#nav-wrapper').toggleClass('slideOutUp slideInDown')
        setTimeout(function(){
          $('.navlist').toggleClass('hide-nav-bg fadeIn');
          $('.contactlist').toggleClass('hide-nav-bg fadeIn');
        }, 0600);

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
    });
    var contact = this.contact.map(function(item){
      return (

        <li className="contactlist-item" key={item._id}>
          <a href={item.link} target="_blank" className="white-text contact-link">{item.name}
          </a>
        </li>
      )
    });
    return (
      <div>
        <btn className="btn-nav btn-square-fixed" id="nav-btn">
          <div className="bar bar-top"></div>
          <div className="bar bar-mid"></div>
          <div className="bar bar-bot"></div>
        </btn>
        <div id="nav-wrapper" className="container-fluid no-padding animated slideOutUp">
          <ul className="navlist vcenter col-xs-12 hide-nav-bg">
            {links}
          </ul>
          <ul className="contactlist vcenter col-xs-12 hide-nav-bg">
            {contact}
          </ul>
        </div>
      </div>

    )
  }
});
