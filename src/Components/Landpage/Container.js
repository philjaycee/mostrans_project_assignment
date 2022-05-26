import React from 'react'
import { Link } from 'react-router-dom'
import './landpage.css'

const Container = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className ="all-container">
        <div className={style}>
            <div className="number"><small> Number : {id} </small></div>
            <div className="detail-wrapper">
                <h3>{name}</h3>
            </div>
            <Link
          style={{ textDecoration: "none" }}
          to={`/details/${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >  <img src={image} alt={name} /> </Link>
        </div>
        </div>
    )
}

export default Container