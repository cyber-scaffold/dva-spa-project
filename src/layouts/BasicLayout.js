import React from "react";
import { Layout } from "antd";

class BasicLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  render() {
    const { children } = this.props;
    return children;
  };
};

export default BasicLayout;
