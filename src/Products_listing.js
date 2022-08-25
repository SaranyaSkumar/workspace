import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import product_list from './Data/products'
import AOS from 'aos';
import "aos/dist/aos.css";

const Products_listing = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    let catagories = Object.keys(product_list);
    return (
        <>
            <section id="values" className="values marginTop6">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2>Product Listing</h2>
                        <p>{catagories[0]}</p>
                    </header>
                    <div className="row">
                        {product_list['Clothing and Accessories'].map((data, index) => (
                            <div key={index} className="col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="600">
                                <ProductCard data={data} />
                            </div>
                        ))}
                    </div>
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