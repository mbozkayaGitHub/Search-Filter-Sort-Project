import React from 'react'
import Card from '../components/Card'
import {data} from "../helper/data"
import { Grid, Typography } from '@mui/material'


const Home = () => {
  return (
    <div>
    

      <Grid container >
      {data?.map(()=> (
      
          <Grid item key={data.id}>
<Card  data={data}/>
          </Grid>

      ))}
              </Grid>
    </div>
  )
}

export default Home