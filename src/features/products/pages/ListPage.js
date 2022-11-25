import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "../../../api/productApi";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductList from "../components/ProductList";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));

export default function ListPage() {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll({ _page: 1, _limit: 10 });
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Fail to fetch product list", error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeleton /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
