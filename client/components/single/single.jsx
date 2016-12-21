import React from 'react';
import { mount } from 'react-mounter';
import { Session } from 'meteor/session';

Single = React.createClass({
  projects:[
    {_id:'0', name:'feverall', upper:"Feverall", bg:'blue-single', content:'feverall-proj-content', image:'images/nav/feverthree.png', large_header:'FEVERALL', description:'BLAH '},
    {_id:'1', name:'amloid', upper:"Amloid", bg:'yellow-single', content:'amloid-proj-content', image:'images/nav/bothamloid.png', large_header:'AMLOID', description:'BLAH'},
    {_id:'2', name:'nicenclean', upper:"Downtown Tampa", bg:'green-single', content:'nicenclean-proj-content', image:'images/nav/tdpboth.png', large_header:'TAMPAS DOWNTOWN', description:'BLAH '},
    {_id:'3', name:'wine4food', upper:"Wine4Food", bg:'red-single', content:'wine4food-proj-content', image:'images/nav/wineboth.png', large_header:'WINE4FOOD', description:'BLAH'},
  ],
  componentDidMount(){
    setTimeout(function(){
      let pathname = window.location.pathname;

      if(pathname === '/feverall'){
        $('.single-bg').find('#blue-single').removeClass('hide-project').addClass('animated slideInLeft ').promise().done(function(){
          $('.single-bg').find('.feverall-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
          //hide
          $('.single-bg').find('.amloif-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.wine4food-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.nicenclean-proj-content').addClass('hide-project').removeClass('animated slideInUp');


        });
      }else if(pathname === '/amloid'){
        $('.single-bg').find('#yellow-single').removeClass('hide-project').addClass('animated slideInLeft ').promise().done(function(){
          $('.single-bg').find('.amloid-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
          //hide
          $('.single-bg').find('.feverall-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.wine4food-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.nicenclean-proj-content').addClass('hide-project').removeClass('animated slideInUp');

        });
      }
      else if(pathname === '/nicenclean'){
        $('.single-bg').find('#green-single').removeClass('hide-project').addClass('animated slideInLeft ');
        $('.single-bg').find('.nicenclean-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
        //hide
          $('.single-bg').find('.feverall-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.amloid-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.wine4food-proj-content').addClass('hide-project').removeClass('animated slideInUp');
      }
      else if(pathname === '/wine4food'){
        $('.single-bg').find('#red-single').removeClass('hide-project').addClass('animated slideInLeft ');
        $('.single-bg').find('.wine4food-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
        //hide
          $('.single-bg').find('.feverall-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.amloid-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          $('.single-bg').find('.nicenclean-proj-content').addClass('hide-project').removeClass('animated slideInUp');
      }


    },0300);

    $('.nav-link').on('click tap', function(){
      var singleUrl = $(this).attr('href');

          if(singleUrl === '/feverall'){
            $('.single-bg').find('#blue-single').removeClass('hide-project').addClass('animated slideInLeft ');
            $('.single-bg').find('#blue-single').removeClass('hide-project').addClass('animated slideInLeft ');
            $('.single-bg').find('.feverall-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
            //Delete
              $('.single-bg').find('#yellow-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#green-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#red-single').removeClass('animated slideInLeft').addClass('hide-project');
              //hide
                $('.single-bg').find('.amloid-proj-content').addClass('hide-project').removeClass('animated slideInUp');
                $('.single-bg').find('.nicenclean-proj-content').addClass('hide-project').removeClass('animated slideInUp');
                $('.single-bg').find('.wine4food-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          }else if(singleUrl === '/amloid'){
            $('.single-bg').find('#yellow-single').removeClass('hide-project').addClass('animated slideInLeft ');
            $('.single-bg').find('.amloid-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
            //delete
              $('.single-bg').find('#blue-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#green-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#red-single').removeClass('animated slideInLeft').addClass('hide-project');
            //hide
              $('.single-bg').find('.feverall-proj-content').addClass('hide-project').removeClass('animated slideInUp');
              $('.single-bg').find('.nicenclean-proj-content').addClass('hide-project').removeClass('animated slideInUp');
              $('.single-bg').find('.wine4food-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          }
          else if(singleUrl === '/nicenclean'){
            $('.single-bg').find('#green-single').removeClass('hide-project').addClass('animated slideInLeft ');
            $('.single-bg').find('.nicenclean-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
            //delete
              $('.single-bg').find('#blue-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#yellow-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#red-single').removeClass('animated slideInLeft').addClass('hide-project');
            //hide
              $('.single-bg').find('.feverall-proj-content').addClass('hide-project').removeClass('animated slideInUp');
              $('.single-bg').find('.amloid-proj-content').addClass('hide-project').removeClass('animated slideInUp');
              $('.single-bg').find('.wine4food-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          }
          else if(singleUrl === '/wine4food'){
            $('.single-bg').find('#red-single').removeClass('hide-project').addClass('animated slideInLeft ');
            $('.single-bg').find('.wine4food-proj-content').removeClass('hide-project').toggleClass('animated slideInUp');
            //delete
              $('.single-bg').find('#blue-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#green-single').removeClass('animated slideInLeft').addClass('hide-project');
              $('.single-bg').find('#yellow-single').removeClass('animated slideInLeft').addClass('hide-project');
            //hide
              $('.single-bg').find('.feverall-proj-content').addClass('hide-project').removeClass('animated slideInUp');
              $('.single-bg').find('.amloid-proj-content').addClass('hide-project').removeClass('animated slideInUp');
              $('.single-bg').find('.nicenclean-proj-content').addClass('hide-project').removeClass('animated slideInUp');
          }
    });
  },
  render(){
    var single = this.projects.map(function(item){
      return (
      <div key={item._id}>
        <div className="project-left-side hide-project" id={item.bg}>
          <div className="back-home">
            <div className="intro-l-line-wrap oh"><div className="intro-l-line" ></div></div>
            <a className="non-decor" href="/">Back</a>
          </div>
          <div className="content-left-side">
            <img className="single-img" id={item.name+"-single"} src={item.image} alt={item.name} />
          </div>
        </div>
        <div className={"project-right-side hide-project " +   item.content}>
          <div className="content-right-side">
            <h1 className="project-section-title">{item.large_header}</h1>
            <div className="intro-r-line-wrap oh"><div className="intro-r-line" ></div></div>
            <div className="project-section-content">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
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
