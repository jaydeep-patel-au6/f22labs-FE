import React from 'react'
import Box from '@material-ui/core/Button';

export default {
    title: 'Header text',
  };

  

export const TextH = () => {
    return(
        <div>
           <Box  component="div" display="inline"><span style={{color:'#3f51b5', fontSize:'1.1rem'}}>TRY AT HOME</span></Box>
           <Box component="div" display="inline"><span style={{color:'#3f51b5', fontSize:'1.1rem'}}>COLLECTIONS</span></Box>
           <Box component="div" display="inline"><span style={{color:'#3f51b5', fontSize:'1.1rem'}}>SHOP RINGS</span></Box>
           <Box component="div" display="inline"><span style={{color:'#3f51b5', fontSize:'1.1rem'}}>SHOP DIAMONDS</span></Box>
           <Box component="div" display="inline"><span style={{color:'#3f51b5', fontSize:'1.1rem'}}>HOW IT WORKS</span></Box>
           <Box component="div" display="inline"><span style={{color:'#3f51b5', fontSize:'1.1rem'}}>ETIQUETTE</span></Box>
        </div>
    )
} 