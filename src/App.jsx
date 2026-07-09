import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";


function App(){

const [open,setOpen]=useState(null);


const projects=[

{
title:"Autonomous Software Failure Intelligence System (ASFIS)",
short:
"An intelligent software reliability platform designed for predictive failure analysis, dependency tracking, and recovery decision support in distributed systems.",

full:[
"Designed a modular architecture for analyzing software failures using simulated logs, events, and system performance metrics.",
"Implemented graph-based dependency analysis using adjacency-list representation to identify failure propagation between connected services.",
"Developed Failure Fingerprinting Engine to detect recurring failure patterns and improve root cause identification.",
"Built Recovery Impact Predictor (RIP) to evaluate recovery strategies with confidence-based decision support.",
"Created reliability scoring, automated post-mortem reporting, and testing modules for validating recovery workflows."
],

tech:"Python • Flask • FastAPI • HTML • CSS • JavaScript"
},


{
title:"Role-Based Peer Code Review Platform",

short:
"A full-stack collaborative platform enabling secure code submissions, anonymous peer reviews, and structured developer feedback workflows.",

full:[
"Developed a role-based system supporting students, reviewers, and administrators with separate access permissions.",
"Implemented JWT authentication and authorization for secure user sessions.",
"Built REST APIs using Node.js and Express.js for submission tracking, review assignment, and feedback management.",
"Integrated Oracle SQL database for managing users, submissions, reviews, and workflow data.",
"Designed responsive dashboards to improve user experience and review efficiency."
],

tech:"React.js • Node.js • Express.js • Oracle SQL • JWT"
},


{
title:"AI Student Dropout Prediction System",

short:
"Machine learning based application designed to predict student dropout risks and support early intervention decisions.",

full:[
"Built predictive machine learning models using student academic and behavioral indicators.",
"Applied supervised learning techniques and model evaluation methods to improve prediction accuracy.",
"Developed an interactive Streamlit application for displaying predictions and insights.",
"Focused on identifying at-risk students and supporting data-driven retention strategies."
],

tech:"Python • Machine Learning • Streamlit"
},
{
title:"MoodMentor - AI Powered Employee Wellness Recommendation System",

short:
"An AI-powered emotional analytics platform that analyzes user text, detects emotional patterns, and provides personalized well-being recommendations using NLP and machine learning.",

full:[

"Developed an AI-based emotional intelligence platform capable of analyzing text inputs and identifying sentiment polarity, emotional intensity, and dominant emotional states.",

"Implemented NLP preprocessing pipelines including tokenization, stop-word removal, lemmatization, and text cleaning for improved emotion analysis.",

"Integrated transformer-based emotion classification concepts using BERT/DistilBERT models to classify emotions such as joy, sadness, anger, fear, surprise, and disgust.",

"Designed a personalized recommendation engine that maps detected emotional states to wellness suggestions including journaling prompts, breathing exercises, and support resources.",

"Built secure user management modules with JWT authentication and database persistence for storing emotional history and user preferences.",

"Developed analytics dashboards to visualize sentiment trends, emotional reports, and user well-being insights over time."

],

tech:"Python • NLP • BERT • Flask • FastAPI • Streamlit • PostgreSQL • JWT"
}

];



return(

<div>


{/* NAVBAR */}

<nav>

<h2>Siddharth S</h2>

<div>

<a href="#experience">Experience</a>
<a href="#projects">Projects</a>
<a href="#certifications">Certifications</a>
<a href="#contact">Contact</a>

</div>

</nav>




{/* HERO */}


<motion.section 
className="hero"

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}
>

<div>

<h1>
Hi, I'm <span>SIDDHARTH S</span>
</h1>


<h3>
Software Engineer | Full Stack Developer | AI Enthusiast
</h3>


<p>

B.Tech Information Technology student at VIT Vellore passionate about
software engineering, AI applications, backend development, and building
scalable technology solutions.

</p>



<div className="hero-btn">

<a href="https://drive.google.com/file/d/1QgA8o34PS-0V9Zl7KK-KdjmCZOBJUux4/view">
Resume
</a>


<a href="https://github.com/Siddharth-145">
GitHub
</a>


<a href="https://linkedin.com/in/siddharth-s1002">
LinkedIn
</a>

</div>

</div>

</motion.section>




{/* ABOUT */}


<section>

<h2 className="title">
About Me
</h2>


<div className="box">

I am an Information Technology undergraduate interested in full-stack
development, artificial intelligence, system design, and problem solving.
I enjoy creating practical solutions by combining software engineering
principles with modern technologies.

</div>

</section>





{/* EDUCATION */}


<section>

<h2 className="title">
Education
</h2>


<div className="box">

<h3>
Vellore Institute of Technology, Vellore
</h3>


<p>

B.Tech Information Technology

<br/>

CGPA: 8.81/10

<br/>

Expected Graduation: May 2028

</p>


</div>


</section>





{/* SKILLS */}


<section>


<h2 className="title">
Technical Skills
</h2>


<div className="skills">


{
[
"Python",
"Java",
"C++",
"C",
"JavaScript",
"React.js",
"Node.js",
"Express.js",
"Flask",
"FastAPI",
"SQL",
"Oracle SQL",
"Git",
"GitHub",
"DSA",
"OOP",
"DBMS",
"Operating Systems"
].map((skill,index)=>

<span key={index}>
{skill}
</span>

)

}


</div>


</section>





{/* EXPERIENCE */}



<section id="experience">


<h2 className="title">
Experience
</h2>


<div className="timeline">


<div className="box">

<h3>
Artificial Intelligence Intern
</h3>

<h4>
IBM SkillsBuild × Edunet Foundation | Jan 2026
</h4>


<p>

Completed AI internship covering machine learning fundamentals,
model evaluation, supervised learning, and AI application development.

</p>

</div>



<div className="box">

<h3>
Artificial Intelligence Virtual Intern
</h3>

<h4>
Infosys Springboard | Jun 2026 - Present
</h4>


<p>

Working on AI, machine learning, software engineering concepts, and
practical application development.

</p>

</div>



</div>


</section>






{/* PROJECTS */}


{/* PROJECTS */}

<section id="projects">

<h2 className="title">Featured Projects</h2>


<div className="projects">


{/* Expanded project always comes first */}

{open !== null && (

<motion.div
className="card expanded"

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.5
}}

>

<h3>{projects[open].title}</h3>


<ul className="project-details">

{projects[open].full.map((point,i)=>(

<li key={i}>
{point}
</li>

))}

</ul>


<h4>
{projects[open].tech}
</h4>


<button 
className="view-btn"
onClick={()=>setOpen(null)}
>
Show Less
</button>


</motion.div>

)}



{/* Remaining projects */}

{projects.map((p,index)=>(

open !== index && (

<motion.div
className="card"
key={index}

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.4
}}

>


<h3>
{p.title}
</h3>


<p>
{p.short}
</p>


<h4>
{p.tech}
</h4>


<button
className="view-btn"
onClick={()=>setOpen(index)}
>
View More
</button>


</motion.div>

)

))}


</div>


</section>






{/* CERTIFICATIONS */}



<section id="certifications">


<h2 className="title">
Certifications
</h2>


<div className="box">


<ul>

<li>
Oracle Cloud Infrastructure 2025 Certified Professional – Generative AI
</li>


<li>
IBM SkillsBuild – Artificial Intelligence Fundamentals
</li>


<li>
Infosys Springboard – Artificial Intelligence Learning Path
</li>


<li>
Google × Kaggle – 5-Day AI Agents Intensive Course
</li>


</ul>


</div>


</section>





{/* ACHIEVEMENTS */}


<section>


<h2 className="title">
Achievements
</h2>


<div className="box">


<ul>


<li>
Solving Data Structures and Algorithms problems to strengthen problem-solving skills.
</li>


<li>
Designed patent-oriented ASFIS software architecture.
</li>


<li>
Built multiple AI and full-stack software applications.
</li>


</ul>


</div>


</section>





{/* CONTACT */}



<section id="contact">


<h2 className="title">
Contact
</h2>


<div className="box">

<p>
Email: siddharth.s2024b@vitstudent.ac.in
</p>


<p>
GitHub: github.com/Siddharth-145
</p>


<p>
LinkedIn: linkedin.com/in/siddharth-s1002
</p>


</div>


</section>




<footer>

© 2026 Siddharth S | Software Developer Portfolio

</footer>



</div>

)

}


export default App;