import React from 'react';
import Grid from '@mui/material/Grid';
import ProgressCircle from './progress';
import DataTable from './Table';

const ProggresData = () => {
   return (
      <Grid container justifyContent="space-around" width={1000} spacing={2}>
         {[{id:3,value:50}, {id:2,value:79}, {id:3,value:80},{id:4,value:60},].map((item) => (
            <Grid key={item.id} item>
               <ProgressCircle value={item.value} label={"total price"} />
            </Grid>
         ))}
         
      </Grid>
   );
};

export default ProggresData;
