import  React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Perfil from './components/Pefil';
import HomeScreen from './components/homeScreen';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/perfil/:loginUser" component={Perfil} />
        </Switch>
    </BrowserRouter>
)
export default Routes;