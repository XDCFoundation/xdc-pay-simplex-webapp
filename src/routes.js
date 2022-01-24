import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import {SimplexDoc} from "./modules";
import {history} from "./managers/history";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} component={SimplexDoc}/>
                <Redirect exact from='*' to="/"/>
            </Switch>
        </Router>);

}
export default Routes
