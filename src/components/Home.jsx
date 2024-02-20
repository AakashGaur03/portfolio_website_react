import React from 'react'
import { Container } from 'react-bootstrap'
import {useTypewriter , Cursor} from 'react-simple-typewriter'

const Home = ({isActive}) => {

    const [tpyeEffect]=useTypewriter({
        words :['Designer' , 'Developer' ,'Freelancer'],
         loop:{}, 
         typeSpeed:100, 
         deleteSpeed : 50
    })
    const textstyle ={
        width: '35vw'
    }


  return (
    <section id="Home" className='MainHome d-flex justify-content-center align-items-center'>
        <Container className='d-flex justify-content-center align-items-center'>
        <div className={`${isActive ? "compActiveLeft" : ""}`}>
            <img src="./Images/somethimg.png" className='imagestyle'  alt="" />
        </div>
        <div className={`text-white ${isActive?'compActiveRight':''}`}  style={textstyle}>
        <h1 className='fs-1 fw-bold'>Aakash Gaur</h1>
        <div className='fs-1 fw-light fst-italic'>
            I am {' '}
            <span>{tpyeEffect}</span>
        </div>
        </div>
        </Container>

    
    </section>
  )
}

export default Home