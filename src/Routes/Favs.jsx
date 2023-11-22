
import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../context";

const Favs = () => {
  const [favs, setFavs] = useState([]);
  const { theme } = useContext(GlobalContext);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div className={`home-big ${theme}`}>
      {favs &&
        favs.length > 0 &&
        favs.map((dentist) => (
          <div key={dentist.id}>
            <Card dentist={dentist} />
          </div>
        ))}
    </div>
  );
};

export default Favs;
