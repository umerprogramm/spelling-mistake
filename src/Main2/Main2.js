import React from 'react'
import Top_10 from '../Top_10/Top_10'
import {
  Switch,
  Route,
} from "react-router-dom";
import Main from '../Main/Main';
export default function Main2() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Main}/>
    <Route  path="/top_10" component={Top_10} />
    </Switch>
    </>
  )
}
