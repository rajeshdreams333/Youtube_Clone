import React from "react";
import Button from "./Button";

// const list=["All","Live","Gaming","News","Movies","Travelling","Dancing","Singing","Comedy","Stories"];

const Buttonlist = (list) => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Live"/>
      <Button name="Gaming"/>
      <Button name="News"/>
      <Button name="Movies"/>
      <Button name="Travelling"/>
      <Button name="Dancing"/>
      <Button name="Singing"/>
      <Button name="Comedy"/>
      
    </div>
  );
};

export default Buttonlist;
