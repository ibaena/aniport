import React from 'react';
import { mount } from 'react-mounter';

Landing = React.createClass({

  componentDidMount(){
    setTimeout(function(){
      $('.landing-img-logo').toggleClass('hide-nav-bg animated slideInLeft');
    }, 1200);
    $(window).on('scroll', function() {
      $('.landing-bg').removeClass('slideUpReturn');
      $('.landing-bg').addClass('slideUp');

      setTimeout(function(){  //load 1st slide
        $('.project-box').find('#fever').removeClass('hide-project');
        $('.project-box').find('#amloid').addClass('hide-project');
        $('.project-box').find('#nice').addClass('hide-project');
        $('.project-box').find('#wine').addClass('hide-project');


        $('.pagenav-list').removeClass('border-dark');
        $('.intro-up').addClass('animated fadeIn');
        $('.page-img').addClass('slideInRight');
        $('.product-btn').addClass('proj-btn-ani ani-blue');          //button
        setTimeout(function(){
          $('.product-btn').removeClass('ani-blue');
        },0700);
        $("#fever").prop("checked", true);
      }, 0500);

    });
  },
  render(){
    return (
      <div className="landing-bg magictime ">
        <div id="landing-overlay"></div>
        <div className="container-fluid landing-zdex" >
          <ul className="side-list-landing">
            <li className="side-list-first">Web Developer</li>
            <li >New Jersey <span className="glyphicon glyphicon-arrow-right"></span>
              Pennsylvania <span className="glyphicon glyphicon-arrow-right"></span>
              New York
            </li>
            <li className="side-list-last">Ivan Baena</li>
          </ul>
          <div className="text-box">
            <div className="intro-one"><p className="intro-one-text"><span className="highlight-text">I’M A WEB DEVELOPER</span>  from Pennsylvania living in Hoboken, New Jesery, where I work as a Front End Developer at Vision Creative Group. With web development, my strength lies in the Front End of website and app development.</p></div>
            <div className="intro-two"><p className="intro-two-text">If you want to know more about me, my work or if youʼre an Elder Scrolls Skyrim or want to talk Knicks basketball, feel free to contact me on ivan.baena04 [at] gmail.com.</p></div>
          </div>
          <div className="logo">
            <img src="images/nav/ivan-logo.png" className="landing-img-logo hide-nav-bg" />
          </div>
        </div>
      </div>
    )
  }
});
