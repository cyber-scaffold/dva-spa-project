import React from "react";
import { elementType } from "prop-types";

class BasicLayout extends React.Component {

  static propTypes = {
    children: elementType.isRequired()
  }

  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return children;
  }

};

export default BasicLayout;
