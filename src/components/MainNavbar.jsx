import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll'
import {useState} from 'react'
import '../App.css'

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

function MainNavbar({onNavItemClick}) {

    const [activeLink,setActiveLink]=useState('home')
    const [activeLink2,setActiveLink2]=useState('')

    const handleNavItemClick=(link)=>{
      setActiveLink2('');
      setActiveLink(link);
      onNavItemClick('');
      onNavItemClick(link);
    }
    const handleSetActive = (to) => {
      setActiveLink2(to);
      setActiveLink('');
      onNavItemClick('');
      onNavItemClick(to);

    }

  return (
    <Navbar expand="lg" className="d-flex justify-content-center mainnavbar">
      <Container>
        <Navbar.Brand href="#home">Aakash Gaur</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbaritems">
            {navItems.map(({id,label})=>(
                <Link to={label}  spy={true} 
                smooth={true} 
                offset={-10} 
                duration={500}  key={id} onClick={()=>handleNavItemClick(id)} onSetActive={()=>handleSetActive(id)} className=
                {`nav-link ${activeLink===id ? 'active' : ''} ${activeLink2===id ? 'active' : ''}`}>
                    {label}
                </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;