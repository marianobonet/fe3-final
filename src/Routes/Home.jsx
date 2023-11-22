import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../context";

const Home = () => {
  const { data, setData, theme } = useContext(GlobalContext);

  useEffect(() => {
    setData();
  }, [setData]);


  return (
    
    <div className={`home-big ${theme}`}>
      
      <div className="home">
        {data &&
          data.map((dentist) => (
            <div key={dentist.id}>
              <Card dentist={dentist} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
