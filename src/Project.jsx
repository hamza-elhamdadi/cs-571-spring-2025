import NavBarMain from "./NavBarMain";
import './App.css';

import { NavLink } from 'react-router-dom';

function Project(){
    return (
        <>
            <NavBarMain />
            <div className="page-body">
                <h2 className="section-header">Project</h2>
                <p>
                    In this class, you will work throughout the semester on a group project. 
                    The goal of the project is to design and implement a web-based interactive visualization
                    tool that allows you to answer questions you have about a topic of your choice. 
                    You will acquire data, design your visualization(s), implement the visualizations using
                    modern web frameworks, and evaluate the results.
                </p>
                <h2 className="section-header">Teams</h2>
                <p>
                    You will work closely with other classmates in a <b>3 person project team.</b> You can come up with your own teams
                    and/or use Piazza to find team members. If you can't find a team, we will team you up randomly.
                    We do not anticipate that the grades for each team member will be different. However, we reserve the right to
                    assign different grades to each group member based on peer assessments (see below).
                </p>
                <h2 className="section-header">Project Timeline</h2>
                <p>
                    The project will consist of several steps. Note that <b> no extensions will be given</b> for any of these steps.
                    <b> For due dates and submissions, see the <NavLink to="/schedule"> schedule</NavLink>.</b> Late days may not be used
                    for the project. Projects submitted after the final due date will not be graded.
                    <br />
                    The steps for the project are:
                    <ul>
                        <li>Announce your project</li>
                        <li>Project proposal</li>
                        <li>Project review with staff</li>
                        <li>Milestone, a functional project prototype</li>
                        <li>Peer Feedback</li>
                        <li>Project screencast submission</li>
                        <li>Final project submission & group member evaluations</li>
                    </ul>
                </p>
                <h2 className="section-header">Deliverables</h2>
                <p>
                    <b>Process Book: </b> An important part of your project is the process book. Your process book details
                    your steps in developing your solution, including the alternative designs you tried, and insights you discovered
                    throughout the project. The project proposal will serve as a skeleton for your process book. 
                    <b> Equally important to the destination (your final results) is the journey (the design choices you made along the way)! </b>
                    While you will use the project book to describe and document the space of possibilities you explored at each step of the project,
                    you should not include every little detail like you would in a journal or lab notebook. Focus on the important decisions you made,
                    and be concise in what you choose to include in your process book.
                    <br />
                    
                    <br />
                    We strongly advise you to include many figures in your process book, including photos of your sketches of potential designs,
                    screenshots from different visualization tools you explored, inspirations of visualizations you found online, etc.
                    Several images illustrating changes in your focus/design over tie will be far more informative than a text description of 
                    these changes. Use text to describe your rationale behind the evolution of your project.
                    <br />

                    <br />
                    The following topics should be included in your process book. Depending on your project type, you may dedicate more or less time
                    to each of these sections:
                    <ul>
                        <li><b>Overview and Motivation: </b> Provide an overview of the project goals and the motivation for it. 
                            Consider that this will be read by people who did not see your project proposal.</li>
                        <li><b>Related Work: </b> Anything that inspired you, such as a paper, a website, visualizations we discussed in class, etc.</li>
                        <li><b>Questions: </b> What questions are you trying to answer with your visualization(s)? How did these queestions 
                            evolve/change over the course of the project? What new questions did you consider as the project progressed?</li>
                        <li><b>Data: </b> Include information about the source, how you collected it (e.g., web scraping), cleaning methods, etc. </li>
                        <li><b>Exploratory Data Analysis: </b> What visualizations did you use to initially look at your data? 
                            What insights did you gain? How did these insights inform your design?</li>
                        <li><b>Design Evolution: </b> What are the different visualizations you considered? Justify the design decisions 
                            you made using the perceptual and design principles you learned in the course. Did you deviate from your proposal?</li>
                        <li><b>Implementation: </b> Describe the intent and functionality of the interactive visualizations you implemented. 
                            Provide clear and well-referenced images showing the key design and interaction elements.</li>
                        <li><b>Evaluation: </b> What did you learn about the data by using your visualizations? 
                            How did you answer your research questions? How well does your visualization work, and how could you further improve it?
                            (Be honest here. Limitations are a part of any project, and they will be noticeable during the grading process. 
                            Acknowledging them in this section indicates thoughtfulness in your design process, and, as such, will only help your grade.)</li>
                    </ul>
                    
                    As this will be your only chance to describe your project, make sure that your process book is a standalone document that fully describes
                    your design process, results, and final design. Below are a few examples of process books from students at the University of Utah. Note
                    that these examples do not follow the exact structure laid out above, they are meant as inspiration and not indicative of the format or
                    scope of your project:
                    
                    <a target="_blank" href="https://dataviscourse.net/2024/assets/process_books/bansal_cao_hou.pdf"> Example 1</a>,
                    <a target="_blank" href="https://dataviscourse.net/2024/assets/process_books/walsh_trevino_bett.pdf"> Example 2</a>.
                    <br />
                </p>
                <p>
                    <b>Code: </b> Your web-based visualization can be implemented using any API or programming language you would like as long as it runs 
                    in the latest version of <a target="_blank" href="https://www.google.com/chrome/">Google Chrome</a>, but we will only provide support and answer questions 
                    regarding D3 and Javascript. We expect you to write high-quality and readable code. You should strive to make your code readable and handle
                    possible errors. Here are some <a target="_blank" href="http://javascript.crockford.com/code.html">guidelines</a> for Javascript.
                    We also expect you to document your code (e.g., sufficient comments, README, etc).
                    <br />
                </p>
                <p>
                    <b>Project Website: </b> You will create a public website for your project using GitHub Pages or any other web hosting service of your choice.
                    The website should contain your interactive visualization, summarize the main results of your project, and tell a cohesive story.
                    Consider your audience (the site is public) and keep the discussion at the appropriate level. Your process book and data should be linked
                    from the website as well. Also, embed the interactive visualization and the screen-case of your project (see below). 
                    If you are not able to publish your work (e.g., due to confidential data), please let us know in the project proposal.
                    <br />
                </p>
                <p id="screencast">
                    <b>Project Screen-Cast: </b> Each team will create a <b> two-minute screen-cast with narration </b> showing a demo of your visualization 
                    and/or some slides. You can use any screencast tool (e.g., QuickTime for Mac, Camtasia, OBS) of your choice. Please make sure the sound quality
                    of your video is good - it may be worth investing in / renting an external USB microphone 
                    (UMass offers rental <a target="_blank" href="https://www.library.umass.edu/equipment-software/">equipment and software</a>). Upload the video to an online video platform such as
                    Youtube or Vimeo and embed it in your project website. We may present some of these videos during the last week of class.
                    <br />
                </p>
                <p>
                    We will strictly enforce the two-minute time limit for the video, so please make sure it is not longer. Use principles of good storytelling and presentations
                    to get your key points across. <b>Focus the majority of your screencast on your main contributions rather than on technical details.</b> What do you feel is the best
                    part of your project? What insights did you gain? What is the single most important thing you would like your audience to take away? Make sure this is front and center
                    rather than at the end. 
                </p>
                <p>
                    <b>Peer Assessment: </b> It is important to provide positive feedback to your team members for their hard work, and to make suggestions to those you perceive may not
                    be working as effective on team tasks. We ask you to provide an honest assessment of the contributions of the members of your team, including yourself. The feedbcak you provide
                    should reflect your judgment of the following characteristics for each of your team members:
                    <ul>
                        <li>Preparation - Were they prepared during team meetings?</li>
                        <li>Contribution - did they contribute productively to the team discussion and work?</li>
                        <li>Respect for others' ideas - did they encourage others to contribute ideas?</li>
                        <li>Flexibility - were they flexible when disagreements occurred?</li>
                    </ul>

                    Your teammates' assessments of your contribution and the accuracy of your self-assessment will be considered as a part of your overall project score.
                    <br />
                </p>
                <h2 className="section-header">Announce Your Project</h2>
                <p>
                    Announce your project team and working title. <b>Each team will only need to submit one form.</b>
                </p>
                <h2 className="section-header">Project Proposal</h2>
                <p>
                    The proposal document should address the following points. Use these points as headers in your document.
                    <ul>
                        <li><b>Project Metadata: </b> The project title, your names, email-addresses, SPIRE IDs, a link to the project repository.</li>
                        <li><b>Background and Motivation: </b> Discuss your motivations and reasons for choosing this project, especially any background 
                            or research interests that may have influenced your decision.</li>
                        <li><b>Project Objectives: </b> Provide the primary questions you are trying to answer with your visualization. What would you like to learn and accomplish? What are the benefits of learning/accomplishing these things?</li>
                        <li><b>Data: </b> From where and how are you collecting your data? Provide a link to your data sources, unless you cannot (e.g., for privacy).</li>
                        <li><b>Data Processing: </b> Do you expect to do substantial data cleanup? What quantities do you plan to derive from your data? How will data processing be implemented?</li>
                        <li><b>Visualization Design: </b> How will you display your data? Use the <a target="_blank" href="https://doi.org/10.1109/TVCG.2015.2467271">Five Design-Sheet Methodology</a> to generate ideas 
                            for your visualization design. Develop <b>three alternative prototype designs for your visualizations (Sheets 2,3,4 from the FdS methodology)</b>. Create <b>one final design (Sheet 5 from the FdS methodology) that incorporates the best features of your three designs.</b>
                            Describe your designs and justify your choice of visual encodings.</li>
                        <li><b>Must-Have Features: </b> List the features without which you would consider your project to have failed.</li>
                        <li><b>Optional Features: </b> List the features which would be nice to have, but not critical to your project.</li>
                        <li><b>Project Schedule: </b> Make sure that you plan your work so that you can avoid a big rush right before the final deadline.
                            Delegate different modules and responsibilities among your team members. Write this schedule in terms of weekly deadlines for the remainder of the semester.</li>
                    </ul>
                    
                    This proposal is the first part of your <b>process book</b>. As a ballpark: your proposal should contain about 3-4 pages of text, plus 5-6 pages of sketches. 
                    <b>You will submit the proposal on Gradescope.</b> Make sure to also commit the proposal to your group's GitHub repository.
                </p>
                <h2 className="section-header">Project Review</h2>
                <p>
                    <s>Based on your proposals, we will assign a staff member to your team (myself or one of the TAs) who will meet with you to help guide and scope the rest of your project.
                    You will schedule this meeting with your assigned staff member during Week 5 or 6. Make sure that all of your team members are present at the meeting.</s>
                </p>
                <p>
                    Given the limited availability of the course staff this semester, we will provide feedback for the project proposals in writing. If you have any questions about this feedback or otherwise, we would be happy to discuss this in office hours. 
                </p>
                <h2 className="section-header">Project Milestone</h2>
                <p>
                    For your project milestone, you will hand in your <b>process book</b> and <b>code</b> in its current state. 
                    You don't have to hand in a screencast, and you don't need to have your website ready yet.
                    <br />
                </p>
                <p>
                    You should have completed your data acquisition, or at least have a significant sample of your data. You must have your data structures in place.
                    For example, if you plan to collect 1000 data records, but only have 200, that is fine. If you are missing one of two datasets from your proposal, you will lose points, 
                    since you will be missing have of the structure of your project.
                    <br />
                </p>
                <p>
                    You must have a working visualization prototype. You don't need to have all of your planned views up and running, nor does your visualization need to be completely
                    interactive. However, the direction and content must be clear. <b>If you are uncertain about the scope, please contact your assigned staff member.</b>
                    <br />
                </p>
                <p>
                    The milestone will be submitted by <a target="_blank" href="https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"> creating a release </a> on Github.
                    <b>You will submit a link to this release in Gradescope.</b>
                </p>
                <h2 className="section-header">Peer Feedback</h2>
                <p>
                    Each student will be assigned three other groups to provide structured feedback to.
                </p>
                <h2 className="section-header">Final Project Submission</h2>
                <p>
                    You will submit your project to Gradescope by including the link to a <a target="_blank" href="https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"> release </a> of your GitHub project repository.
                    <br />
                </p>
                <p>
                    Here is an <a target="_blank" href="https://sunsiu.github.io/poke-data/">example</a> of a final project from the University of Utah. Check out <a target="_blank" href="https://faris-k.github.io/dataviscourse-pr-manufacturing-vis/finalSubmission/">this one</a> as well.
                    <br />
                </p>
                <p>
                    For your final project, you must hand in the following items:
                    <ul>
                        <li>Store the following in your GitHub repository: 
                            <ul>
                                <li><b>Code: </b> All website files and libraries assuming they are not too big to include.</li>
                                <li><b>Data: </b> Include all the data you used in your project. If the data is too large, store it via cloud storage (e.g., Dropbox, Google Drive, Box).</li>
                                <li><b>Process Book: </b> Your Process Book in PDF format.</li>
                                <li><b>README: </b> Your README file must give an overview of what you are handing in: which parts are your code, which parts are your libraries, and so on. The README must contain URLs to your project website and screencast videos. The README must also explain any non-obvious features of your interface.</li>
                            </ul>
                        </li>
                        <li>Your <b>project website</b>, hosted on GitHub pages with your screencast embedded</li>
                        <li>A completed <b>feedback document</b> for each of your team members, including yourself.</li>
                    </ul>

                    <b>Grading Criteria: </b>
                    <ul>
                        <li>Process Book - Are you following a design process that is well-document in your process book?</li>
                        <li>Solution - Is your visualization effective in answering your intended questions? What is designed with visualization principles in mind?</li>
                        <li>Implementation - What is the quality of your implementation? Is it appropriately polished, robust, and reliable?</li>
                        <li>Presentation - Are your website and screencast clear, engaging, and effective?</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default Project;