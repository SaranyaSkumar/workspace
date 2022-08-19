import React from 'react'

const Skillcard = ({data}) => {
    return (
        <div className="box">
            <img src={require(`./img/${data.image}`)} className="img-fluid" alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default Skillcard