import React from "react";
import { useSelector } from "react-redux";
import TesbihCard from "./TesbihCard";

const TesbihList = () => {
  const tesbihs = useSelector((state) => state.tesbihs);

  return (
    <div className="tesbih-list">
      {tesbihs.map((tesbih, index) => (
        <TesbihCard key={index} {...tesbih} />
      ))}
    </div>
  );
};

export default TesbihList;
