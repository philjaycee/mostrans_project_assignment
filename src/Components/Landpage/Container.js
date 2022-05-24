import React from 'react'

const Container = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default Container