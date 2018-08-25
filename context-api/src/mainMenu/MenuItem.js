import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
export default props => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Home
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem onClick={() => props.onClick(props.option1.name)}>
        {props.option1.name}
      </DropdownItem>
      <DropdownItem onClick={() => props.onClick(props.option2.name)}>
        {props.option2.name}
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);
