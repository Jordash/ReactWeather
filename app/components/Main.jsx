var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {/* this renders the children of the 'Main' component */}
      {props.children}
    </div>
  );
};

module.exports = Main;
