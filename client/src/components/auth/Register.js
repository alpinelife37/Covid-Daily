import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Form, Button } from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <Link to="/">Back to home</Link>
        <div>
          <h4>
            <b>Register</b> below
          </h4>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />
            <span className="red-text">{errors.name}</span>
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              spellcheck="false"
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email,
              })}
            />
            <span className="red-text">{errors.email}</span>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password,
              })}
            />
            <span className="red-text">{errors.password}</span>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2,
              })}
            />
            <span className="red-text">{errors.password2}</span>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
