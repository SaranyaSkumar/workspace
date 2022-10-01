import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
// import product_list from './Data/products'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BASEURL } from './config/config'
import { HashLoader } from 'react-spinners'

const Products_listing = () => {
    const [Products, setProducts] = useState("");

    const fetchProducts = () => {
        fetch(
            `${BASEURL}/v1/products`)
            .then((response) => response.json())
            .then(response => {
                setProducts(response.result);
            })
    }

    useEffect(() => {
        fetchProducts();
        AOS.init();
        AOS.refresh();
    }, []);
    // let catagories = Object.keys(product_list);
    return (
        <>
            <section id="values" className="values marginTop6">

                <div className="container" data-aos="fade-up">

                    {Products ? (
                        <>
                            <header className="section-header">
                                <h2>Product Listing</h2>
                                <h1 >Clothing and Accessories</h1>
                            </header>

                            <div className="row">
                                {Products.map((data, index) => (
                                    <div key={index} className="col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="600">
                                        <ProductCard data={data} />
                                    </div>
                                ))}
                            </div>
                        </>

                    ) : (
                        <div className='loader'>
                            <HashLoader color="#4c6ff1" />
                        </div>
                    )}
                </div>
            </section>
            {/* <div style={{ margin: '14rem 20rem' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {product_list['Clothing and Accessories'].map((data, index) => (
                            <Grid item xs={3} sm={4} md={4} key={index}>
                                <ProductCard data={data} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div> */}
            {/* <section id="values" className="values marginTop6">

<div className="container" data-aos="fade-up">

  <header className="section-header">
    <h2>Career History</h2>
    <p>Experience</p>
  </header>

  <div className="row">
    {product_list['Clothing and Accessories'].map((data, index) => (
      <div key={index} className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
        <ProductCard data={data} />
      </div>
    ))}
  </div>
</div>
</section> */}
        </>
    )
}

export default Products_listing