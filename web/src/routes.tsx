import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CreateOrphanage, Landing, Orphanage, OrphanagesMap } from './pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />        {/*Parametro dinâmico */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;