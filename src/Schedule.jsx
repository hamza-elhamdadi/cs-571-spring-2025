import NavBarMain from './NavBarMain';
import './App.css';

function Schedule() {
  return (
    <>
      <NavBarMain />
      <div className='page-body'>
        <h2 className='section-header'>Schedule</h2>
        <p>Note: All dates are subject to change</p>

        <h3 className='section-header'>Office Hours</h3>
        <p>
            <b>Hamza Elhamdadi:</b> Tuesday and Thursday, 2:30pm - 3:30pm EST, LGRC A208
            <br />
            <b>Zack While:</b> TBD
            <br />
            <b>Sarmistha Sarna:</b> TBD
        </p>
        <br />

        <h2 className='section-header'>Week 1 (Jan 30)</h2>
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
