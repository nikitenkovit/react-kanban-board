import React from "react";

const EmptyItem = () => {
  return (
    <div className="taskboard__item task task--empty task--processing">
      <p>Какойто тайтл</p>
    </div>
  );
};

export default EmptyItem;
