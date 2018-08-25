import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";
import Context from "./Context";
import MenuItems from "./MenuItem";
import Content from "./Content";
class Layout extends React.Component {
  state = {
    isOpen: false, // shows the state of menu dropdown
    content: "" // shows the content of the component clicked
  };
  /*
  * To toggle the dropdown
  */
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  /*
  * To render the clicked component
  */
  onMenuItemClick = name => {
    this.setState({ content: name });
  };

  render() {
    return (
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Context.Consumer>
                {context => (
                  <MenuItems onClick={this.onMenuItemClick} {...context} />
                )}
              </Context.Consumer>
            </Nav>
          </Collapse>
        </Navbar>
        <Content {...this.state} />
      </Container>
    );
  }
}
export default Layout;
