import React, { Component} from 'react';

class Header extends Component {
    render(){
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="left brand-logo">Yeet</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/auth/google">Login With Google</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;