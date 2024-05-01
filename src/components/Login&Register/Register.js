import React, {Component} from "react";
import "firebase/firestore";

import {auth} from "../auth";
import LandingMenu from "../LandingPage/LandingMenu";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    };
    this.handleClickRegisterUser = this.handleClickRegisterUser.bind(this);
  }
  handleClickRegisterUser(e) {
    var re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      this.password.value.length > 6 &&
      re.test(String(this.email.value).toLowerCase())
    ) {
      localStorage.setItem("user", this.username.value);
      auth(this.email.value, this.password.value);
      this.setState({
        msg: "User Registered :)",
      });
    }
    if (this.password.value.length < 6) {
      alert("Password must have at least 6 characters");
    }
    if (re.test(String(this.email.value).toLowerCase()) === false) {
      alert("wrong email adress");
    }
  }
  render() {
    return (
      <section className="limiter">
        <LandingMenu name="HOME" url="/" name2="LOGIN" url2="/login" />
        <div className="container-register">
          <div className="wrap-register">

            <form className="register-form validate-form">
              <span className="register-form-title">Register</span>

              <div className="wrap-input ">
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  ref={username => (this.username = username)}
                />
              </div>

              <div className="wrap-input ">
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                  ref={email => (this.email = email)}
                />
              </div>

              <div className="wrap-input " data-validate="Password is required">
                <input
                  className="input"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  required
                  ref={password => (this.password = password)}
                />
              </div>

              <div className="container-register-form-btn">
                <button
                  type="button"
                  className="register-form-btn"
                  onClick={event =>
                    this.handleClickRegisterUser(event, this.props.role)
                  }>
                  Register
                </button>
              </div>

              
              {this.state.msg !== "" ? (
                <h3 style={{color: "green"}}>{this.state.msg}</h3>
              ) : (
                <div />
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
