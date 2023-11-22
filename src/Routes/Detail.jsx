import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setDentist(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!dentist) {
    return <div>No dentist selected, please go back...</div>;
  }

  return (
    <div>
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <p>ID: {dentist.id}</p>
    </div>
  );
};

export default Detail;
