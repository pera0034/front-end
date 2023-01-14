import React, { Fragment } from "react";
import { Route, Switch, Redirect} from 'react-router-dom';

import Home from "./public/Home";

// load the user data from here

class App extends React.Component{
    render(){
            return(
                <Fragment>
                    <div id="wrapper">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Fragment>
            );
    }
}

export default App;