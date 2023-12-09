import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
  { id: "Resume", label: "Resume" },
];

function MainNavbar({ onNavItemClick }) {
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const navbarHeight = document.querySelector(".mainnavbar").offsetHeight;
      const scrollPosition = window.scrollY + navbarHeight;

      const isScrollingDown = lastScrollPosition < scrollPosition;

      navItems.forEach(({ label, id }) => {
        const section = document.getElementById(label);
        if (!section) return;

        const sectionTop = section.offsetTop - 10;
        const sectionBottom = sectionTop + section.clientHeight;

        const isSectionVisible =
          scrollPosition >= sectionTop && scrollPosition < sectionBottom;

        if (isScrollingDown && isSectionVisible) {
          setActiveLink(id);
          onNavItemClick(id);
        }
        if ( isSectionVisible) {
          setActiveLink(id);
        }
      });

      lastScrollPosition = scrollPosition;
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
        <Navbar.Brand className="smallScreenNav text-center" href="#home">
          Aakash Gaur
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="smallScreenNavaToggle"
        />
        <Navbar.Collapse id="basic-navbar-nav NavBarSmallScreenMargin">
          <Nav className="ms-auto smallScreenNav navbaritems">
            {navItems.map(({ id, label }) => (
              <a
                href={`${label==='Resume'?'/AakashCV.pdf': '#'+  label}`}
                target={label === 'Resume' ? '_blank' : '_self'}
                key={id}
                onClick={() => handleNavItemClick(id)}
                className={`nav-link text-center ${
                  activeLink === id ? "active" : ""
                }`}
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
