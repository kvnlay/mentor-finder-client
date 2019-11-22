import React from "react";
import MentorCard from "./MentorCard";

function MentorConnections({ bios }) {
  console.log(bios);
  return (
    <div className="d-flex justify-content-around flex-wrap px-2 mb-5">
      {bios &&
        bios.map(bio => <MentorCard key={bio.person.id} bio={bio.person} />)}
    </div>
  );
}

export default MentorConnections;
