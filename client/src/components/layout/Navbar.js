import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Menu, Segment, Button } from "semantic-ui-react";
import DropdownCountrySearchSelection from "../layout/Countrydropdown";

class Navbar extends Component {
  state = {activeItem: "Dashboard"};
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { user } = this.props.auth;
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/dashboard">
            <Menu.Item as="span"
              name="Dashboard"
              active={activeItem === "Dashboard"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/symptomtracker">
            <Menu.Item as="span"
              name="Symptoms"
              active={activeItem === "Symptoms"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/resources">
            <Menu.Item as="span"
              name="Resources"
              active={activeItem === "Resources"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Menu.Item position="right">
            <DropdownCountrySearchSelection style={{marginRight: 15}}/>
            {user.name.split(" ")[0]}
            <Button style={{marginLeft: 15}} onClick={this.onLogoutClick}>Log Out</Button>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
