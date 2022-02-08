import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigation = useNavigate();

  return (
    <>
      <div>{"Wordle"}</div>
    </>
  );
};

export default Header;
