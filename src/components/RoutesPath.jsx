import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Results from './Results'

const RoutesPath = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path='/'>
          <Redirect to="/search"/>
        </Route>
        <Route exact path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Switch>
    </div>
  )
}

export default RoutesPath