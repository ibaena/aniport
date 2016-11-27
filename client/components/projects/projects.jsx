import React from 'react';
import { mount } from 'react-mounter';

Projects = React.createClass({
  componentDidMount(){


    },
  render(){
    return (
      <div className="projects-wrapper">
        <Pagenav />
        <div className="project-container">
          <div className="project-box">
            <h3 className="header-title-small">Project</h3>
            <h1 className="header-title-large">Project</h1>
            <p className="product-description">Turned McDonald’s Netherlands app into a rich, personalised user experience. Enabling rewards, loyalty and geo-targeted offers with fun UI animations. With great team effort we managed to design and develop this app within 2-3 months.</p>
            <table className="role-list">
              <thead>
                <tr>
                  <td><h4 className="role-td-header">Role</h4></td>
                  <td><h4 className="role-td-header">Agency</h4></td>
                  <td><h4 className="role-td-header">Year</h4></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p className="role-td">Developer</p></td>
                  <td><p className="role-td">Developer</p></td>
                  <td><p className="role-td">Developer</p></td>
                </tr>
              </tbody>
            </table>
            <div className="product-image">
              <img src="http://placehold.it/350x350" className="animated slideInRight"/>
            </div>
            <div className="product-btn-wrapper">
              <div className="product-btn">Launch Project</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
});
