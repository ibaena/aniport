import React from 'react';
import { mount } from 'react-mounter';

Social = React.createClass({
  contact:[
    {_id:'0', name:'LinkedIn', url:'https://www.linkedin.com/in/ivanbaena', icon:'fa fa-linkedin' },
    {_id:'1', name:'Twitter', url:'https://twitter.com/NotThefakeIB', icon:'' },
    {_id:'2', name:'Github', url:'https://github.com/ibaena', icon:'' },
    {_id:'3', name:'Gab', url:'https://gab.ai/ibaena', icon:'' },
  ],
  sites:[
    {_id:'0', name:'TDP (In Development)', status:'*In Development Stage'},
    {_id:'1', name:'Finlandia (In Design)', status:'*In Design Stage'},
    {_id:'2', name:'Servometer', url:'https://servometer.com'},
    {_id:'3', name:'Maccaferys', url:'http://mccaffreys.com/'},
  ],
  componentDidMount(){
  },
  render(){
    var links = this.contact.map(function(item){
      return (
        <div className="social-text-contact" key={item._id}>
          <a href={item.url} className="contact-link-box" target="_blank">
            {item.name}
          </a>
        </div>
      )
    });
    var projects = this.sites.map(function(item){
      return (
        <div className="social-text" key={item._id}>
          <a href={item.url} className="project-link-box" target="_blank">
            {item.name}
          </a>
        </div>
      )
    });
    return (
      <div className="social-bg">
        <div className="social-image-bg"></div>
        <div id="social-overlay"></div>
        <div className="container-fluid no-padding landing-zdex" >
        <div className="social-box"></div>

          <div className="one-half">
            <h1 className="social-header">Other Projects:</h1>
              {projects}
          </div>
          <div className="one-half">
            <h1 className="social-header">Contact:</h1>
            {links}
          </div>

        </div>
      </div>
    )
  }
});
