import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import profilePic from './assets/profile.jpg';  // Add this import
import ecommerceImg from './assets/projects/ecommerce.jpg';
import hotelImg from './assets/projects/hotel.jpg';
import weatherImg from './assets/projects/weather.jpg';
// Add this import at the top with other imports
import nptelCert from './assets/certificates/nptel-cert.jpg';
import dsaCert from './assets/certificates/dsa-cert.jpg';
// Add this import at the top
import fullstackBg from './assets/fullstack-bg.jpg';
// Add this import at the top with other imports
import serverCert from './assets/certificates/server-cert.jpg';
// Add this import at the top with other imports
import lpuImg from './assets/lpu.jpg';
// Add this import at the top with other imports
import davImg from './assets/dav.jpg';

function App() {
  return (
    <div className="App dark-theme">
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="profile-container">
              <img 
                src={profilePic}
                alt="Shekhar Rana" 
                className="profile-image"
              />
            </div>
            <div className="intro-text">
              <h1>Hello, I am</h1>
              <h2 className="name"> Sunny </h2>
              <p className="role">Full Stack Developer</p>
              <p className="description">
                Full Stack Developer passionate about building scalable, secure, and efficient web applications. 
                I'm driven to solve real-world challenges by leveraging technologies across the frontend and backend, 
                including modern frameworks, cloud services, database management, and distributed systems.
              </p>
            </div>
            <div className="contact-info">
              <a href="mailto:shekharrana7075@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i>
                sunny1972003@gmail.com
              </a>
              <a href="tel:+918210390248" className="contact-link">
                <i className="fas fa-phone"></i>
                +91 8295994946
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sunny-saini-247247254/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://github.com/Sunny5130" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul className="skills-list">
                  <li><i className="skill-icon fab fa-html5"></i>HTML</li>
                  <li><i className="skill-icon fab fa-css3-alt"></i>CSS</li>
                  <li><i className="skill-icon fab fa-js"></i>JavaScript</li>
                  <li><i className="skill-icon fab fa-react"></i>React.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul className="skills-list">
                  <li><i className="skill-icon fab fa-node-js"></i>Node.js</li>
                  <li><i className="skill-icon fab fa-node-js"></i>Express.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Databases</h3>
                <ul className="skills-list">
                  <li><i className="skill-icon fas fa-database"></i>MongoDB</li>
                  <li><i className="skill-icon fas fa-database"></i>MySQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Languages</h3>
                <ul className="skills-list">
                  <li><i className="skill-icon fas fa-code"></i>C++</li>
                  <li><i className="skill-icon fab fa-java"></i>Java</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools/Platforms</h3>
                <ul className="skills-list">
                  <li><i className="skill-icon fas fa-code"></i>VS-Code</li>
                  <li><i className="skill-icon fab fa-git-alt"></i>Git</li>
                  <li><i className="skill-icon fas fa-chart-bar"></i>Tableau</li>
                  <li><i className="skill-icon fas fa-database"></i>ETL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Soft Skills</h3>
                <ul className="skills-list">
                  <li><i className="skill-icon fas fa-puzzle-piece"></i>Problem-Solving</li>
                  <li><i className="skill-icon fas fa-users"></i>Team Player</li>
                  <li><i className="skill-icon fas fa-tasks"></i>Project Management</li>
                  <li><i className="skill-icon fas fa-sync-alt"></i>Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image-container">
                  <img src={ecommerceImg} alt="E-Commerce Project" className="project-image" />
                </div>
                <h3>E-Commerce Web Application</h3>
                <p className="project-date">Mar '24</p>
                <div className="tech-stack">React.js, Node.js, MongoDB</div>
                <ul>
                  <li>Built a full-stack platform with user authentication, cart, and integrated payments (90% user satisfaction)</li>
                  <li>Used ETL for backend calculations, optimizing pricing and inventory performance</li>
                  <li>Deployed via Docker for scalable environment management</li>
                </ul>
              </div>
              
              <div className="project-card">
                <div className="project-image-container">
                  <img src={hotelImg} alt="Hotel Management System" className="project-image" />
                </div>
                <h3>Hotel Management System</h3>
                <p className="project-date">Jun '24</p>
                <div className="tech-stack">React.js, Node.js, MySQL</div>
                <ul>
                  <li>Developed a hotel resource management system, reducing manual workload by 40%</li>
                  <li>Improved coordination of rooms, employees, and customers; increased efficiency by 50%</li>
                  <li>Integrated MySQL for faster and more reliable data access</li>
                </ul>
              </div>
              
              <div className="project-card">
                <div className="project-image-container">
                  <img src={weatherImg} alt="Weather Forecast App" className="project-image" />
                </div>
                <h3>Weather Forecast App</h3>
                <p className="project-date">Jan '23</p>
                <div className="tech-stack">HTML, CSS, JavaScript</div>
                <ul>
                  <li>Live weather updates using Open Weather Map API</li>
                  <li>Responsive UI with dynamic DOM updates</li>
                  <li>Displayed real-time temperature, humidity, and weather conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="certificates-section">
          <div className="container">
            <h2>Certificates</h2>
            <div className="certificates-grid">
              <div className="certificate-card">
                <a 
                  href="https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs91" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <div className="certificate-image-container">
                    <img src={nptelCert} alt="Software Testing Certificate" className="certificate-image" />
                  </div>
                  <h3>Software Testing | NPTEL</h3>
                  <p className="cert-details">
                    <span className="cert-instructor">IIT Bangalore</span>
                    <span className="cert-score">Score: 60%</span>
                  </p>
                  <p className="cert-date">Jul-Oct 2024</p>
                </a>
              </div>
              <div className="certificate-card">
                <a 
                  href="https://www.coursera.org/account/accomplishments/verify/8YRFK3NQJ479" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <div className="certificate-image-container">
                    <img src={serverCert} alt="Server-side JavaScript Certificate" className="certificate-image" />
                  </div>
                  <h3>Algorithms on String | NIIT</h3>
                  <p className="cert-details">
                    <span className="cert-instructor">NIIT & Coursera</span>
                    <span className="cert-date">Mar 20, 2024</span>
                  </p>
                </a>
              </div>
              <div className="certificate-card">
                <a 
                  href="ude.my/UC-642205a3-820f-4b9e-b48f-dd3033f38bb5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <div className="certificate-image-container">
                    <img src={dsaCert} alt="DSA Certificate" className="certificate-image" />
                  </div>
                  <h3>Mastering Data Structures & Algorithms using C and C++</h3>
                  <p className="cert-details">
                    <span className="cert-instructor">Instructor: Abdul Bari</span>
                    <span className="cert-duration">58.5 total hours</span>
                  </p>
                  <p className="cert-date">Nov 8, 2023</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="container">
            <h2>Education</h2>
            <div className="education-grid">
              <div className="education-card">
                <div className="education-image-container">
                  <img src={lpuImg} alt="Lovely Professional University" className="education-image" />
                </div>
                <h3>Lovely Professional University</h3>
                <p className="location">Phagwara, Punjab</p>
                <p className="duration">Aug '22 - Present</p>
                <p>Bachelor of Technology</p>
                <p>Computer Science and Engineering</p>
                <p className="grade">CGPA: 7.95</p>
              </div>
              <div className="education-card">
                <div className="education-image-container">
                  <img src={davImg} alt="D.A.V School" className="education-image" />
                </div>
                <h3>KLP Sr Sec School</h3>
                <p className="location">Narnaul, Mahendergarh (Haryana)</p>
                <p className="duration">Mar '21 - May '22</p>
                <p>Intermediate</p>
                <p className="grade">PCM: Percentage: 95%</p>
              </div>
              <div className="education-card">
                <div className="education-image-container">
                  <img src={davImg} alt="D.A.V School" className="education-image" />
                </div>
                <h3>KLP Sr Sec School</h3>
                <p className="location">Narnaul, Mahendergarh (Haryana)</p>
                <p className="duration">Mar '19 - May '20</p>
                <p>Matriculation</p>
                <p className="grade">Percentage: 84.6%</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
