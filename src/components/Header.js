import React from "react";
import Button from "./button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

const headingStyle = {
  color: "red",
};
export default Header;
