import React, { ReactChildren } from "react";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps {
  children: ReactChildren
};

interface IState { };

class BasicLayout extends React.Component<IProps, IState>{

  state: IState = {

  };

  render(): ReactChildren {
    const { children } = this.props;
    return children;
  };

};

export default BasicLayout;
