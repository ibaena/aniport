import React from 'react';
import { mount } from 'react-mounter';

Pagenav = React.createClass({
  nav:[
    {_id:'0', class_id:'home', name_small:'Home', name_large:'HOME'},
    {_id:'1', class_id:'fever', name_small:'Feverall', name_large:'FEVERALL'},
    {_id:'2', class_id:'amloid', name_small:'Amloid', name_large:'AMLOID'},
    {_id:'3', class_id:'wine', name_small:'Wine', name_large:'WINE'},
    {_id:'4', class_id:'nice', name_small:'Nice n Clean', name_large:'NICE N CLEAN'},
    {_id:'5', class_id:'social', name_small:'Social', name_large:'SOCIAL'},
  ],
  componentDidMount(){
    $('input:radio').change(
        function(){
          let that = this.id;

            if (that === "home") {
              $('.landing-bg').removeClass('slideUp');
              $('.landing-bg').addClass('slideUpReturn');
              $('.social-bg').removeClass('animated slideInUp').addClass('animated slideOutDown');

              setTimeout(function(){
                  $('#'+that).prop('checked', false)
                  $('.pagenav-list').removeClass('border-dark');
              },1000)
            }else if (that === "fever") {
              $('.project-box').find('#amloid').addClass('hide-project'); //hide previous
              $('.project-box').find('#nice').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');
              $('.social-bg').removeClass('animated slideInUp').addClass('animated slideOutDown');

            setTimeout(function(){
              $('.pagenav-list').removeClass('border-dark');
              $('.project-box').find('#fever').removeClass('hide-project'); //show page
              $('.intro-up').addClass('animated fadeIn');                   //text
              $('.product-btn').removeClass('proj-btn-ani-yellow proj-btn-ani-brown proj-btn-ani-lightbrown').addClass('proj-btn-ani ani-blue');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-blue');
              },0700);},0400);
            }else if (that === "amloid") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#nice').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');
              $('.pagenav-list').removeClass('border-dark');
              $('.social-bg').removeClass('animated slideInUp').addClass('animated slideOutDown');

            setTimeout(function(){
              $('.pagenav-list').removeClass('border-dark');
              $('.project-box').find('#amloid').removeClass('hide-project');
              $('.page-img').addClass('slideInRight');
              $('.intro-up').addClass('animated fadeIn');
              $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-brown proj-btn-ani-lightbrown').addClass('proj-btn-ani-yellow ani-yellow');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-yellow');
              },0700);},0400);
            }else if (that === "nice") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#amloid').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');
              $('.pagenav-list').removeClass('border-dark');
              $('.social-bg').removeClass('animated slideInUp').addClass('animated slideOutDown');

            setTimeout(function(){
              $('.pagenav-list').removeClass('border-dark');
              $('.project-box').find('#nice').removeClass('hide-project');
              $('.page-img').addClass('slideInRight');
              $('.intro-up').addClass('animated fadeIn');
              $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-yellow proj-btn-ani-lightbrown').addClass('proj-btn-ani-brown ani-brown');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-brown');
              },0700);},0400);
            }else if (that === "wine") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#amloid').addClass('hide-project');
              $('.project-box').find('#nice').addClass('hide-project');
              $('.social-bg').removeClass('animated slideInUp').addClass('animated slideOutDown');
              $('.pagenav-list').removeClass('border-dark');

            setTimeout(function(){
              $('.pagenav-list').removeClass('border-dark');
              $('.project-box').find('#wine').removeClass('hide-project');
              $('.page-img').addClass('slideInRight');
              $('.intro-up').addClass('animated fadeIn');
              $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-yellow proj-btn-ani-yellow').addClass('proj-btn-ani-lightbrown ani-lightbrown');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-lightbrown');
              },0700);},0400);
            }else if (that === "social") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#amloid').addClass('hide-project');
              $('.project-box').find('#nice').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');

              $('.social-bg').removeClass('hide-project animated slideOutDown');
              $('.social-bg').addClass('animated slideInUp');
              setTimeout(function(){
                  $('.pagenav-list').addClass('border-dark');
              },0300);
            }
        });
  },
  render(){
    var links = this.nav.map(function(item){
      return (
        <li className="pagenav-list-item" key={item._id}>
          <input type="radio" className="radio-nav" id={item.class_id} value={item.name} name="page-nav"/>
        </li>
      )
    });
    return (
      <div className="btn-wrapper-top">
        <ul className="pagenav-list">
          {links}
        </ul>
      </div>

    )
  }
});
