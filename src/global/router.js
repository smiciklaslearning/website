import {Route, Routes}  from 'react-router-dom'
import Home from '../components/home.js'
import Book from '../components/book.js'

export default function Router() { return (
    <div>
        <Routes>
          <Route path ='/' element = {<Home/>}></Route>
          <Route path ='/book' element = {<Book/>}></Route>
        </Routes>
    </div>
  )}