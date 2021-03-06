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
    $('.social-bg').addClass('hide-project'); // set initial state
    $('input:radio').change(
        function() {
            let that = this.id;

            if (that === "home") {

                $('#update').show();
                $('.landing-bg').removeClass('slideUp');
                $('.landing-bg').addClass('slideUpReturn');
                $('.social-bg').removeClass('magictime slideDownReturn').addClass('magictime slideDown');
                $('.product-btn').removeClass('proj-btn-ani-yellow proj-btn-ani-brown proj-btn-ani-lightbrown proj-btn-ani ani-blue');
                $('.btn-nav').removeClass('border-dark');

                setTimeout(function() {
                    $('#' + that).prop('checked', false)
                    $('.social-bg').addClass('hide-project');
                }, 1000)
            } else if (that === "fever") {

                $('.project-box').find('#amloid').addClass('hide-project'); //hide previous
                $('.project-box').find('#nice').addClass('hide-project');
                $('.project-box').find('#wine').addClass('hide-project');
                $('.social-bg').removeClass('magictime slideDownReturn').addClass('magictime slideDown');

                setTimeout(function() {
                    $('.pagenav-list').removeClass('border-dark');
                    $('.btn-nav').removeClass('border-dark');
                    $('.project-box').find('#fever').removeClass('hide-project'); //show page
                    $('.intro-up').addClass('animated fadeIn'); //text
                    $('.product-btn').removeClass('proj-btn-ani-yellow proj-btn-ani-brown proj-btn-ani-lightbrown').addClass('proj-btn-ani ani-blue'); //button
                    $('.btn-nav').removeClass('button_sliding_bg button_sliding_bg_2').addClass('ani-blue ani-blue-hover');

                    setTimeout(function() {
                        $('.product-btn').removeClass('ani-blue');
                    }, 0700);
                }, 0400);
            } else if (that === "amloid") {
                $('.project-box').find('#fever').addClass('hide-project');
                $('.project-box').find('#nice').addClass('hide-project');
                $('.project-box').find('#wine').addClass('hide-project');
                $('.social-bg').removeClass('magictime slideDownReturn').addClass('magictime slideDown');

                setTimeout(function() {
                    $('.pagenav-list').removeClass('border-dark');
                    $('.btn-nav').removeClass('border-dark');
                    $('.project-box').find('#amloid').removeClass('hide-project');
                    $('.page-img').addClass('slideInRight');
                    $('.intro-up').addClass('animated fadeIn');
                    $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-brown proj-btn-ani-lightbrown').addClass('proj-btn-ani-yellow ani-yellow'); //button
                    setTimeout(function() {
                        $('.product-btn').removeClass('ani-yellow');
                    }, 0700);
                }, 0400);
            } else if (that === "nice") {
                $('.project-box').find('#fever').addClass('hide-project');
                $('.project-box').find('#amloid').addClass('hide-project');
                $('.project-box').find('#wine').addClass('hide-project');
                $('.pagenav-list').removeClass('border-dark');
                $('.social-bg').removeClass('magictime slideDownReturn').addClass('magictime slideDown');

                setTimeout(function() {
                    $('.pagenav-list').removeClass('border-dark');
                    $('.btn-nav').removeClass('border-dark');
                    $('.project-box').find('#nice').removeClass('hide-project');
                    $('.page-img').addClass('slideInRight');
                    $('.intro-up').addClass('animated fadeIn');
                    $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-yellow proj-btn-ani-lightbrown').addClass('proj-btn-ani-brown ani-brown'); //button
                    setTimeout(function() {
                        $('.product-btn').removeClass('ani-brown');
                    }, 0700);
                }, 0400);
            } else if (that === "wine") {
                $('.project-box').find('#fever').addClass('hide-project');
                $('.project-box').find('#amloid').addClass('hide-project');
                $('.project-box').find('#nice').addClass('hide-project');
                $('.social-bg').removeClass('magictime slideDownReturn').addClass('magictime slideDown');

                setTimeout(function() {
                    $('.pagenav-list').removeClass('border-dark');
                    $('.btn-nav').removeClass('border-dark');
                    $('.project-box').find('#wine').removeClass('hide-project');
                    $('.page-img').addClass('slideInRight');
                    $('.intro-up').addClass('animated fadeIn');
                    $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-yellow proj-btn-ani-yellow').addClass('proj-btn-ani-lightbrown ani-lightbrown'); //button
                    setTimeout(function() {
                        $('.product-btn').removeClass('ani-lightbrown');
                    }, 0700);
                }, 0400);
            } else if (that === "social") {

                $('.social-bg').removeClass('hide-project magictime slideDown');
                $('.social-bg').addClass('magictime slideDownReturn');
                  $('.one-half').hide();
                setTimeout(function() {
                    $('.pagenav-list').addClass('border-dark');
                    $('.btn-nav').addClass('border-dark');
                }, 0300);
                setTimeout(function(){
                  $('.one-half').show().addClass('animated zoomIn');
                },800);
            }
        });
  },
  render(){
    var links = this.nav.map(function(item){
      return (
        <li className="pagenav-list-item" key={item._id}>
          <input type="radio" className="radio-nav" id={item.class_id} value={item.name_large} name="page-nav"/>
          <span className="hide-project word">{item.name_large}</span>
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
