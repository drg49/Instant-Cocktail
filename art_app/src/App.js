import React, {useState} from 'react'
import './App.css';
import Main from './components/Main'
import DrinkPage from './pages/DrinkPage'
import IngredientFilterPage from './pages/IngredientFilterPage'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path='/ingredient/:ingredient'
        render={(routerProps)=> <IngredientFilterPage {...routerProps}/>}
        />
        <Route path='/drink/:drink'
        render={(routerProps) => <DrinkPage {...routerProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
