import React from 'react';
import { mount } from 'react-mounter';

Projects = React.createClass({
  project:[
    {_id:'0', hash:'fever', hash_img:'fever-img', small_name:'Feverall', large_name:'FEVERALL', description:'FeverAll® is a suppository form of acetaminophen, the common pain reliever and fever remedy. Great for children who won\'t or can\'t take medication orally.', role:'Front End Developer', agency:'Vision Creative', year:'2016', display:'box-fever hide-project'},
    {_id:'1', hash:'amloid', hash_img:'amloid-img', small_name:'Amloid', large_name:'AMLOID', description:'Amloid proudly brings 100 years of unwavering commitment to its founders vision: to create quality, affordable, toys.Innovative design and exacting attention to detail continue to produce unique product lines that have delighted generations of children around the world.', role:'Front End Developer', agency:'Vision Creative', year:'2016', display:' box-amloid hide-project '},
  ],
  componentDidMount(){


    },
  render(){
    var projects = this.project.map(function(item){
      return (
        <div key={item._id} id={item.hash} className={item.display}>
          <h3 className="header-title-small">{item.large_name}</h3>
          <h1 className="header-title-large">{item.small_name}</h1>
          <p className="product-description">{item.description}</p>
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
                <td><p className="role-td">{item.role}</p></td>
                <td><p className="role-td">{item.agency}</p></td>
                <td><p className="role-td">{item.year}</p></td>
              </tr>
            </tbody>
          </table>
          <div className="product-image">
            <img src="http://placehold.it/350x350" className="animated boo" id={item.hash_img}/>
          </div>
          <div className="product-btn-wrapper">
            <div className="product-btn">Launch Project</div>
          </div>
        </div>
      )
    });
    return (
      <div className="projects-wrapper" >
        <Pagenav />
        <div className="project-container">
          <div className="project-box">
            {projects}
          </div>
        </div>
      </div>

    )
  }
});
