import React, { Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
      case null:
        return 'Still deciding';
      case false:
        return 'im logged out';
      default:
        return 'yeet' || <a href='/auth/google'> Login with google</a>;
    }
  }

    render(){
      console.log(this.props);
      return (
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="/" className="left brand-logo"> Yeet</a>
            <ul id="nav-mobile" className="right">
              <li>{this.renderContent()}</li>
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