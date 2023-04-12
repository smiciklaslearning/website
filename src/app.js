import './app.css'
import './components/components.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './global/router'
import Navigation from './global/navigation'

export default function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )}