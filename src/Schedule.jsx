import NavBarMain from './NavBarMain';
import './App.css';

function Schedule() {
  const downloadPdf = (filename, downloadname) => {
    console.log(filename, downloadname)

    fetch(filename).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let link = document.createElement('a');
        link.href = fileURL;
        link.download = downloadname;

        link.click();
      })
    })
  }

  return (
    <>
      <NavBarMain />
      <div className='page-body'>
        <h2 className='section-header'>Schedule</h2>
        <p>Note: All dates are subject to change</p>

        <h3 className='section-header'>Office Hours</h3>
        <p>
            <b>Hamza Elhamdadi:</b> Tuesday and Thursday, 2:30pm - 3:30pm Eastern Time, LGRC A208
            <br />
            <b>Zack While:</b> Tuesday and Thursday, 9:30am - 10:30am Eastern Time, Friday 2:30pm-3:30pm Eastern Time (Zoom Link on Canvas)
            <br />
            <b>Sarmistha Sarna:</b> 9:30am - 10:30am Eastern Time (Zoom Link on Canvas)
        </p>
        {/* <br /> */}

        <h2 className='section-header'>Week 1 (Jan 30)</h2>
        <ul>
          <li>
            <b>Lecture: </b> What Is Visualization, and Why Is It Important?
            {/* <br /> */}
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_1_slides.pdf', 'CS 571 - Week 1 Slides - What Is Visualization and Why Is It Important.pdf')
            }}> Download Slides</a>  
          </li>
          <li>
            <b>Supplemental Resources:</b>
            <ul>
              <li><a href="http://dataviscourse.net/tutorials/lectures/lecture-html/" target="_blank">HTML Tutorial</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML Elements Reference</a></li>
              <li><a href="https://developers.google.com/web/tools/chrome-devtools" target="_blank">Overview of Chrome Developer Tools</a></li>
              
              <li><a href="http://dataviscourse.net/tutorials/lectures/lecture-css/" target="_blank">CSS Tutorial</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax" target="_blank">CSS Reference</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors" target="_blank">Basic CSS Selectors</a></li>
            </ul>
          </li>
          {/* <li>
            <b>Recommended Readings:</b>
            <ul>
              <li>A Tour through The Visualization Zoo</li>
            </ul>
          </li> */}
        </ul>
        <h2 className='section-header'>Week 2 (Feb 4, 6)</h2>
        <ul>
          <li>
            <b>Lecture: </b>Perception and Cognition
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_2_slides.pdf', 'CS 571 - Week 2 Slides - Perception and Cognition.pdf')
            }}> Download Slides</a>
          </li>
          <br />
          <li><b>Lecture: </b> HTML and CSS</li>
          <li>
            <b>Supplemental Resources</b>
            <ul>
              <li><a href="https://code.visualstudio.com">Install Visual Studio Code</a></li>
              <li><a href="https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/">Install the Live Server extension on Visual Studio Code</a></li>
            </ul>
          </li>
          
        </ul>
        <h2 className='section-header'>Week 3 (Feb 11, 13)</h2>
        <ul>
          <li><b>Lecture: </b> Color</li>
        </ul>
        <h2 className='section-header'>Week 4 (Feb 18, 20)</h2>
        <h2 className='section-header'>Week 5 (Feb 25, 27)</h2>
        <h2 className='section-header'>Week 6 (Mar 4, 6)</h2>
        <h2 className='section-header'>Week 7 (Mar 11, 13)</h2>
        <h2 className='section-header'>Week 8 (Mar 25, 27)</h2>
        <h2 className='section-header'>Week 9 (Apr 1, 3)</h2>
        <h2 className='section-header'>Week 10 (Apr 8, 10)</h2>
        <h2 className='section-header'>Week 11 (Apr 15, 17)</h2>
        <h2 className='section-header'>Week 12 (Apr 22, 24)</h2>
        <h2 className='section-header'>Week 13 (Apr 29, May 1)</h2>
        <h2 className='section-header'>Week 14 (May 6, 8)</h2>
      </div>
    </>
  );
};

export default Schedule;
