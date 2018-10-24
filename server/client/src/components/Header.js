import React, { Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
        
    }
  }

    render(){
      console.log(this.props);
      return (
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="/" className="left brand-logo"> Yeet</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/auth/google">Login With Google</a></li>
            </ul>
          </div>
        </nav>
      );
    }
}

function mapStateToProps(state){
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);