import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import BioConnections from "./BioConnections";
import "../App.css";

export default function MentorDetail(props) {
  const { publicId } = useParams();
  const [bio, setbio] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/${publicId}`
    )
      .then(response => setbio(response.data))
      .catch(err => console.log(err));
  }, [publicId]);

  if (bio) {
    console.log(bio);
    return (
      <div className="d-flex flex-column">
        <div className="bio_info d-flex">
          <div className="bio_img">
            <img
              src={bio.person.picture}
              className="img-thumbnail rounded mx-auto d-block "
              alt="mentor pic"
              style={{ height: "200px", maxWidth: "100%" }}
            ></img>
          </div>
          <div className="bio_data">
            <p>Name: {bio.person.name}</p>
            <p>Headline: {bio.person.professionalHeadline}</p>
            <p>Location: {bio.person.location.name || `worldwide`}</p>
            Languages:{" "}
            {bio.languages.map(lang => (
              <span key={lang.language}>{lang.language}, </span>
            ))}
          </div>
        </div>
        <h3 className="mb-5">{bio.person.name} connections</h3>
        <div className="connections">
          <BioConnections publicId={publicId} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <p>...loading</p>
      </div>
    );
  }
}
