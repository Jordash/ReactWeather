var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    //first get the value from the input field
    var location = this.refs.location.value;

    //check to see if a location has been entered
    if(location.length > 0){
      //first, clear the input field
      this.refs.location.value = '';

      //second, call the parent function to perform the search, passing in the location
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="location" placeholder="Search weather by city" />
        <button className="button hollow expanded">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
