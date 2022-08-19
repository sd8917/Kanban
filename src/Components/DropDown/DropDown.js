import React, { useEffect, useRef } from "react";

const DropDown = (props) => {
  const dropdownRef = useRef();
  const handleClick = (e) => {
    if (dropdownRef && !dropdownRef?.current?.contains(e?.target)) {
      if (props.onClose) {
        props.onClose();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      return document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="dropdown"
      style={{
        position: "absolute",
        top: "100%",
        right: "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default DropDown;
