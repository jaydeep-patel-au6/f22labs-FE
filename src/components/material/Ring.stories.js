import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ring.css'
import Pic from './1.png'

export default {
    title: 'ring',
  };

  const defaultProps = {
    
    // m: 1,
    border: 1,
    style: { width: '20rem', height: '20rem' },
    bgcolor:'blue',
    
  };

export function Ring1() {
  return (
   <div style={{backgroundColor:'blue', width:'100%'}}><br></br>
       <div style={{margin:'10%'}}>
       <div>
       <Box borderColor="white" {...defaultProps}  component="span" display="block" >
            <img src={Pic} style={{width:'100%'}}></img>
        </Box>
       </div>
       <div>
       <Box borderTop={0} borderColor="white" {...defaultProps}  component="span" display="block" >
        <br></br><p style={{margin:'10%', color:'white', fontSize:'2rem'}}><b>Demo</b></p>
        <p style={{margin:'10%', color:'white', fontSize:'1.5rem'}}>Demo</p>
        <p style={{margin:'10%', color:'white', fontSize:'1.5rem', textDecorationLine:'underline'}}>Demo</p>
        </Box>
         
       </div>    
       </div><br></br>
       
   </div>
  );
}
