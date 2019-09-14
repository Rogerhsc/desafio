import  React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Perfil from './components/Pefil';
import Repository from './components/Repository';
import HomeScreen from './components/Busca/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/perfil/:loginUser" component={Perfil} />
            <Route path="/perfil/:loginUser/:reposName" component={Repository} />
        </Switch>
    </BrowserRouter>
)
export default Routes;