import React from "react";
import Button from "./Button";

const lists=["All","Live","Gaming","News","Movies","Travelling","Dancing","Singing","Comedy","Stories","Tech"];

const Buttonlist = () => {
  return (
    <div className="flex">
      {lists.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default Buttonlist;
