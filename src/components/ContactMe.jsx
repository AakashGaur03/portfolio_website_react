import { Container } from 'react-bootstrap'
import '../App.css'
import { useState  ,useEffect } from 'react' 
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";


const ContactMe=()=>{

    return(
        <>
        <section id='Contact' className="mainContactMe d-flex justify-content-center align-items-center" >
            <Container>
            <h1 className='ContactMe headings'>Contact Me</h1>
            <div className='contentContact row '>
                <div className='col-lg-3 col-md-3 text-center anchorContact'>
                <MdOutlineEmail size={25} className='iconsContact'/>
                    <a href="mailto:aakashgaur0304@gmail.com" target='_blank' className='anchorContact'> aakashgaur0304@gmail.com</a>
                </div>
                <div className='col-lg-3 col-md-3 text-center anchorContact'>
                <IoCallSharp size={25} className='iconsContact'/>
                    <a href="tel:+918448770067" className='anchorContact'> +918448770067</a>
                </div>
                <div className='col-lg-3 col-md-3 text-center anchorContact'>
                <FaLinkedin  size={25} className='iconsContact'/>
                    <a href="https://www.linkedin.com/in/aakash-gaur-6978521b2/" target='_blank' className='anchorContact'> LinkedIn</a>
                </div>
            </div>
            </Container>
        </section>
        </>
    )
}

export default ContactMe

