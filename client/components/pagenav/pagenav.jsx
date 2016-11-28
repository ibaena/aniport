import React from 'react';
import { mount } from 'react-mounter';

Pagenav = React.createClass({
  componentDidMount(){

    $('input:radio').change(
        function(){
          let that = this.id;

            if (that === "home") {
              $('.landing-bg').removeClass('slideUp');
              $('.landing-bg').addClass('slideUpReturn');
              setTimeout(function(){
                  $('#'+that).prop('checked', false)
              },1000)
            }else if (that === "fever") {
              $('.project-box').find('#amloid').addClass('hide-project'); //hide previous
              $('.project-box').find('#nice').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');

              $('.project-box').find('#fever').removeClass('hide-project'); //show page
              $('.intro-up').addClass('animated fadeIn');                   //text
              $('.product-btn').removeClass('proj-btn-ani-yellow proj-btn-ani-brown proj-btn-ani-lightbrown').addClass('proj-btn-ani ani-blue');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-blue');
              },0700);

            }else if (that === "amloid") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#nice').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');

              $('.project-box').find('#amloid').removeClass('hide-project');
              $('.page-img').addClass('slideInRight');
              $('.intro-up').addClass('animated fadeIn');
              $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-brown proj-btn-ani-lightbrown').addClass('proj-btn-ani-yellow ani-yellow');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-yellow');
              },0700);
            }else if (that === "nice") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#amloid').addClass('hide-project');
              $('.project-box').find('#wine').addClass('hide-project');

              $('.project-box').find('#nice').removeClass('hide-project');
              $('.page-img').addClass('slideInRight');
              $('.intro-up').addClass('animated fadeIn');
              $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-yellow proj-btn-ani-lightbrown').addClass('proj-btn-ani-brown ani-brown');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-brown');
              },0700);
            }else if (that === "wine") {
              $('.project-box').find('#fever').addClass('hide-project');
              $('.project-box').find('#amloid').addClass('hide-project');
              $('.project-box').find('#nice').addClass('hide-project');

              $('.project-box').find('#wine').removeClass('hide-project');
              $('.page-img').addClass('slideInRight');
              $('.intro-up').addClass('animated fadeIn');
              $('.product-btn').removeClass('proj-btn-ani proj-btn-ani-yellow proj-btn-ani-yellow').addClass('proj-btn-ani-lightbrown ani-lightbrown');          //button
              setTimeout(function(){
                $('.product-btn').removeClass('ani-lightbrown');
              },0700);
            }
        });



  },
  render(){
    return (
      <div className="btn-wrapper-top">
        <ul className="pagenav-list">
          <li className="pagenav-list-item">
            <input type="radio" className="radio-nav" id="home" value="second_checkbox" name="page-nav"/>
          </li>
          <li className="pagenav-list-item">
            <input type="radio" className="radio-nav" id="fever" value="second_checkbox" name="page-nav" readOnly/>
          </li>
          <li className="pagenav-list-item">
            <input type="radio" className="radio-nav" id="amloid" value="second_checkbox" name="page-nav"/>
          </li>
          <li className="pagenav-list-item">
            <input type="radio" className="radio-nav" id="nice" value="second_checkbox" name="page-nav"/>
          </li>
          <li className="pagenav-list-item">
            <input type="radio" className="radio-nav" id="wine" value="second_checkbox" name="page-nav"/>
          </li>
        </ul>
      </div>

    )
  }
});
