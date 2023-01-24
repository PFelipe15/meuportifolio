import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import './social.css'
function Social() {
  return (
    <div className="social-container">
      <a target={"_blank"} href="https://www.linkedin.com/in/pauloofer/"> <BsLinkedin size={35} color="#fff" /></a>
      <a target={"_blank"} href="https://www.instagram.com/paullofelipe_/"> <BsInstagram size={35} color="#fff" /></a>
      <a target={"_blank"} href="https://github.com/PFelipe15"> <BsGithub size={35} color="#fff" /></a>
      
    </div>
  );
}

export default Social;
