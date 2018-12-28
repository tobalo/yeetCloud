import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth){
      case null:
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login With Google</a></li>
          );
      default:
        return [
          <li key="1"><Payments/></li>,
          <li key="2"><a href='/auth/logout'>Log Out</a></li>
        ];
    }
  }

    render() {
      console.log(this.props);
      return (
        <nav>
          <div className="nav-wrapper grey darken-4">
            <Link to={this.props.auth ? '/accounts' : '/'} className="left brand-logo"> Yeet Cloud</Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      );
    }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);