import React,{useEffect} from 'react';
import projectsData from './Data/skills.json';
import Skillcard from './Skillcard';
import AOS from 'aos';
import "aos/dist/aos.css";


const Skills = () => {
    useEffect(() => {
        // AOS.init({
        //   duration : 10000
        // });
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="values" className="values">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>What I do</h2>
                    <p>Skills and Experience</p>
                </header>

                <div className="row">
                    {projectsData.map((data, index) => (
                        <div key={index} className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                            <Skillcard data={data} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills