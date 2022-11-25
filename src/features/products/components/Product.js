import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

export default function Product({ product }) {
  return (
    <Box padding={1}>
      <Skeleton variant="rectangular" width={"100%"} height={118} />
      <Typography variant="body2">{product.name}</Typography>
      <Typography>
        {product.salePrice} - {product.promotionPercent}%
      </Typography>
    </Box>
  );
}
