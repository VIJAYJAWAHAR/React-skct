import React from 'react'
import skct1 from "../Images/Skct logo.png"
import skct2 from "../Images/skct bus.jpeg"
import skct3 from "../Images/skct boys result.jpg"
import skct4 from "../Images/mail.png"
import skct5 from "../Images/skct 2.gif"
import back from "../Images/blue.jpeg"
import you from "../Images/youtube.png"
import face from "../Images/facebbok.png"
import insta from "../Images/instagram.png"
import link from "../Images/linkedin.jpeg"
import twit from "../Images/twitter.jpeg"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    const backClick = () =>
    {
        navigate("/Login")
    }
    
  return (

<div>
    <body style={{backgroundImage:`URL(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

        <center>
        <h1>Welcome to <span title="Sri Krishna College of Technology">SKCT!!</span></h1>
        <img src={skct1}></img>
        <hr/>
        <img src={skct5}></img>
        <h3>About Us</h3>
        <p style={{fontSize:20}}>Nestled at the foothills of the Western Ghats, located in a sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna College of Technology (SKCT) is a vibrant institute of higher education established in 1985 promoted by Sri Krishna Institutions. An extraordinary freedom of opportunity—to explore, to collaborate and to challenge oneself is the hallmark of the Institute. Being an autonomous institute, affiliated to Anna University, Chennai, and approved by AICTE, New Delhi, SKCT lays strong emphasis on collaborative research and stands apart from other institutes by its participatory work culture, student care programmes and high industry interaction. In a span of 38 years, it has emerged as one of the premier engineering colleges for learning, discovery and innovation due to the dynamic leadership of the Chairperson and Managing Trustee Smt S Malarvizhi. Being an acclaimed educationalist, she continues to contribute profusely for the glory and happiness of advancing generations. The college is accredited with A Grade by NAAC and eligible undergraduate programs are accredited by the National Board of Accreditation (NBA), New Delhi. The college offers 11 undergraduate programmes and 6 postgraduate programmes in engineering, technology, and Management Studies.</p>
        <a href="https://www.skct.edu.in/#/" target="_blank">Click Here !!</a>
        <p ><b style={{color:'yellow'}}>Contact Us</b>
            <br/>
            Sri Krishna College of Technology
            ,
            <br/>
            Kovaipudur,
            
            <br/>
            Coimbatore-641042.
            
            <br/>
            phone0422-2984567-68(2 Lines)
            </p>
            <hr/>
            <h3><i>Courses</i></h3>
        </center>
        <ul>
            <li>B.E ECE</li>
            <li>B.E EEE</li>
            <li>B.E MECH</li>
            <li>B.E CIVIL</li>
            <li>B.Tech CSE</li>
            <li>B.Tech IT</li>
        </ul>
        <hr/>
        <center>
            <h2><b>BUS FACILITIES</b></h2>

            <h3>For more Details Click the below Picture</h3>
            <a href="https://skcet.ac.in/pdf/SKCET%20Transport%20Details%20on%20Website.pdf" target="_blank">
                <img src={skct2}height={240}width={400}></img>
            </a>
            <hr/>
            <h3 style={{color:'coral'}}>Hostel</h3>
            <a href="https://www.skct.edu.in/#/hostel" target="_blank">
                <img src={skct3}height={200}></img>
            </a>
            <hr/>
            <a href="mailto:Skct@gmail.com">
                <img src={skct4}height={20}width={30}style={{float:'left',padding:'25px'}}></img>
                
            </a>
            <a href="www.youtube.com/@skct-official6423">
                <img src={you}height={30}width={30}style={{float:'left',padding:'20px'}}></img>
                
            </a>
            <a href="facebook.com/skctofficial">
                <img src={face}height={30}width={30}style={{float:'left',padding:'20px'}}></img>
                
            </a>
            <a href="instagram.com/skct__official">
                <img src={insta}height={25}width={25}style={{float:'left',padding:'22px'}}></img>
                
            </a>
            <a href="twitter.com/skct__official">
                <img src={twit}height={25}width={35}style={{float:'left',padding:'20px'}}></img>
                
            </a>
           
            <a href="linkedin.com/in/skctofficial">
                <img src={link}height={25}width={25}style={{float:'left',padding:"20px"}}></img>
                
            </a>
            
            <br/>
            <button onClick={backClick}>Back</button>

            
        </center>
    </body>
    </div>
  )
}

export default Home;