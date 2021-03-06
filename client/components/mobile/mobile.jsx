import React from 'react';
import { mount } from 'react-mounter';

Mobile = React.createClass({
  mobile:[
    {_id:'0', name:'feverall', bg:'images/screens/spanish-fever_screen.png', class:'feverall-screen', description:'Since the product was also being marketed in South America and Mexico, I also developed a site with spanish content.'},
    {_id:'1', name:'amloid', bg:'images/mobile/amloid/amloid-both.png', class:'amloid-screen', description:'Mobile first allowing for seamles experience across multiple devices.'},
    {_id:'2', name:'nicenclean', bg:'images/screens/map-closed_screen.png', class:'nicenclean-screen', description:'The interactive map is way for tourist in the Tampa area to filter through the many activites Tamp offers. It was designed to be a simple way for tourist to plan their days.'},
    {_id:'3', name:'wine4food', bg:'images/mobile/wine/wine-mobile-both.png', class:'wine4food-screen', description:'Wine4food was made with amobile first approach sine the owner is an avid traveler and many of his recipes in his blog come when traveling locally, and abroad.'},
  ],
  componentDidMount(){
    //fade DOM element in on scroll
    var $animation_elements = $('.mobile-bg');
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

      $('#amloid-mobile-view').hide();
      $('#nicenclean-mobile-view').hide();
      $('#wine4food-mobile-view').hide();
      $('#feverall-mobile-view').hide();

      setTimeout(function(){
      let mobileLoad = window.location.pathname;
      if (mobileLoad === '/feverall'){
        $('#feverall-mobile-view').show();

        $('#amloid-mobile-view').hide();
        $('#nicenclean-mobile-view').hide();
        $('#wine4food-mobile-view').hide();
      }else if (mobileLoad === '/amloid'){
        $('#amloid-mobile-view').show();
        //Hide others
        $('#feverall-mobile-view').hide();
        $('#nicenclean-mobile-view').hide();
        $('#wine4food-mobile-view').hide();
      }else if (mobileLoad === '/nicenclean'){
        $('#nicenclean-mobile-view').show();
        //Hide others
        $('#feverall-mobile-view').hide();
        $('#amloid-mobile-view').hide();
        $('#wine4food-mobile-view').hide();
      }else if (mobileLoad === '/wine4food'){
        $('#wine4food-mobile-view').show();
        //Hide others
        $('#feverall-mobile-view').hide();
        $('#amloid-mobile-view').hide();
        $('#nicenclean-mobile-view').hide();
      }
    },300);
      $('.nav-link').on('click tap', function(){
        let mobileUrl = $(this).attr('href');
        if (mobileUrl === '/feverall'){
          $('#feverall-mobile-view').show();

          $('#amloid-mobile-view').hide();
          $('#nicenclean-mobile-view').hide();
          $('#wine4food-mobile-view').hide();
        }else if (mobileUrl === '/amloid'){
          $('#amloid-mobile-view').show();
          //Hide others
          $('#feverall-mobile-view').hide();
          $('#nicenclean-mobile-view').hide();
          $('#wine4food-mobile-view').hide();
        }else if (mobileUrl === '/nicenclean'){
          $('#nicenclean-mobile-view').show();
          //Hide others
          $('#feverall-mobile-view').hide();
          $('#amloid-mobile-view').hide();
          $('#wine4food-mobile-view').hide();
        }else if (mobileUrl === '/wine4food'){
          $('#wine4food-mobile-view').show();
          //Hide others
          $('#feverall-mobile-view').hide();
          $('#amloid-mobile-view').hide();
          $('#nicenclean-mobile-view').hide();
        }
      });
  },
  render(){
    var views = this.mobile.map(function(item){
      return (
        <div id={item.name+"-mobile-view"} key={item.id}>
          <div className="mobile-intro-container" >
            <h3 className="mobile-intro-header">Responsive Design</h3>
            <p className="mobile-intro-text">
                {item.description}
            </p>
          </div>
          <img src={item.bg}  className="mobile-img"/ >
        </div>
      )
    });
    return (
      <div className="mobile-bg bounce-up" >
        {views}
      </div>
    )
  }
});
