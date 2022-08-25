import React,{useEffect} from 'react'
import ExpericeCard from './ExpericeCard'
import exp from './Data/experience.json'
import AOS from 'aos';
import "aos/dist/aos.css";

const Experience = () => {
    useEffect(() => {
        // AOS.init({
        //   duration : 10000
        // });
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="values" className="values marginTop6">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Career History</h2>
                    <p>Experience</p>
                </header>

                <div className="row">
                    {exp.map((data, index) => (
                        <div key={index} className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                            <ExpericeCard data={data} />
                        </div>
                    ))}
                </div>

            </div>
        </section>)
}

export default Experience