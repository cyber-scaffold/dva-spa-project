import React from "react";
import { Layout } from "antd";

class BasicLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ width: "100%", height: "100%" }}>
        <Layout.Sider theme="dark" />
        <Layout>
          <Layout.Header style={{ background: "#ffffff" }} />
          <Layout.Content style={{ background: "#ffffff", margin: "24px 16px 0" }}>
            {children}
          </Layout.Content>
          <Layout.Footer>
            页脚
          </Layout.Footer>
        </Layout>
      </Layout>);
  };
};

export default BasicLayout;
