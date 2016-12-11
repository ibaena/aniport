import React from 'react';
import { mount } from 'react-mounter';

Jumbo = React.createClass({
  sites:[
    {_id:'0', name:'feverall', bg:'images/screens/fever_screen.png', class:'feverall-screen'},
    {_id:'1', name:'amloid', bg:'images/screens/amloid_screen.png', class:'amloid-screen'},
    {_id:'2', name:'nicenclean', bg:'images/screens/nice_screen.png', class:'nicenclean-screen'},
    {_id:'3', name:'wine4fod', bg:'images/screens/wine_screen.png', class:'wine4food-screen'},
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
      <div className="jumbo-bg">
        <div id="jumbo-top-bg"></div>
        <div id="jumbo-bottom-bg"></div>
        {projects}
      </div>
    )
  }
});
