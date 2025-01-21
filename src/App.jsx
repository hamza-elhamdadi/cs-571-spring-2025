import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavBarMain from './NavBarMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarMain />
      <div className='page-body' >
        <br></br>
        <a className="image-preview" target="_" href="http://vcg.github.io/upset/">
          <img src="/upset.png" height="180" />
          <span>UpSet: Visualizing Interacting Sets</span>
        </a>
        <a className="image-preview" target="_" href="https://www.nytimes.com/interactive/2025/01/08/weather/los-angeles-fire-maps-california.html">
          <img src="/wildfires.png" height="180" />
          <span>New York Times - California Wildfires Tracker</span>
        </a>
        <a className="image-preview" target="_" href="https://pudding.cool/projects/vocabulary/">
          <img src="/rappers.png" height="180" />
          <span>The Pudding - Rap Vocabulary</span>
        </a>
        

        
        <p>Data is increasingly ubiquitous, produced by scientists, businesses, engineers, and everyday people. 
          We often use such data to help us make informed decisions and communicate effectively.
          Since data is often large and complex, visual representations of the data are often essential to facilitate our understanding. 
          We call these visual representations "visualizations". But what makes a good visualization?    
          Good visualizations not only visually represent data, but also improve our comprehension, communication, and decision-making.</p>

        <p>In this course you will learn about the fundamentals of human perception, the theory of visualization, and good visualization 
          design practices. You will also develop your own web-based visualizations using HTML5, CSS, JavaScript, SVG, and 
          <a href="http://d3js.org/"> D3js</a>.</p>

        <h3 className='section-header'>Instructor:</h3>
        <p>
          <a href="https://hamza-elhamdadi.github.io/">Hamza Elhamdadi</a>, Graduate Teaching Associate / Ph.D. Candidate, HCI-VIS Lab
          <br />
          Contact: <a href='mailto:helhamdadi@umass.edu'>helhamdadi@umass.edu</a>
          <br />
          Office: LGRC A208
        </p>

        <h3 className='section-header'>Teaching Assistants:</h3>
        <p>
          <a href="https://people.cs.umass.edu/~zwhile/">Zack While</a>, Ph.D. Candidate, Data Visualization / HCI
          <br />
          <a href="https://people.cs.umass.edu/~zwhile/">Sarmistha Sarna</a>, Ph.D. Student, Human-Centered Ubiquitous Computing
        </p>

        <h3 className='section-header'>Graders:</h3>
        <p>
          Riya Adsul, M.S. Student, CICS
          <br />
          Sudharshan Govindan, M.S. Student, CICS
        </p>

        <h3 className='section-header'>Lectures:</h3>
        <p>
          Tuesday and Thursday 1:00pm - 2:15pm EST, LGRT 123
        </p>
      </div>
      
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
