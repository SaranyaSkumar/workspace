import React from 'react'

const ProductCard = ({ data }) => {
    console.log("data", data);
    return (
        <div className="box">
            <img src={require(`./img/${data.image}`)} className="img-fluid" alt="" width='80%' height='100%' />
            <div style={{textAlign:'left'}}>
                <h3>{data.title}</h3>
                <span style={{textDecoration:'line-through'}}>₹{data.cut_price}</span>&nbsp;&nbsp;
                <span>₹{data.actual_price}</span>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default ProductCard