import React from "react";
import Card1 from "../components/Card1";
import { data } from "../helper/data";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Grid container>
        {data?.map((data) => (
          <Grid item key={data.id}>
            <Card1 data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
