import React from 'react'
import { Link } from 'react-router-dom'

const Container = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small> Number : {id} </small></div>
           
            <div className="detail-wrapper">
                <h3>{name}</h3>
            </div>
            <Link
          style={{ textDecoration: "none" }}
          to={`/${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >  <img src={image} alt={name} /> </Link>
        </div>
    )
}

export default Container