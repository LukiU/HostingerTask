import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="logo">
      	<img src="https://raw.githubusercontent.com/hostinger/task-frontend/master/assets/logo.png" height='50%' width='50%' alt='Logo'/>
      </div>

    <nav>
      	<ul>
      		<li className="first">
      			<a href="#">WEB HOSTING</a>
      			</li>
      		<li><div className="prefixSale">ON SALE</div>
      			<a href="#">CLOUDHOSTING</a>
      			</li>
      		<li>
      			<a href="#">VPS HOSTING</a>
      			</li>
      		<li>
      			<a href="#">DOMAIN CHECKER</a>
      			</li>
      		<li className="last">
      			<a href="#">WEBSITE BUILDER</a>
      		</li>
     	</ul>
    </nav>
      </div>
    );
  }
}

export default Header;
