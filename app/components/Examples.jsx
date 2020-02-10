var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  render:
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
        <li>
          <Link to='/?location=Green Bay'>Green Bay, WI</Link>
        </li>
        <li>
            <Link to='/?location=San Antonio'>San Antonio, TX</Link>
        </li>
        <li>
            <Link to='/?location=Minneapolis'>Minneapolis, MN</Link>
        </li>
        <li>
          <Link to='/?location=Huntsville'>Huntsville, AL</Link>
        </li>
        <li>
          <Link to='/?location=Negaunee'>Negaunee, MI</Link>
        </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
