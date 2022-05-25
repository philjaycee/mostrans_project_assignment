import React, { useEffect, useState } from "react";
import InputGroup from "../Filter/InputGroup";
import Container from '../Landpage/Container'
import Location_Search from "./location_search";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

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
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-2">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={20} />
        </div>
        <div className="col-lg-8 col-10">
            <div className="row">
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
  );
};

export default Location;