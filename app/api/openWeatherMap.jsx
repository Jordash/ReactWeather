var axios = require('axios');

//My API key: 43f17d1984e94868e76dd6ad6dd3048d

//start with our query url with added imperial units
//includes my API key
const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=43f17d1984e94868e76dd6ad6dd3048d&units=imperial';

//Export an object that contains the temp
module.exports = {
  //takes the location as param
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    //build URL which contains encoded URL and provided location
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //make API call with axios passing in URL
    return axios.get(requestUrl).then(function (res) {

      // debugger;

      //use promise and error checking to validate result
      if(res.data.cod && res.data.message) {
        //if above is true, something went wrong, throw error
        throw new Error(res.data.message);
      }
      // if axios call succeeds, just return the temp
      else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
