import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "src/components/LayoutModel";
import Crud from "src/pages/Crud";
import Dashboard from "src/pages/Dashboard";

const Routes = () => {
  return (
    <Route path={`/`}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" exact component={Crud} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Route>
  );
};
export default Routes;
