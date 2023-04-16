import './app.css'
import Header from './components/global/header'
import Courses from './components/global/courses'
import Greeting from './components/global/greeting'

export default function App() {
  return (
    <div>
      <Header/>
      <span id="halves"><Greeting/></span>
      <span id="halves"><Courses/></span>
    </div>
  )}