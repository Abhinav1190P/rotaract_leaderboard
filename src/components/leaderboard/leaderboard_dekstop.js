import React, { Component } from "react";
import "../../css/styles.css";
import ListOfPPL from "./listcomponent/listofppl";
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";
import search from "../../icons/search.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
class Leaderboard_dekstop extends Component {
  state = {
    inputVal: "",
  };

  setVal = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  render() {
    return (
      <div className="main_div">
        <div className="leader_header_1">
          <div className="rotLogo">
            <img alt="al" src={ROTLOGO} />
          </div>

          <div className="sphere1"></div>
          <div className="sphere2"></div>
          <div className="sphere3"></div>
          <div className="sphere4"></div>
          <div className="sphere5"></div>

          {/* <ul className="navlinks">
            <li>Home</li>
            <li>Login</li>
            <li>Events</li>
            <li>Contact Us</li>
            <li>Announcements</li>
          </ul> */}

          <h1>LEADERBOARD</h1>

          <div className="inptgrp">
            <InputGroup>
              <FormControl
                placeholder="Username"
                value={this.state.inputVal}
                onChange={this.setVal}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <div className="header_seacrh icon">
              <img alt="srch" src={search} />
            </div>
          </div>

          <p className="leader_header_1_p">
            Maintained By Jai Prajapat - Human Resource & Development Director
          </p>

          <ButtonGroup className="bttngrp" aria-label="Basic example">
            <Button variant="secondary">Team</Button>
            <Button variant="secondary">Individual</Button>
          </ButtonGroup>
        </div>

        <div className="leader">
          <div className="leaderpeeps_container">
            <ListOfPPL keyword={this.state.inputVal} />
          </div>
        </div>

        <footer className="leader_board_footer">
          <p className="footer_text">FOOOTER</p>
        </footer>
      </div>
    );
  }
}

export default Leaderboard_dekstop;
