import React from 'react';
import { mount } from 'react-mounter';

Pagenav = React.createClass({
  componentDidMount(){
    $('input:checkbox').change(
        function(){
          console.log(this.id);
          let that = this.id;


            if (that === "home") {
              $('.landing-bg').removeClass('slideUp');
              $('.landing-bg').addClass('slideUpReturn');
              setTimeout(function(){
                  $('#'+that).prop('checked', false)
              },1000)
            }
        });

  },
  render(){
    return (
      <div className="btn-wrapper-top">
        <ul className="pagenav-list">
          <li className="pagenav-list-item">
            <input type="checkbox" id="home" value="second_checkbox" />
          </li>
          <li className="pagenav-list-item">
            <input type="checkbox" id="cbox2" value="second_checkbox" />
          </li>
          <li className="pagenav-list-item">
            <input type="checkbox" id="cbox2" value="second_checkbox" />
          </li>
        </ul>
      </div>

    )
  }
});
