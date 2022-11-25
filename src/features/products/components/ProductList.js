import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import Product from "./Product";

export default function ProductList(data) {
  console.log("data", data);
  return (
    <Box>
      <Grid container>
        {data?.data?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
