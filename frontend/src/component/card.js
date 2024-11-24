import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {useNavigate} from "react-router-dom"

export default function MultiActionAreaCard(props) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300 , height:290}}>
      <CardActionArea
     sx={{
        '&:hover': {
          transform: 'none', // Prevents scaling or transformations
        },
      }}
      onClick={()=>{navigate(props.onclick)}}
      >
        <CardMedia
          component="img"
          height="100px"
          image={props.img_url}
          alt="image"
          sx={{height:170}}
        />
        <CardContent sx={{ paddingBottom:"0px"}} >
          <Typography gutterBottom variant="h5" component="div">
            {props.title ?props.title : "Title here"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary" style={{border:"1px solid black", borderRadius:"3px" , marginLeft:"5px", marginTop:"0px"}}
         onClick={()=>{navigate(props.onclick)}}
        >
          {props.button_text ? props.button_text : "Click Here"}
        </Button>
      </CardActions>
    </Card>
  );
}