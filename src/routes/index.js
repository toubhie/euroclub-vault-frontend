import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, useHistory, withRouter, Redirect, Link, use } from 'react-router-dom'
import Page404 from '../pages/Page404';
import PlayersList from '../pages/PlayersList';

const ScrollToTop = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [history.location.pathname]);
  
    return null;
};

const ResetScroll = withRouter(ScrollToTop);

const Routes = () => {

    return (
        <BrowserRouter>
            <ResetScroll />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/players" />
                </Route>

                <Route exact path="/players" component={PlayersList} />

                <Route path="**">
                    <Page404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
