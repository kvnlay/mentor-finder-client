import React, { useEffect, useState } from "react";
import Axios from "axios";
import MentorList from "./MentorList";

export default function BioConnections({ publicId }) {
  const [bios, setBios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://cors-anywhere.herokuapp.com/https://torre.bio/api/people/${publicId}/connections?limit=10`;
  useEffect(() => {
    Axios.get(url)
      .then(response => {
        setIsLoading(true);
        return response.data;
      })
      .then(bios => {
        setBios(bios);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);

  if (bios) {
    return isLoading ? <div>Loading</div> : <MentorList bios={bios} />;
  }
}
