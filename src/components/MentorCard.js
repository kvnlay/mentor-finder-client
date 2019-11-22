import React from "react";
import { Link } from "react-router-dom";

export default function MentorCard({ bio }) {
  console.log(bio);
  const { name, professionalHeadline, publicId } = bio;
  let url = `/mentors/${publicId}`;
  return (
    <div className="card mb-2 bg-light " style={{ width: "18rem" }}>
      {/* <img className="card-img-top" src="..." alt="cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{professionalHeadline}</p>
        <Link to={url} className="btn btn-primary">
          View profile
        </Link>
      </div>
    </div>
  );
}
