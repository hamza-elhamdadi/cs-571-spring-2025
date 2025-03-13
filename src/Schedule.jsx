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
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_2_slides.pdf', 'CS 571 - Week 2 Slides - Perception and Cognition.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Supplemental Resources</b>
            <ul>
              <li><a target='_blank' href="https://www.nature.com/nmeth/journal/v7/n11/full/nmeth1110-863.html">Gestalt principles (part 1).</a> Bang Wong. Nature Methods 7, pp. 863, Nov 2010.</li>
              <li><a target='_blank' href="http://www.nature.com/nmeth/journal/v7/n12/full/nmeth1210-941.html">Gestalt principles (part 2).</a> Bang Wong. Nature Methods 7, pp. 941, Dec 2010.</li>
            </ul>
          </li>
          <br />
          <li>
            <b>Lecture: </b> HTML and CSS
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_2_slides_html.pdf', 'CS 571 - Week 2 Slides - HTML and CSS.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Supplemental Resources</b>
            <ul>
              <li><a target='_blank' href="https://code.visualstudio.com">Install Visual Studio Code</a></li>
              <li><a target='_blank' href="https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/">Install the Live Server extension on Visual Studio Code</a></li>
              <li><a target='_blank' href="https://developer.chrome.com/docs/devtools/css">How to Debug CSS in the Chrome Developer Tools</a></li>
            </ul>
          </li>
          
        </ul>
        <h2 className='section-header'>Week 3 (Feb 11, 13)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Color
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_3_slides_color.pdf', 'CS 571 - Week 3 Slides - Color.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Supplemental Resources: </b>
            <ul>
              <li>Podcast: <a target='_blank' href="https://radiolab.org/podcast/211178-rip-rainbow">Rippin' the Rainbow a New One</a></li>
            </ul>
          </li>
          <li>
            <b>Recommended Reading: </b>
            <ul>
              <li><a target='_blank' href="https://learning.oreilly.com/library/view/~/9781466508910/?ar">VAD</a>, Chapters 10.2-10.3, Color Theory and Colormaps</li>
              <li><a target='_blank' href="https://www.computer.org/csdl/magazine/cg/2023/03/10128890/1NdJMHqISnS">Rainbow Colormaps are Not All Bad (Paper)</a></li>
              <li><a target='_blank' href="https://eagereyes.org/blog/2023/rainbow-colormaps-are-not-all-bad-paper">Rainbow Colormaps are Not All Bad (Blog Post)</a></li>
            </ul>
          </li>
          <br />
          <li>
            <b>Lecture: </b> Project Overview and Project Management with Git
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_3_slides_project.pdf', 'CS 571 - Week 3 Slides - Project Overview and Project Management with Git.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Recommend Reading: </b>
            <ul>
              <li><a target='_blank' href="https://ieeexplore.ieee.org/document/7192707/media#media">Sketching Designs Using the Five Design-Sheet Methodology</a></li>
            </ul>
          </li>
          <li>
            <b>Supplemental Resources: </b>
            <ul>
              <li><a target='_blank' href="https://book.git-scm.com/index.html">Pro Git Book</a></li>
              <li><a target='_blank' href="https://learngitbranching.js.org/">Learn Git Branching</a></li>
              <li><a target='_blank' href="https://www-cs-students.stanford.edu/~blynn/gitmagic/">"Git Magic" Tutorial</a></li>
              <li><a target='_blank' href="https://www.youtube.com/watch?v=HVsySz-h9r4">Youtube: Git Command Line Fundamentals</a></li>
            </ul>
          </li>
        </ul>
        <h2 className='section-header'>Week 4 (Feb 18)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Data Abstraction
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_4_slides_data_abstraction.pdf', 'CS 571 - Week 4 Slides - Data Abstraction.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Group Activity 2: Coffee Shop Menu Abstraction</b>
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/ga2.pdf', 'CS 571 - Group Activity 2 - Coffee Shop Menu Abstraction.pdf')
            }}> Download Activity</a>
          </li>
          <li>
            <b>Recommended Reading: </b>
            <ul>
              <li><a target='_blank' href="https://learning.oreilly.com/library/view/~/9781466508910/?ar">VAD</a>, Chapter 2, Data Abstraction</li>
              <li><a target="_blank" href="https://www.jstor.org/stable/1671815?seq=1">On the Theory of Scales of Measurement</a> S. S. Stevens, Science, Vol. 103 No. 2684, pp. 677-680, June 1946.</li>
            </ul>
          </li>
        </ul>
        <h2 className='section-header'>Week 5 (Feb 25, 27)</h2>
        <ul>
        <li>
            <b>Lecture: </b> SVG and Javascript
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_5_slides_svg_javascript.pdf', 'CS 571 - Week 5 Slides - SVG and Javascript.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Supplemental Resources: </b>
            <ul>
              <li><a href="http://dataviscourse.net/tutorials/lectures/lecture-svg/" target="_blank">SVG Tutorial</a></li>
              <li><a href="http://dataviscourse.net/tutorials/lectures/lecture-javascript/" target="_blank">Javascript Tutorial</a></li>
            </ul>
          </li>
        </ul>
        <h2 className='section-header'>Week 6 (Mar 4, 6)</h2>
        <ul>
          <li>
            <b>Lecture: </b> DOM and D3 Basics
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_5_slides_dom_d3.pdf', 'CS 571 - Week 6 Slides - DOM and D3.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>DOM and D3 Basics - Starter Code: </b> 
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('code/dom_and_d3_basics.zip', 'DOM and D3 Basics.zip')
            }}> Download Starter Code</a>
          </li>
          <li>
            <b>Supplemental Resources: </b>
            <ul>
              <li><a href="http://dataviscourse.net/tutorials/lectures/lecture-dom-manipulation/" target="_blank">DOM Manipulation Tutorial</a></li>
              <li><a href="http://dataviscourse.net/tutorials/lectures/lecture-d3/" target="_blank">D3 Basics Tutorial</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/document" target="_blank">MDN Document Object documentation</a></li>
              <li><a href="https://github.com/mbostock/d3/wiki/API-Reference" target='_blank'>D3 API Github Page</a></li>
            </ul>
          </li>
          <br />  
          <li>
            <b>Lecture: </b> Visual Encoding: Marks and Channels
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/week_6_slides_visual_encodings.pdf', 'CS 571 - Week 6 Slides - Visual Encodings.pdf')
            }}> Download Slides</a>
          </li>
          <li>
            <b>Recommended Reading:</b>
            <ul>
              <li><a target="_blank" href="https://hci.stanford.edu/publications/2010/crowd-perception/heer-chi2010.pdf">Crowdsourcing graphical perception: using mechanical turk to assess visualization design.</a> Jeff Heer, Mike Bostock. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems. ACM, 2010.</li>
              <li><a target="_blank" href="https://www.datawrapper.de/blog/which-color-scale-to-use-in-data-vis">Which color scale to use when visualizing data.</a> Lisa Charlotte Muth, 2021. (all 4 parts)</li>
              <li><a target="_blank" href="https://learning.oreilly.com/library/view/~/9781466508910/?ar">VAD</a>, Chapter 5, Marks and Channels</li>
              <li><a target="_blank" href="https://learning.oreilly.com/library/view/~/9781466508910/?ar">VAD</a>, Chapter 10.4, Other Channels</li>
              <li><a target="_blank" href="https://www.jstor.org/pss/2288400">Graphical Perception: Theory, Experimentation and the Application to the Development of Graphical Models.</a> William S. Cleveland, Robert McGill, J. Am. Stat. Assoc. 79:387, pp. 531-554, 1984.</li>
              <li><a target="_blank" href="https://www.cs.unm.edu/~pgk/IVCDs14/00636792.pdf">The Structure of the Information Visualization Design Space.</a> Stuart Card and Jock MacKinlay. Proceedings of InfoVis, 1997.</li>
              <li><a target="_blank" href="https://blog.datawrapper.de/beautifulcolors/">How to pick more beautiful colors for your data visualizations.</a> Lisa Charlotte Muth, 2020.</li>
            </ul>
          </li>
          <li>
            <b>Group Activity 3: Name the Channel</b>
            <br />
            <a href="#/schedule" onClick={() => {
              downloadPdf('slides/ga3.pdf', 'CS 571 - Group Activity 3 - Name the Channel.pdf')
            }}> Download Activity</a>
          </li>
        </ul>
        <h2 className='section-header'>Week 7 (Mar 11, 13)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Design Guidelines
          </li>
        </ul>
        <h2 className='section-header'>Week 8 (Mar 25, 27)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Advanced D3
          </li>
          <li>
            <b>Lecture: </b> Tasks and Interaction
          </li>
        </ul>
        <h2 className='section-header'>Week 9 (Apr 1, 3)</h2>
        <ul>
          <li>
            <b>Lecture: </b> D3 Layouts and Maps
          </li>
          <li>
            <b>Lecture: </b> Visualization Critique
          </li>
        </ul>
        <h2 className='section-header'>Week 10 (Apr 8, 10)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Tasks, Design and Evaluation
          </li>
          <li>
            <b>Lecture: </b> Multiple Views, Dashboards
          </li>
        </ul>
        <h2 className='section-header'>Week 11 (Apr 15, 17)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Filtering and Aggregation
          </li>
          <li>
            <b>Lecture: </b> Visualizing Tabular Data
          </li>
        </ul>
        <h2 className='section-header'>Week 12 (Apr 22, 24)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Visualizing Tabular Data
          </li>
          <li>
            <b>Lecture: </b> Visualizing Networks and Trees
          </li>
        </ul>
        <h2 className='section-header'>Week 13 (Apr 29, May 1)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Visualizing Networks and Trees
          </li>
          <li>
            <b>Lecture: </b> Visualizing Multivariate Networks
          </li>
        </ul>
        <h2 className='section-header'>Week 14 (May 6, 8)</h2>
        <ul>
          <li>
            <b>Lecture: </b> Set and Text Visualizations
          </li>
          <li>
            <b>Lecture: </b> Maps
          </li>
        </ul>
      </div>
    </>
  );
};

export default Schedule;
