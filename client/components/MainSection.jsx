import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import RecipeForm from './RecipeForm'
import RecipeView from './RecipeView'
import Home from './Home'

const MainSection = () => {
  return (
    <Router >
      <div className="column">
        {/* conditional rendering */}
        <Route path="/" component={Home}/>
        <Route path="/recipe/add" component={RecipeForm}/>
        <Route path="/recipe/view/:id" component={RecipeView}/>
      </div>
    </Router>
  )
}

export default MainSection
