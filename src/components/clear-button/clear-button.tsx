import React from "react";

const ClearButton = () => {
  return (
    <button className="taskboard__button button button--clear" type="button">
      <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
        <rect fill="white" height="14.6667" transform="rotate(45 15.5374 5.16638)" width="1.83333" x="15.5374"
              y="5.16638"/>
        <rect fill="white" height="14.6667" transform="rotate(135 16.8337 15.5372)" width="1.83333" x="16.8337"
              y="15.5372"/>
      </svg>
      <span>Очистить</span>
    </button>
  );
};

export default ClearButton;
