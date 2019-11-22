import React from "react";
import MentorCard from "./MentorCard";

function MentorList({ bios }) {
  console.log(bios);
  return (
    <div className="d-flex justify-content-around flex-wrap px-2 mb-5">
      {bios && bios.map(bio => <MentorCard key={bio.id} bio={bio} />)}
    </div>
  );
}

export default MentorList;
