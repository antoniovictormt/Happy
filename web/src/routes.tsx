import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  CreateOrphanage,
  ForgotPassword,
  Home,
  Orphanage,
  OrphanagesMap,
  ApproveOrphanage,
  Dashboard,
  EditOrphanage,
  Register,
  Signin,
} from './pages/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />        {/*Parametro dinâmico */}

        <Route path="/login" component={Signin} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/register" component={Register} />
        <Route path="/approve-orphanage" component={ApproveOrphanage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edit-orphanage" component={EditOrphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;