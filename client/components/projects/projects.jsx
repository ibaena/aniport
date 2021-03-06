import React from 'react';
import { mount } from 'react-mounter';

Projects = React.createClass({
  project:[
    {_id:'0', url:'/feverall', hash:'fever', btn_id:'fever-btn', hash_img:'fever-img', small_name:'Feverall', large_name:'FEVERALL', description:'FeverAll® is a suppository form of acetaminophen, the common pain reliever and fever remedy. Great for children who won\'t or can\'t take medication orally.', role:'Front End Developer', agency:'Vision Creative', year:'2016', display:'col-xs-12 box-fever hide-project', image:'images/nav/feverthree.png'},
    {_id:'1', url:'/amloid', hash:'amloid', btn_id:'amloid-btn', hash_img:'amloid-img', small_name:'Amloid', large_name:'AMLOID', description:'Amloid proudly brings 100 years of unwavering commitment to its founders vision: to create quality, affordable, toys.Innovative design and exacting attention to detail continue to produce unique product lines that have delighted generations of children around the world.', role:'Front End Developer', agency:'Vision Creative', year:'2016', display:'col-xs-12 box-amloid hide-project ', image:'images/nav/bothamloid.png'},
    {_id:'2', url:'/nicenclean', hash:'nice', btn_id:'nice-btn', hash_img:'nicenclean-img', small_name:'Tampas Downtown', large_name:'TAMPAS DOWNTOWN', description:'Where to Start With so many options for things to do in Tampa\'s Downtown, the challenge is not deciding where to go, it\'s deciding where to start.', role:'Interactive Map & Frontend Developer', agency:'Vision Creative', year:'2016', display:'col-xs-12 box-amloid hide-project ', image:'images/nav/tdpboth.png'},
    {_id:'3', url:'/wine4food', hash:'wine', btn_id:'wine-btn', hash_img:'wine-img', small_name:'Wine 4 Food', large_name:'WINE 4 FOOD', description:'Wine4Food is the number one destination for everything Wine & Food Related. Wine Tastings & Wine Dinner Party Ideas to Food & Wine Pairings and Recipes.', role:'Front End Developer', agency:'Vision Creative', year:'2016', display:'col-xs-12 box-amloid hide-project ', image:'images/nav/wineboth.png'},
  ],
  componentDidMount(){


    },
  render(){
    var projects = this.project.map(function(item){
      return (
        <div key={item._id} id={item.hash} className={item.display}>
          <h3 className="header-title-small "><span className="intro-up">{item.large_name}</span></h3>
          <h1 className="header-title-large intro-up"><span>{item.small_name}</span></h1>
          <p className="product-description intro-up"><span>{item.description}</span></p>
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
                <td><p className="role-td intro-up">{item.role}</p></td>
                <td><p className="role-td intro-up">{item.agency}</p></td>
                <td><p className="role-td intro-up">{item.year}</p></td>
              </tr>
            </tbody>
          </table>
          <div className="product-image">
            <img src={item.image} className="page-img img-responsive animated boo" id={item.hash_img}/>
          </div>
          <div className="product-btn-wrapper">
            <a href={item.url} id={item.btn_id} className="product-btn">Launch Project</a>
          </div>
        </div>
      )
    });
    return (
      <div className="projects-wrapper" >
        <Pagenav />
        <div className="project-container row">
          <div className="project-box col-xs-12">
            {projects}
          </div>
        </div>
      </div>

    )
  }
});
