var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  //create function to perform the weather search
  //this is called by WeatherForm and the location is passed into it
  handleSearch: function (location) {
    //allows us to access the this value inside the function below
    var that = this;
    //before location search begins set isLoading state to true
    this.setState({
      isLoading: true,
      // clear any previously created error messages
      errorMessage: undefined
    });

    //call getTemp function to make API call
    //pass in location
    //attach promise (success function followed by error function)
    //pass in temp to success function of promise
    //pass in errorMessage to error function of promise
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    //do a check before render method
    function renderMessage() {
      //check to see if the state isLoading is true, if it is, show a temp message
      if (isLoading){
        return <h3 className="text-center">Fetching weather..</h3>;
      }
      //check to see if the temp and location vars exist, if they do, show the location and temp
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError () {
      //check if there is an error message returned from API call
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {/* render the renderMessage function from above */}
        {renderMessage()}
        {/* call renderError function */}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
