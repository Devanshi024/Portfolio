import { useState } from 'react';
import { ReactComponent as Hamburger } from '../Assets/pre.svg';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Banner from './Banner';
import ProjectCards from './FlippingCard';
import Skills from './Skills';
import Experience from './Experience';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  
  return (
    <>
      <nav className="navbar fixed-top">
          <div className="menu-icon" onClick={handleClick}> 
            <Hamburger />
           </div>
          <Nav.Link  href="/" className="nav-logo">
              <Hamburger />
          </Nav.Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
           <Nav.Link 
                href="#home"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                spy={true} smooth={true} offset={50} duration={500}
              >
                About
                </Nav.Link>
            </li>
             <li className="nav-item">
              <Nav.Link
                
                href="#project"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                spy={true} smooth={true} offset={50} duration={500}
              >
                Projects
              </Nav.Link>
            </li>
            
            <li className="nav-item">
              <Nav.Link
                href="#skill"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                spy={true} smooth={true} offset={50} duration={500}
              >
                Skills
              </Nav.Link>
            </li>  

            <li className="nav-item">
              <Nav.Link
                href="#Experience"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                spy={true} smooth={true} offset={50} duration={500}
              >
                Experience
              </Nav.Link>
            </li>  
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        
      </nav>

        <div id="home"><Banner /></div>
        <div id="project"><ProjectCards /></div>
         <div id="skill"><Skills /></div>
         <div id="Experience"><Experience/></div>
    </>
  );
}










































// export const navs = [
//   {
//     id: "home",
//     title: "Home",
//   },
//   {
//     id: "project",
//     title: "Projects",
//   },
//   {
//     id: "skill",
//     title: "Skills",
//   },
// ];
// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

//   return (
//     <>
//       <nav className="navbar">
//         <div className="container">
//           <div className="logo">
//             <Hamburger />
//           </div>
//           <div className="menu-icon" onClick={handleShowNavbar}>
//             <Hamburger />
//           </div>
//           <div className={`nav-elements  ${showNavbar && 'active'}`}>
//             <ul>
//               {/* {navs.map((link) => {
//               console.log(link.title);

//               <li key={link.id}>
//                <a href={`#${link.id}`}>{link.title}</a>
//              </li>

//             })} */}

//               <li key='#home'>
//                 <Nav.Link href='#home'>Home</Nav.Link>
//               </li>
//               <li key='#project'>
//                 <Nav.Link href='#project'>Project</Nav.Link>
//               </li>
//               <li key='#skill'>
//                 <Nav.Link href='#skill'>Skills</Nav.Link>
//               </li>
//             </ul>
//           </div>

//         </div>

//       </nav>

//       <div id="home"><Banner /></div>
//       <div id="project"><ProjectCards /></div>
//       <div id="skill"><Skills /></div>
//       {/* <div id="Experience"><Experience/></div> */}
//     </>
//   )
// }

export default Navbar