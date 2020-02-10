var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  render:
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=San Antonio'>San Antonio, TX</Link>
          </li>
          <li>
            <Link to='/?location=Green Bay'>Green Bay, WI</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
