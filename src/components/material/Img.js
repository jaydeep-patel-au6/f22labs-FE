import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 540,
  },
});

export default function Img(props) {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
          <center>
      <CardActionArea>
        
          <Typography gutterBottom variant="h5" component="h2" style={{color:'#3f51b5', fontSize:'3rem'}}>
            Sidney
          </Typography>
         
        <CardMedia
          className={classes.media}
          image="https://frankdarling.com/wp-content/uploads/2018/10/sidney.jpg.webp"
          title="Contemplative Reptile"
        />
        <CardContent>
         
          <Typography variant="body" color="textSecondary" component="p" style={{color:'#3f51b5'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography><br></br>

         <p style={{textDecoration:'underline', color:'#3f51b5', fontSize:'1.5rem'}}>MEET SIDNEY</p>
        </CardContent>
      </CardActionArea>
    
      </center>

    </div>
  );
}
