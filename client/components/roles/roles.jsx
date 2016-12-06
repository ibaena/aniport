import React from 'react';
import { mount } from 'react-mounter';

Roles = React.createClass({
  roles:[
    {_id:'0', name:'feverall', role:'Frontend Developer', agency: 'Vision Creative Group', year: '2016', team: 'None'},
    {_id:'1', name:'amloid', role:'Frontend Developer Toys', agency: 'Vision Creative Group', year: '2016', team: 'None'}
  ],
  componentDidMount(){
    $('.role-component-list').hide();
    setTimeout(function(){
      let roleload = window.location.pathname;

      if(roleload === '/feverall'){
        console.log("role feverall");

        $('#feverall-role-table').show();
        $('#amloid-role-table').hide();
      }else if (roleload === '/amloid'){
        $('#feverall-role-table').hide();
        $('#amloid-role-table').show();
      }
    },300);
  },
  render(){
    var roles = this.roles.map(function(item){
      return (
        <table className="role-component-list"  id={item.name+"role-table"} key={item._id}>
          <thead>
            <tr>
              <td><h4 className="role-component-td-header">Agency</h4></td>
              <td><h4 className="role-component-td-header">My Role</h4></td>
              <td><h4 className="role-component-td-header">Team</h4></td>
              <td><h4 className="role-component-td-header">Year</h4></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p className="role-component-td intro-up">{item.agency}</p></td>
              <td><p className="role-component-td intro-up">{item.role}</p></td>
              <td><p className="role-component-td intro-up">{item.team}</p></td>
              <td><p className="role-component-td intro-up">{item.year}</p></td>
            </tr>
          </tbody>
        </table>
      )
    });
    return (
      <div className="roles-bg">
        {roles}
      </div>
    )
  }
});
