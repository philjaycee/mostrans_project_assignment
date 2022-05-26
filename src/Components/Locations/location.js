import React, { useEffect, useState } from "react";
import InputGroup from "../Filter/InputGroup";
import Container from '../Landpage/Container'
import Location_Search from "./location_search";
import Navbar from '../Navbar/navbar__'

const Location = ( ) => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { name } = info;
  let [number, setNumber] = useState();
  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <>
    <Navbar />
    <div className="container px-4">
      <div className="row mb-3 d-flex flex-sm-row ">
        <h1 className=" d-flex flex-sm-row  text-center mb-3 ">
          Location :  <span className=" px-2 text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
      </div>
      <div className=" d-flex flex-sm-row row ">
        <div className="col-lg-3 col-12 mb-4 ">
          <h4 className=" d-flex text-center ">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={20} />
        </div>
        <div className="d-flex col-lg-7 col-10 pl-2 mx-4 justify-content-center">
            <div className="row">
              <div className ="justify-content-center container  ">
            {results.map( (results, index) => 
                      <Container
                        key={index}
                        id={results.id}
                        image={results.image}
                        name={results.name}
                      />)}
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Location;