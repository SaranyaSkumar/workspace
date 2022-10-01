import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const BlogCard = ({data}) => {

    return (
        <Card sx={{ maxWidth: '100%', margin: '1rem' }}>
            <CardActionArea href={data.url}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require(`./img/${data.image}`)}
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default BlogCard