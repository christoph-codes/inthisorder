import React from "react";
import FullLogoLight from "../../components/FullLogoLight";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="hero">
          <div className="hero-content">
            <div className="uk-container">
              <FullLogoLight logoalign="center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
