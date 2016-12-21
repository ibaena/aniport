import React from 'react';
import { mount } from 'react-mounter';

Jumbo = React.createClass({
  sites:[
    {_id:'0', name:'feverall', bg:'images/screens/fever_screen.png', class:'feverall-screen'},
    {_id:'1', name:'amloid', bg:'images/screens/amloid_screen.png', class:'amloid-screen'},
    {_id:'2', name:'nicenclean', bg:'images/screens/nice_screen.png', class:'nicenclean-screen'},
    {_id:'3', name:'wine4food', bg:'images/screens/wine_screen.png', class:'wine4food-screen'},
  ],
  componentDidMount(){
    $('#amloid-screen').hide();
    $('#nicenclean-screen').hide();
    $('#wine4food-screen').hide();
    $('#feverall-screen').hide();

    setTimeout(function(){
    let roleload = window.location.pathname;
    if (roleload === '/feverall'){
      $('#feverall-screen').show();

      $('#amloid-screen').hide();
      $('#nicenclean-screen').hide();
      $('#wine4food-screen').hide();
    }else if (roleload === '/amloid'){
      $('#amloid-screen').show();
      //Hide others
      $('#feverall-screen').hide();
      $('#nicenclean-screen').hide();
      $('#wine4food-screen').hide();
    }else if (roleload === '/nicenclean'){
      $('#nicenclean-screen').show();
      //Hide others
      $('#feverall-screen').hide();
      $('#amloid-screen').hide();
      $('#wine4food-screen').hide();
    }else if (roleload === '/wine4food'){
      $('#wine4food-screen').show();
      //Hide others
      $('#feverall-screen').hide();
      $('#amloid-screen').hide();
      $('#nicenclean-screen').hide();
    }
  },300);
    $('.nav-link').on('click tap', function(){
      let roleUrl = $(this).attr('href');
      if (roleUrl === '/feverall'){
        $('#feverall-screen').show().fadeIn();

        $('#amloid-screen').hide();
        $('#nicenclean-screen').hide();
        $('#wine4food-screen').hide();
      }else if (roleUrl === '/amloid'){
        $('#amloid-screen').show().fadeIn();
        //Hide others
        $('#feverall-screen').hide();
        $('#nicenclean-screen').hide();
        $('#wine4food-screen').hide();
      }else if (roleUrl === '/nicenclean'){
        $('#nicenclean-screen').show().fadeIn();
        //Hide others
        $('#feverall-screen').hide();
        $('#amloid-screen').hide();
        $('#wine4food-screen').hide();
      }else if (roleUrl === '/wine4food'){
        $('#wine4food-screen').show().fadeIn();
        //Hide others
        $('#feverall-screen').hide();
        $('#amloid-screen').hide();
        $('#nicenclean-screen').hide();
      }
    });


    var $animation_elements = $('.jumbo-bg');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('bounce-up-in-view');

        } else {
          $element.removeClass('bounce-up-in-view');
        }
      });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    setTimeout(function(){
    let topbg = window.location.pathname;
    if (topbg === '/feverall'){
      $('#jumbo-top-bg').addClass('feverall-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('amloid-screen');
      $('#jumbo-top-bg').removeClass('wine4food-screen');
      $('#jumbo-top-bg').removeClass('nicenclean-screen');

    }else if (topbg === '/amloid'){
      $('#jumbo-top-bg').addClass('amloid-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('feverall-screen');
      $('#jumbo-top-bg').removeClass('wine4food-screen');
      $('#jumbo-top-bg').removeClass('nicenclean-screen');

    }else if (topbg === '/nicenclean'){
      $('#jumbo-top-bg').addClass('nicenclean-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('amloid-screen');
      $('#jumbo-top-bg').removeClass('wine4food-screen');
      $('#jumbo-top-bg').removeClass('feverall-screen');

    }else if (topbg === '/wine4food'){
      $('#jumbo-top-bg').addClass('wine4food-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('amloid-screen');
      $('#jumbo-top-bg').removeClass('feverall-screen');
      $('#jumbo-top-bg').removeClass('nicenclean-screen');
    }
  },300);
  $('.nav-link').on('click tap', function(){
    let topUrl = $(this).attr('href');
    if (topUrl === '/feverall'){
      $('#jumbo-top-bg').addClass('feverall-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('amloid-screen');
      $('#jumbo-top-bg').removeClass('wine4food-screen');
      $('#jumbo-top-bg').removeClass('nicenclean-screen');

    }else if (topUrl === '/amloid'){
      $('#jumbo-top-bg').addClass('amloid-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('feverall-screen');
      $('#jumbo-top-bg').removeClass('wine4food-screen');
      $('#jumbo-top-bg').removeClass('nicenclean-screen');

    }else if (topUrl === '/nicenclean'){
      $('#jumbo-top-bg').addClass('nicenclean-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('amloid-screen');
      $('#jumbo-top-bg').removeClass('wine4food-screen');
      $('#jumbo-top-bg').removeClass('feverall-screen');

    }else if (topUrl === '/wine4food'){
      $('#jumbo-top-bg').addClass('wine4food-screen');
      //Remove Other Classes
      $('#jumbo-top-bg').removeClass('amloid-screen');
      $('#jumbo-top-bg').removeClass('feverall-screen');
      $('#jumbo-top-bg').removeClass('nicenclean-screen');
    }
  });
  },
  render(){
    var projects = this.sites.map(function(item){
      return (
        <div className="jumbo-img-wrapper" key={item._id}>
            <img src={item.bg} className="jumbo-center-img" id={item.class} />
        </div>
      )
    });
    return (
      <div className="jumbo-bg bounce-up">

        <div id="jumbo-top-bg" >
          <div className="jumbo-intro-container">
            <h1 className="jumbo-header-text">A SEAMLESS EXPERIENCE</h1>
            <p className="jumbo-text">To ease the experience the site was designed to seamlessly take the user to different stories on the homepage. Text, icons and panels moving smoothly to not interrupt the user flow.</p>
          </div>
        </div>
        <div id="jumbo-bottom-bg"></div>
        {projects}
      </div>
    )
  }
});
