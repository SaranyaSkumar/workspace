import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import projectsData from './Data/projects.json';
import BlogCard from './BlogCard';


const ProjectLists = () => {
    return (
        <>
            <section id="values" className="values marginTop6">

                <div className="container" >


                    <header className="section-header">
                        <h2>Self learning</h2>
                        <h1>Projects</h1>
                    </header>

                    <div className="row">
                        {projectsData.map((data, index) => (
                            <Grid item xs={2} sm={4} md={6} key={index}>
                                <BlogCard data={data} />
                            </Grid>
                        ))}
                    </div>

                </div>
            </section>


        </>
    )
}

export default ProjectLists
{/* <div key={index} className="col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="600">
                                <BlogCard data={data} />
                            </div> */}

/* <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   {projectsData.map((data, index) => (
                       <Grid item xs={2} sm={4} md={6} key={index}>
                           <BlogCard data={data}/>
                       </Grid>
                   ))}
               </Grid>
           </Box> */