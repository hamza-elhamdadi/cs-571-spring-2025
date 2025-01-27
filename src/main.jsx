import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Syllabus from './Syllabus.jsx';
import Schedule from './Schedule.jsx';
import Project from './Project.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<App/>} />
      <Route path='/syllabus' element={<Syllabus/>} />
      <Route path='/schedule' element={<Schedule/>} />
      <Route path='/project' element={<Project/>} />
    </Routes>
  </HashRouter>
)
