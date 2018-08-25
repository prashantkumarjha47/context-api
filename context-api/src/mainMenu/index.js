import React from "react";
import Layout from "./Layout";
import Context, { themes } from "./Context";

class Index extends React.Component {
  render() {
    return (
      <Context.Provider value={themes}>
        <Layout />;
      </Context.Provider>
    );
  }
}
export default Index;
