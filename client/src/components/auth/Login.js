import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Form, Button, Segment, Grid, Divider, Icon } from "semantic-ui-react";
import "../pages/landing.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div id="backgroundImg">
        <Container style={{ marginTop: 100, opacity: 0.9, border: "2px solid black" }}>
          <Segment>
            <Grid columns={2} stackable>
              <Divider vertical>Or</Divider>
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Link to="/"><Icon name="home"></Icon> Back to home</Link>

                  <h4 style={{ textAlign: "center", fontSize: 20 }}>
                    <b>Login Below</b>
                  </h4>
                  <Divider />
                  <Form noValidate onSubmit={this.onSubmit}>
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
                          invalid: errors.email || errors.emailnotfound,
                        })}
                      />
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
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
                          invalid: errors.password || errors.passwordincorrect,
                        })}
                      />
                      <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                    </Form.Field>
                    <Button type="submit">Login</Button>
                  </Form>
                </Grid.Column>
                <Grid.Column>
                  <p className="grey-text text-darken-1">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
