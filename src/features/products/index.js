import { Box } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./pages/ListPage";

export default function ProductFeature() {
  const match = useRouteMatch();
  return (
    <div>
      <Box pt={4}>
        <Route path={match.url} exact component={ListPage} />
      </Box>
    </div>
  );
}
