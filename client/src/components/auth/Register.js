import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {
  Container,
  Form,
  Button,
  Segment,
  Grid,
  Divider,
  Icon,
} from "semantic-ui-react";
import "../pages/landing.css";

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
      <div id="backgroundImg">
        <Container
          style={{ marginTop: 100, opacity: 0.9, border: "2px solid black" }}
        >
          <Segment>
            <Grid columns={2} stackable>
              <Divider style={{ margin: 20 }} vertical>
                Or
              </Divider>

              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Link to="/">
                    <Icon name="home"></Icon> Back to home
                  </Link>
                  <div>
                    <h4 style={{ textAlign: "center", fontSize: 20 }}>
                      <b>Register Below</b>
                    </h4>
                    <Divider />
                  </div>
                  <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Field>
                      <label htmlFor="name">Name</label>
                      <Form.Input
                        icon="user"
                        iconPosition="left"
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
                      <Form.Input
                        icon="mail"
                        iconPosition="left"
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        spellCheck="false"
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
                      <Form.Input
                        icon="lock"
                        iconPosition="left"
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
                      <Form.Input
                        icon="lock"
                        iconPosition="left"
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
                    <Button primary type="submit">
                      Submit
                    </Button>
                  </Form>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <p style={{ fontSize: 20, fontWeight: "bold" }}>
                    Already have an account?
                    <br />
                    <br />
                    <Link to="/login">
                      <Button primary>Log In</Button>
                    </Link>
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
