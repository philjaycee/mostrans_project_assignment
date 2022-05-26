import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../Navbar/navbar__'
import LandPage from '../Landpage/LandPage'

/*
useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(allPokemons);
    })();
  }, [api]);

   useEffect(() => {
      updateFetchedData(allPokemons);
  }, );

*/

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  const [countRound,setCountRound] = useState(false)
  let { name,location, origin, gender, image, status, species } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  function location_revealed() {
      setCountRound(true)
      console.log(countRound)
  }

  
  return (
      <>
      <Navbar />
        <div className="container d-flex mb-2 px-4 justify-content-center">
          <div className="d-flex  flex-column gap-3 justify-content-center px-5 ">
            <h1 className="text-center">{name}</h1>
            <img className="img-fluid" src={image} alt="" />
            <div className="content">
              <div className="">
                <span className="fw-bold">Gender : </span>
                {gender}
              </div>
              <div className="">
                <span className="fw-bold">Origin: </span>
                {origin?.name}
              </div>
              <div className="">
                <span className="fw-bold">Species: </span>
                {species}
              </div>
              <div className="">
                <span className="fw-bold"> Location: </span>
                {location?.name}
              </div>
              <div className = "content py-2">
              </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardDetails;