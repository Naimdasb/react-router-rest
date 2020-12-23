import React, { useState } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from './Home'
import { Nav } from './Nav'
import { There } from './There'


export const RouterTest: React.FC =() => {
    const [auth, setAuth] = useState<boolean>(false)
    const handleClick = () => {
        setAuth(!auth)
    }

    const renderThere = () => {
        return <There auth={auth} />
    }
    return (
        <BrowserRouter>
            <Nav />
            <button onClick={handleClick}>Auth</button>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/there' component={renderThere} exact />
            </Switch>
        </BrowserRouter>
    )
}
