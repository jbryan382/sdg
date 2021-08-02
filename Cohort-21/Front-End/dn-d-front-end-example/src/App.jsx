import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Monster } from './pages/Monster'
import { Monsters } from './pages/Monsters'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/slist" component={Spells} /> */}
        <Route exact path="/mlist" component={Monsters} />
        {/* <Route exact path="/slist/:spell" component={Spell} /> */}
        <Route exact path="/mlist/:monster" component={Monster} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
}
