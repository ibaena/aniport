import React from 'react';
import { mount } from 'react-mounter';

Landing = React.createClass({

  componentDidMount(){
    //preload
    $('.intro-one-text , .intro-two-text').hide();
    setTimeout(function(){
      $('.side-list-landing').animate({left: '1vh'}, 0700);
    },8600);
    setTimeout(function(){
      $('.intro-one-text , .intro-two-text').show();
      $('.intro-one-text , .intro-two-text').toggleClass('c-ani fadeInUp');
    },6600);


    setTimeout(function(){
      $('.bar').removeClass('btn-border');
      $('.btn-nav').removeClass('button_sliding_bg_2 btn-border');
    }, 7600);

    $(window).on('scroll', function() {
      $('#update').hide();
      $('.landing-bg').removeClass('slideUpReturn');
      $('.landing-bg').addClass('slideUp');
      $('.pagenav-list').removeClass('border-dark');

      setTimeout(function(){  //load 1st slide
        $('.project-box').find('#fever').removeClass('hide-project');
        $('.project-box').find('#amloid').addClass('hide-project');
        $('.project-box').find('#nice').addClass('hide-project');
        $('.project-box').find('#wine').addClass('hide-project');

        $("#fever").prop("checked", true);
        $('.intro-up').addClass('animated fadeIn');
        $('.page-img').addClass('slideInRight');
        $('.product-btn').addClass('proj-btn-ani ani-blue');          //button
        setTimeout(function(){
          $('.product-btn').removeClass('ani-blue');
        },0700);

      }, 0500);

    });
    $('#h-intro-line-container').on('click', function() {
      $('#update').hide();
      $('.landing-bg').removeClass('slideUpReturn');
      $('.landing-bg').addClass('slideUp');
      $('.pagenav-list').removeClass('border-dark');

      setTimeout(function(){  //load 1st slide
        $('.project-box').find('#fever').removeClass('hide-project');
        $('.project-box').find('#amloid').addClass('hide-project');
        $('.project-box').find('#nice').addClass('hide-project');
        $('.project-box').find('#wine').addClass('hide-project');

        $("#fever").prop("checked", true);
        $('.intro-up').addClass('animated fadeIn');
        $('.page-img').addClass('slideInRight');
        $('.product-btn').addClass('proj-btn-ani ani-blue');          //button
        setTimeout(function(){
          $('.product-btn').removeClass('ani-blue');
        },0700);

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
            <div className="intro-one "><p className="intro-one-text"><span className="highlight-text">I’M A WEB DEVELOPER</span>  from Pennsylvania living in Hoboken, New Jesery, where I work as a Front End Developer at Vision Creative Group. With web development, my strength lies in the Front End of website and app development.</p></div>
            <div className="intro-two "><p className="intro-two-text">If you want to know more about me, my work or if youʼre an Elder Scrolls Skyrim or want to talk Knicks basketball, feel free to contact me on ivan.baena04 [at] gmail.com.</p></div>
          </div>
          <div className="logo">
            <img src="images/nav/ivan-logo.png" className="landing-img-logo hide-nav-bg" />
          </div>
        </div>
        <div id="h-intro-line-container" className="oh"><span id="h-intro-line-wrap" className="oh"><span id="h-intro-line"></span></span></div>
      </div>
    )
  }
});
