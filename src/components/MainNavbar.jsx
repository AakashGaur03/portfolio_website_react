import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function MainNavbar({onNavItemClick}) {

  const [activeLink,setActiveLink]=useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navItems.forEach(({ label, id }) => {
        const section = document.getElementById(label);
        if (!section) return;

        const sectionTop = section.offsetTop - 10;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(id);
          onNavItemClick(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onNavItemClick]);

  const handleNavItemClick = (link) => {
    setActiveLink(link);
    onNavItemClick(link);
  };

  return (
    <Navbar expand="lg" className="d-flex justify-content-center mainnavbar">
      <Container>
        <Navbar.Brand href="#home">Aakash Gaur</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbaritems">
            {navItems.map(({id,label}) => (
              <a
                href={`#${label}`}
                key={id}
                onClick={() => handleNavItemClick(id)}
                className={`nav-link ${activeLink===id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;