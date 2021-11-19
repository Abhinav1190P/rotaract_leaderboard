import React, { Component } from "react";
import "../../css/styles.css";
class Announcement extends Component {
  render() {
    return (
      <div className="anncontainer">

<div className= "header-ann">
    Announcement
</div>

<div className="sphere-ann-1"></div>
<div className="sphere-ann-2"></div>
<div className="sphere-ann-3"></div>
<div className="sphere-ann-4"></div>
<div className="sphere-ann-5"></div>


        <section class="FlexContainerannouncement">
          <div className="flexcont secondmain">
              <div className="second--container">
              <div className = "inner second--inner-1"></div>
              <div className="inner-2">By Aakarsh<br/>President</div>
              </div>
              <div className = "inner second--inner-2">I am President</div>
              <div className = "inner second--inner-3">On 1st November 2021</div>
              <div className = "inner second--inner-4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div>
          </div>
          <div className="flexcont thirdmain">
          <div className="third--container">
              <div className = "inner third--inner-1"></div>
              <div className="inner-2">By Aakarsh<br/>President</div>
              </div>
         
              <div className = "inner third--inner-2">I am Veg</div>
              <div className = "inner third--inner-3">On 1st November 2021</div>
          </div>
        </section>
      </div>
    );
  }
}
export default Announcement;
