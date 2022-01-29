import React, { useState } from "react";

type Props = {
  onSetInput: (input: string) => void;
};

const ButtonA: React.FC<Props> = ({ onSetInput }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
    onSetInput("B");
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>{"A"}</button>
      </div>
      {show && <div>clicked A</div>}
    </>
  );
};

export default ButtonA;
