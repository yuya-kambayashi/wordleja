import React, { useState } from "react";

type Props = {};

const ButtonA: React.FC<Props> = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
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
