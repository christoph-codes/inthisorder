import React from "react";
import logo from "../assets/itoapp_logo_dark@2x.png";

class LogoDark extends React.Component {
    render() {
        let alignstyle;
        if (this.props.logoalign) {
          alignstyle = "uk-text-" + this.props.logoalign;
        }
        return (
          <div
            className={'logodark ' + alignstyle}
            logoalign={this.props.logoalign}
          >
            <img src={logo} alt="In This Order App" />
          </div>
        );
      }
}

export default LogoDark;
