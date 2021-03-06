import React from 'react';
import { mount } from 'react-mounter';

Roles = React.createClass({
  roles:[
    {_id:'0', name:'feverall', role:'Frontend Developer Fever', agency: 'Vision Creative Group', year: '2016', team: 'None'},
    {_id:'1', name:'amloid', role:'Frontend Developer Toys', agency: 'Vision Creative Group', year: '2016', team: 'None'},
    {_id:'2', name:'nicenclean', role:'Frontend Developer Clean', agency: 'Vision Creative Group', year: '2016', team: 'None'},
    {_id:'3', name:'wine4food', role:'Frontend Developer Wine', agency: 'Vision Creative Group', year: '2016', team: 'None'},
  ],
  componentDidMount(){

    $('#amloid-role-table').hide();
    $('#nicenclean-role-table').hide();
    $('#wine4food-role-table').hide();
    $('#feverall-role-table').hide();

    setTimeout(function(){
    let roleload = window.location.pathname;
    if (roleload === '/feverall'){
      $('#feverall-role-table').show();

      $('#amloid-role-table').hide();
      $('#nicenclean-role-table').hide();
      $('#wine4food-role-table').hide();
    }else if (roleload === '/amloid'){
      $('#amloid-role-table').show();
      //Hide others
      $('#feverall-role-table').hide();
      $('#nicenclean-role-table').hide();
      $('#wine4food-role-table').hide();
    }else if (roleload === '/nicenclean'){
      $('#nicenclean-role-table').show();
      //Hide others
      $('#feverall-role-table').hide();
      $('#amloid-role-table').hide();
      $('#wine4food-role-table').hide();
    }else if (roleload === '/wine4food'){
      $('#wine4food-role-table').show();
      //Hide others
      $('#feverall-role-table').hide();
      $('#amloid-role-table').hide();
      $('#nicenclean-role-table').hide();
    }
  },300);
    $('.nav-link').on('click tap', function(){
      let roleUrl = $(this).attr('href');
      if (roleUrl === '/feverall'){
        $('#feverall-role-table').show();

        $('#amloid-role-table').hide();
        $('#nicenclean-role-table').hide();
        $('#wine4food-role-table').hide();
      }else if (roleUrl === '/amloid'){
        $('#amloid-role-table').show();
        //Hide others
        $('#feverall-role-table').hide();
        $('#nicenclean-role-table').hide();
        $('#wine4food-role-table').hide();
      }else if (roleUrl === '/nicenclean'){
        $('#nicenclean-role-table').show();
        //Hide others
        $('#feverall-role-table').hide();
        $('#amloid-role-table').hide();
        $('#wine4food-role-table').hide();
      }else if (roleUrl === '/wine4food'){
        $('#wine4food-role-table').show();
        //Hide others
        $('#feverall-role-table').hide();
        $('#amloid-role-table').hide();
        $('#nicenclean-role-table').hide();
      }
    });
    //fade DOM element in on scroll
    var $animation_elements = $('.roles-bg');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
                $element.addClass('bounce-up-in-view');
        } else {
          $element.removeClass('bounce-up-in-view');
        }
      });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');


  },
  render(){
    var roles = this.roles.map(function(item){
      return (
        <table className="role-component-list"  id={item.name+"-role-table"} key={item._id}>
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
      <div className="roles-bg bounce-up">
        {roles}
      </div>
    )
  }
});
