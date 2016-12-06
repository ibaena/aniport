import React from 'react';
import { mount } from 'react-mounter';
import { Session } from 'meteor/session';

Single = React.createClass({
  projects:[
    {_id:'0', name:'feverall', upper:"Feverall", bg:'blue-single', image:'images/nav/feverthree.png', large_header:'FEVERALL', description:'BLAH '},
    {_id:'1', name:'amloid', upper:"Amloid", bg:'yellow-single', image:'images/nav/bothamloid.png', large_header:'AMLOID', description:'BLAH'},
    {_id:'2', name:'nicenclean', upper:"Nice N Clean", bg:'green-single', image:'images/nav/nicencleanboth.png', large_header:'NICE N CLEAN', description:'BLAH '},
    {_id:'3', name:'wine4food', upper:"Wine4Food", bg:'red-single', image:'images/nav/wineboth.png', large_header:'WINE4FOOD', description:'BLAH'},
  ],
  componentDidMount(){
    setTimeout(function(){
      let pathname = window.location.pathname;

      if(pathname === '/feverall'){
        $('.single-bg').find('#blue-single').removeClass('hide-project').addClass('animated slideInLeft ').promise().done(function(){

        });
      }else if(pathname === '/amloid'){
        $(feverImg).addClass('hide-project');
        $('.single-bg').find('#yellow-single').removeClass('hide-project').addClass('animated slideInLeft ').promise().done(function(){

        });
      }
      else if(pathname === '/nicenclean'){
        $('.single-bg').find('#green-single').removeClass('hide-project').addClass('animated slideInLeft ');
      }
      else if(pathname === '/wine4food'){
        $('.single-bg').find('#red-single').removeClass('hide-project').addClass('animated slideInLeft ');
      }


    },0300);

    $('.nav-link').on('click tap', function(){
      var singleUrl = $(this).attr('href');

          if(singleUrl === '/feverall'){
            $('.single-bg').find('#blue-single').removeClass('hide-project').addClass('animated slideInLeft ');
            //Delete
              $('.single-bg').find('#yellow-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#green-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#red-single').removeClass('animated slideInLeft').addClass('hide-project');
          }else if(singleUrl === '/amloid'){
            $('.single-bg').find('#yellow-single').removeClass('hide-project').addClass('animated slideInLeft ');
            //delete
              $('.single-bg').find('#blue-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#green-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#red-single').removeClass('animated slideInLeft').addClass('hide-project');
          }
          else if(singleUrl === '/nicenclean'){
            $('.single-bg').find('#green-single').removeClass('hide-project').addClass('animated slideInLeft ');
            //delete
              $('.single-bg').find('#blue-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#yellow-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#red-single').removeClass('animated slideInLeft').addClass('hide-project');
          }
          else if(singleUrl === '/wine4food'){
            $('.single-bg').find('#red-single').removeClass('hide-project').addClass('animated slideInLeft ');
            //delete
              $('.single-bg').find('#blue-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#green-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#yellow-single').removeClass('animated slideInLeft').addClass('hide-project');
          }
    });
  },
  render(){
    var single = this.projects.map(function(item){
      return (
      <div key={item._id}>
        <div className="project-left-side hide-project" id={item.bg}>
          <div className="content-left-side">
            <img className="single-img" id={item.name+"-single"} src={item.image} alt={item.name} />
          </div>
        </div>
        <div className="project-right-side">
          <div className="content-right-side">

          </div>
        </div>
      </div>
      )
    });
    return (
      <div >
        <div className="single-container">
            <div className="single-bg">
              {single}
            </div>
        </div>
      </div>
    )
  }
});
