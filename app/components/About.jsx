var React = require('react');

var About = (props) => {
  const cssStyle = {
    border: '1px solid #e6e6e6',
    marginTop: '20px',
    paddingTop: '20px'
  }
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application, built for The Complete React Web App Developer Course.</p>
      This app uses:
      <div className="grid-container">
        <div className="row cards">
          <div className="columns small-12 card" style={cssStyle}>
            <div className="card-section">
              <img src="https://get.foundation/assets/img/learn/features/customizable-sass-grid.svg" width="100px" height="auto" />
              <p>Styled with: <a href="https://get.foundation" target="_blank">Foundation</a></p>
            </div>{/* <!-- .card-section --> */}
          </div>{/* <!-- .card --> */}

          <div className="columns small-12 card" style={cssStyle}>
            <div className="card-section">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="100px" height="auto" alt="React JS Library"/>
              <p>Powered by: <a href="https://reactjs.org" target="_blank">React JS Framework</a></p>
            </div>{/* <!-- .card-section --> */}
          </div>{/* <!-- .card --> */}

          <div className="columns small-12 card" style={cssStyle}>
            <div className="card-section">
              <img src="https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png" width="234" height="100" />
              <p>API used: <a href="https://openweathermap.org" target="_blank">Open Weather Map</a></p>
            </div>{/* <!-- .card-section --> */}
          </div>{/* <!-- .card --> */}

          <div className="columns small-12 card" style={cssStyle}>
            <div className="card-section">
              <svg viewBox="0 0 100 31" xmlns="http://www.w3.org/2000/svg"><title>heroku-logo</title><path d="M3 0C1.13 0 0 1.11 0 2.903v24.194C0 28.883 1.13 30 3 30h21c1.863 0 3-1.11 3-2.903V2.903C26.994 1.11 25.863 0 24 0H3zm21.042 2c.508.006.958.448.958.929V27.07c0 .487-.45.929-.958.929H2.958C2.45 28 2 27.558 2 27.071V2.93c0-.488.45-.93.958-.93h21.084zM20 25h-2.781v-8.506c0-.774-.237-1.048-.468-1.208-1.396-.959-5.414-.042-7.834.916L7 17.012 7.006 5h2.816v7.917a20.99 20.99 0 0 1 1.882-.482c2.988-.643 5.184-.47 6.616.505.787.536 1.68 1.59 1.68 3.554V25zm-6-15h3.293A16.109 16.109 0 0 0 20 5h-3.287c-.49 1.188-1.385 3.188-2.713 5zM7 25v-7l3 3.5L7 25z" fill="%239E7CC1" fill-rule="evenodd"/></svg>
              <p>Hosted by: <a href="https://heroku.com">Heroku</a></p>
            </div>{/* <!-- .card-section --> */}
          </div>{/* <!-- .card --> */}

          <div className="columns small-12 card" style={cssStyle}>
            <div className="card-section">
              <svg viewBox="0 0 60 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              <p>Source Code: <a href="https://github.com/Jordash/ReactWeather" target="_blank">GitHub</a></p>
            </div>{/* <!-- .card-section --> */}
          </div>{/* <!-- .card --> */}

        </div>{/* <!-- .row .cards --> */}
      </div>{/* <!-- .grid-container --> */}
    </div>
  );
};

module.exports = About;
