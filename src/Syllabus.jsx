import { useState } from 'react'

import NavBarMain from './NavBarMain'
import './App.css'

import { NavLink } from 'react-router-dom';

function Syllabus() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarMain />
      <div className='page-body'>
        <h2 className='section-header'>Syllabus</h2>    
        <p>
        Welcome to CS 571 “Data Visualization & Exploration” - I’m very glad you’re here.
        <br />
        In this course, we will cover design principles and techniques for visualizing and exploring complex data.
        <br/>
        <br/>
        The goals of this course are to:
        </p> 
        <ul>
            <li>understand how and when data visualization is helpful for decision-making and analysis</li>    
            <li>practice designing effective visualizations using a structured design process</li>
            <li>apply principles of human perception and cognition to visualization design</li>
            <li>create interactive web-based data visualizations using HTML5, Javascript, and D3js</li>
        </ul> 

        <h3 className='section-header'>Highly Recommended Textbooks:</h3>
        <p>
            In this class, we will reference material from two textbooks. 
            Visualization Analysis and Design (VAD) by Tamara Munzner covers the conceptual aspects of visualization design. 
            Interactive Data Visualization for the Web (IDV) by Scott Murray covers programming concepts related to web programming and D3.js, 
            which are central to the coding assignments and final project of this course.
            <br />
            <br />
            To access these books online for free through the UMass Library, click the links below. 
            <br />
            Then click “Institution not listed?” and type your UMass email address in the following text box.
            <br />
            From there, sign in with your UMASS Single Sign-On to access the textbook.

            <br />
            <br />
            <b>Visualization Design and Analysis</b>
            <br />
            Tamara Munzner
            <br />
            CRC Press (2014)
            <br />
            <a href="https://learning.oreilly.com/library/view/~/9781466508910/?ar">Free Online Version (with UMass Login)</a>

            <br />
            <br />
            <b>Interactive Data Visualization for the Web, 2nd Edition</b>
            <br />
            Scott Murray
            <br />
            O'Reilly (2017)
            <br />
            <a href="https://learning.oreilly.com/library/view/interactive-data-visualization/9781449340223/pr03.html">Free Online Version (with UMass Login)</a>
        </p>

        <h3 className='section-header'>Supplemental Reading:</h3>
        <p>
            The following books provide a deeper understanding of some of the concepts we will cover in the course (e.g., human perception, design).

            <br />
            <br />
            <b>Design for Information</b>
            <br />
            Scott Murray
            <br />
            Rockport (2013)

            <br />
            <br />
            <b>The Functional Art: An Introduction to Information Graphics and Visualization</b>
            <br />
            Alberto Cairo
            <br />
            New Riders (2012)
            
        </p>

        <h3 className='section-header'>Inclusivity:</h3>
        <p>
            We are each responsible for contributing to a climate where everyone is valued and treated with respect. 
            Everyone in this classroom has something of value to contribute and is a valuable source of knowledge, creative ideas, and problem-solving approaches. 
            Please speak with me directly if you feel that you are not being respected or valued for any reason by anyone. 
        </p>

        <h3 className='section-header'>Names and Pronouns:</h3>
        <p>
            Each member of this classroom has the right to be addressed by the name and pronouns they use for themselves. 
            In SPIRE, you can indicate your preferred first name and pronouns, and these will appear on class rosters. 
            Please let me know the name and pronouns I should use for you if they are not on the class roster, 
            or if they change at any time during the semester. Every student’s chosen name and pronouns are to be respected at all times.
        </p>
        
        <h3 className='section-header'>Prerequisites:</h3>
        <p>
            For this course, students are expected to have programming experience, ideally in web development. 
            Software engineering skills are recommended. For the coding assignments and the final project, 
            you will be developing in Javascript and D3.js, which can have a steep learning curve
        </p>

        <h3 className='section-header'>Grading Policy:</h3>
        <p>
            <b>Project:</b> 40% <br />
            <b>Programming and Design Assignments:</b> 35% <br />
            <b>Group Activities (in-class):</b> 15% <br />
            <b>Canvas Quizzes:</b> 10% <br />
            <br />

            We will evaluate your work holistically and focus on the overall quality of the work using the following scale
            (in 0.5 increments):
            <br />
            <br />
            [10] = Excellent / no (or very minor) mistakes; [8, 9] = Good / some mistakes; [5, 7] = Fair / some major
            conceptual errors; 
            <br />
            [2, 4] = Poor / did not finish; [0, 1] = Did not participate / did not submit
            <br />
            <br />

            A cumulative grade in [93% − 100%] will be an A, [89% − 92%] will be an A-, [85% − 88%] will be a B+,
            [80% − 84%] will be a B, [75% − 79%] will be a B-, 
            {/* <br />  */}
            [70% − 74%] will be a C+, [65% − 69%] will be a C,
            [60% − 64%] will be a C-, [55% − 59%] will be a D+, 
            [50% − 54%] will be a D. 
            {/* <br /> */}
            <b> Final grades are rounded
            down to the nearest whole number (e.g., 64.9 is a C-).</b>

        </p>

        <h3 className='section-header'>Late Policy: </h3>
        <p>
            You may turn your assignments in up to 2 days late. However, for each late day, 1 point will be deducted from the maximum possible grade for the assignment 
            (e.g., a submission that is one day late will receive a maximum of 9 points, a submission that is two days late will receive a maximum of 8 points). 
            Submissions that are more than 2 days late will receive a 0. If you receive permission from the instructor, you may submit an assignment more than two days late. 
            However, the 1 point deduction per day still applies.
        </p>

        <h3 className='section-header'>Re-Grade Policy: </h3>
        <p>
            We want to ensure that all assignments are properly graded. That being said, graders are human and may make mistakes. 
            If you believe an assignment has been graded incorrectly, please email the instructor or one of the TAs (within 7 days from the assignment due date) with an explanation. 
            <b> Note: your email should include the assignment name, the question or part you believe was graded incorrectly, and an explanation of why you believe it is correct.</b>
        </p>

        <h3 className='section-header'>Reading Assigments: </h3>
        <p>
            We will provide weekly readings in the course schedule. 
            These readings will help you learn new design and programming skills, familiarize yourself with terminology, and notice which areas may need more attention. 
            These readings will be helpful in building skills you will use in the assignments and the project. 
            They may also be the basis for quiz questions.
        </p>

        <h3 className='section-header'>Quizzes: </h3>
        <p>
            In lieu of midterms and a final exam, we will have Canvas quizzes (approximately bi-weekly, every other week). 
            These quizzes will help reinforce the key concepts we cover in class and assigned readings. 
            These quizzes will have at most 10 questions.
        </p>

        <h3 className='section-header'>Programming and Design Assignments: </h3>
        <p>
            The best way to learn visualization concepts is to design your own visualizations. 
            To this end, you will have five homework assignments to practice the concepts you learned in class. 
            The goal of the assignments is to help you develop your final project. 
            We recommend viewing the assignments as a chance to learn, rather than a place to ``earn points." 
            To reflect this philosophy, we will grade holistically. 
            <br />
            <br />
            Assignments will be due Friday at 5:00PM EST, unless otherwise noted.
            <br />
            <br />
            Some <b>important rules</b> for these assignments:
        </p>
        <ul>
            <li>
                We recommend using version control (git) for your assignments. 
                Each time you finish a piece of code, push your changes to Github. 
                This will allow you to recover previous versions if something goes wrong. 
                Since you will be required to use version control for your project, It is a good idea to get used to it during the assignments. 
                <b>Note: Make sure your code is NOT publicly accessible.</b>
            </li>
            <li>
                The assignments will use several web technologies. 
                To simplify the grading process and to ensure browser compatibility, 
                your code should be compatible with the latest version of <a href="https://www.google.com/chrome/">Google Chrome</a>
            </li>
        </ul>

        <h3 className='section-header'>Project: </h3>
        <p>
            This course is project-based. For this project, you will team up with two other students. 
            You and your team will design a website with interactive visualizations that solve problems or answer questions related to your topic. 
            This will involve acquiring data, designing and implementing the visualizations, and critically evaluating your results. 
            You are likely to make mistakes and/or incorrect decisions throughout this process. Mistakes are valuable in finding a good design solution. 
            Therefore, it is important to start early, explore many possible design approaches, and iterate on your designs to improve them. 
            To facilitate this, we have included a project milestone during the semester where you can receive feedback to help you iterate. 
            <br />
            <br />
            You will work closely in 3-person project teams. You may choose your team members. If you cannot find a team, we will team you up randomly. 
            We want to encourage all team members to contribute to the project. For this reason, we will include <b>peer assessment</b> as a factor in the project grades. 
            Your project grade may be adjusted depending on the following factors:
        </p>
        <ul>
            <li>Your teammates' view of your contributions to the team</li>
            <li>The accuracy of your own assessment of your contributions</li>
            <li>The accuracy of your assessment of each of your teammates' contributions</li>
        </ul>

        <h3 className='section-header'>Office Hours: </h3>
        <p>
            See <NavLink to='/schedule'>schedule</NavLink> for details
        </p>

        <h3 className='section-header'>Collaboration, Cheating, and Plagiarism Policy: </h3>
        <p>
            I encourage you to discuss course ideas, material, and assignments with other students to better your understanding, but <b>you must submit your own work. </b> 
            In other words, you must write your own code, design your own visualizations, and use your own words when critically evaluating visualizations.
            <br />
            <br />
            For homework <b>assignments</b>, you may <b>not</b> use any libraries or code provided by the internet 
            (e.g., Stack Overflow, ChatGPT, etc.) except when explicitly permitted in the assignment instructions.
            <br />
            <br />
            For your <b>project</b>, you may use limited parts of code found online if the license allows for re-use. 
            You may use general purpose frameworks (e.g., Node.js, React, Bootstrap, JQuery, etc). 
            <b> Note: You must cite any source you use (author, year, title, time accessed, URL) directly in your source code via comment or header (libraries may be cited in your README file). </b> 
            You must also cite all of these sources clearly on your project website. If you use LLMs to help generate code, you must likewise acknowledge where and how they were used.
            <br />
            <br />
            For details on our plagiarism policy, please refer to the Academic Honesty Policy below.
        </p>

        <h3 className='section-header'>Academic Honesty Policy: </h3>
        <p>
            Since the integrity of the academic enterprise of any institution of higher education requires honesty in scholarship and research, academic honesty is required of all students at the University of Massachusetts Amherst. 
            Academic dishonesty is prohibited in all programs of the University. Academic dishonesty includes but is not limited to: cheating, fabrication, plagiarism, and facilitating dishonesty. 
            Appropriate sanctions may be imposed on any student who has committed an act of academic dishonesty. Instructors should take reasonable steps to address academic misconduct. 
            Any person who has reason to believe that a student has committed academic dishonesty should bring such information to the attention of the appropriate course instructor as soon as possible. 
            Instances of academic dishonesty not related to a specific course should be brought to the attention of the appropriate department Head or Chair. 
            Since students are expected to be familiar with this policy and the commonly accepted standards of academic integrity, ignorance of such standards is not normally sufficient evidence of lack of intent 
            (<a href="http://www.umass.edu/dean_students/codeofconduct/acadhonesty/">UMass Academic Honest Policy</a>).
        </p>

        <h3 className='section-header'>Title IX: </h3>
        <p>
            In accordance with Title IX of the Education Amendments of 1972 that prohibits gender-based discrimination in educational settings that receive federal funds, 
            the University of Massachusetts Amherst is committed to providing a safe learning environment for all students, free from all forms of discrimination, including sexual assault, sexual harassment, domestic violence, dating violence, stalking, and retaliation. 
            This includes interactions in person or online through digital platforms and social media. Title IX also protects against discrimination on the basis of pregnancy, childbirth, false pregnancy, miscarriage, abortion, or related conditions, including recovery. 
            There are resources here on campus to support you. A summary of the available Title IX resources (confidential and non-confidential) can be found at the following link: 
            <a href="https://www.umass.edu/titleix/resources"> https://www.umass.edu/titleix/resources</a>. You do not need to make a formal report to access them. If you need immediate support, you are not alone. 
            Free and confidential support is available 24 hours a day / 7 days a week / 365 days a year at the SASA Hotline 413-545-0800. 
            <br />
            <br />
            For purposes of Title IX reporting, I am a considered a “responsible employee” at UMass (<a href="https://www.umass.edu/titleix/about">https://www.umass.edu/titleix/about</a>). 
            That means that if you tell me about a situation involving sexual assault, sexual harassment, domestic violence, dating violence, stalking, and retaliation, I must share that information with the Title IX Coordinator. 
            Making a report to the Title IX Coordinator is my legal obligation, meets the University’s goal of providing members of our community with supportive resources they might need, and enables the University to obtain a more accurate picture of the extent of sexual violence in our community. 
            It will be completely up to you to determine if and how you want to work with the Title IX Coordinator’s office. You will not be in trouble for reporting to me that you have experienced any of these situations, and the law prohibits retaliation against anyone who participates in a Title IX process.
        </p>

        <h3 className='section-header'>Disability Accommodations: </h3>
        <p>
            The University of Massachusetts Amherst is committed to providing an equal educational opportunity for all students. If you have a documented physical, psychological, or learning disability on file with Disability Services (DS), you may be eligible for reasonable academic accommodations to help you succeed in this course. 
            If you have a documented disability that requires an accommodation, please notify me within the first two weeks of the semester so that we may make appropriate arrangements. For further information, please visit Disability Services (<a href="https://www.umass.edu/disability/">https://www.umass.edu/disability/</a>). 
            Moreover, I am here to help you succeed. Please let me know if there are any ways that I can better support you.
        </p>

        <h3 className='section-header'>Additional Support: </h3>
        <p>
            UMass Amherst has various supports for students including:
        </p>
        <ul>
            <li>Medical Care: <a href="https://www.umass.edu/uhs/"> University Health Services</a></li>
            <li>Mental Health and Counseling: <a href="https://www.umass.edu/counseling/"> Center for Counseling and Psychological Health</a></li>
            <li>Assorted Services: <a href="https://www.umass.edu/studentlife/wellbeing-safety"> Campus Wellbeing and Safety</a></li>
            <li>Writing Help: <a href="https://www.umass.edu/writing-center/"> Writing Center</a></li>
        </ul>

        <h3 className='section-header'>Credits and User Notice for Copyrighted Materials: </h3>
        <p>
        This course is based on classes taught by <b>Paul Rosen</b>, <b>Alexander Lex</b>, and <b>Miriah Meyer</b> at the University of Utah and <b>Cindy Xiong Bearfield</b> at the University of Massachusetts 
        and draws on the book ``Visualization Analysis and Design" by <b>Tamara Munzner</b>. Some of the material in this course is protected by copyright law. In some cases, the copyright is owned by third parties, 
        and we are making the third-party content available to you under fair use doctrine. Fair use permits only certain limited uses of the content. You may use this content only for your personal, noncommercial educational, and scholarly use.
        </p>
      </div>
    </>
  )
}

export default Syllabus;
