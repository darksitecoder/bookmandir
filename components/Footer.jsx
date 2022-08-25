import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="footer-container">
      <p>
      © 2022 BookMandir All rights reserved
      </p>
      <p className="icons">
        <a href="https://www.instagram.com/codeobsessed/"  target="_blank"
            rel="noopener noreferrer"><AiFillInstagram/></a>
       <a href="https://github.com/darksitecoder"  target="_blank"
            rel="noopener noreferrer"> <AiOutlineGithub /> </a>
        <a href="https://twitter.com/darksitecoder"  target="_blank"
            rel="noopener noreferrer"><AiOutlineTwitter /></a>
      </p>
      <p>Owner <a href="https://darksitecoder.netlify.app/" style={{fontStyle:"italic"}} target="_blank"
            rel="noopener noreferrer">"Darksitecoder"</a> </p>
    </div>
  )
}

export default Footer