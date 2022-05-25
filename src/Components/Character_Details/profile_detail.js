import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../Navbar/navbar__'

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  const [countRound,setCountRound] = useState(false)

  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  function location_revealed() {
      setCountRound(true)
      console.log(countRound)
  }

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);


  return (
      <>
      <Navbar />
        <div className="container d-flex justify-content-center mb-2">
          <div className="d-flex flex-column gap-3">
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
              <div className = "content py-2">
              <button className="btn btn-primary" onClick={() => {location_revealed()}}>
                      Assign Location
                </button>
              <h1 className="py-4 text-warning">
                {
                  countRound ?  [location?.name]    : <h5> </h5>
                }
                </h1>
              </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardDetails;