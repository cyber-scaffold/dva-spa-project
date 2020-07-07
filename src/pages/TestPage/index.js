import css from "./index.module.scss";
import React from "react";


class ComponentName extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className={css.TestPage}>
        这是TestPage
      </div>);
  };
};

export default ComponentName;
