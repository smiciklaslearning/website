import {Route, Routes}  from 'react-router-dom'
import Home from '../components/home.js'

export default function Router() { return (
    <div>
        <Routes>
          <Route path ='/' element = {<Home/>}></Route>
        </Routes>
    </div>
  )}