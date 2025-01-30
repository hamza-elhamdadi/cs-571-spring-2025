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
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_1_slides.pdf', 'CS 571 - Week 1 Slides - What Is Visualization and Why Is It Important.pdf')
            }}>Download Slides</a>  
          </li>
          {/* <li>
            <b>Supplemental Resources:</b>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>
          <li>
            <b>Recommended Readings:</b>
            <ul>
              <li>A Tour through The Visualization Zoo</li>
            </ul>
          </li> */}
        </ul>
        <h2 className='section-header'>Week 2 (Feb 4, 6)</h2>
        <h2 className='section-header'>Week 3 (Feb 11, 13)</h2>
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
