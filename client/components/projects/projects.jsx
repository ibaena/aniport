import React from 'react';
import { mount } from 'react-mounter';

Projects = React.createClass({
  componentDidMount(){
    $('.btn-home').on('click', function(){
      $('.landing-bg').removeClass('slideUp');
      $('.landing-bg').addClass('slideUpReturn');
    });
  },
  render(){
    return (
      <div className="projects-wrapper">
        <div className="btn-wrapper-top">
          <span className="btn-home">
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </span>
        </div>
      </div>

    )
  }
});
