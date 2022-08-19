import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import projectsData from './Data/projects.json';
import BlogCard from './BlogCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProjectLists = () => {
    return (
        <div style={{ margin: '14rem 20rem' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {projectsData.map((data, index) => (
                        <Grid item xs={2} sm={4} md={6} key={index}>
                            <BlogCard data={data}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default ProjectLists