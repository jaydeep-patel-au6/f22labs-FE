import React from 'react'
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default {
    title: 'logo',
};

const defaultProps = {
    bgcolor: 'background.paper',
    ml: -2,
    mt: -2,
    style: { width: '55rem', height: '5rem' },
    borderColor: '#3f51b5',

    // fontSize: 'rem'
  };

export const Logo = () => {
    return (
        <div>
           
            <Box border={1} {...defaultProps} ><Typography variant="h3" component="h3" style={{color:'#3f51b5', margin:'1.5% 0 0 1%'}}>
            FRANK DARLING
            </Typography></Box>
        </div>
    )
}