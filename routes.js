import { React } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Perfil from './src/components/perfil';
import HomeScreen from './src/components/homeScreen';

const Routes = ()  => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/perfil/:loginUser" component={Perfil} />
        </Switch>
    </BrowserRouter>
}