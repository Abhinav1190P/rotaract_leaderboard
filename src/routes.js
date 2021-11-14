import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Leaderboard_dekstop from './components/leaderboard/leaderboard_dekstop'

const Routes = () =>{
    return(
        <div>
            <Switch>
            <Route exact path = "/" component={Leaderboard_dekstop}/>
            </Switch>
        </div>
    )
}

export default Routes