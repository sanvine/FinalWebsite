import React from 'react'
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

const Footer = () => {
return (
<footer class='footer mt-5'>
<div class='row footer-content'>

    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-about'>
        <h3 class='d-flex justify-content-center pb-3'>About Us</h3>
        <p class='footer-about-p d-flex justify-content-center w-100'>
        We are dedicated to providing quality education and resources to help students grow and succeed in their academic journeys.
        </p>
    </div>

    
    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-qk-links'>
        <h3 class='d-flex justify-content-center pb-3'>Quick Links</h3>
        <ul class='footer-qk-links-ul '>
            <li><a href="/courses" class='footer-qk-links-li d-flex justify-content-center'>Courses</a></li>
            <li><a href="/about" class='footer-qk-links-li d-flex justify-content-center'>About us</a></li>
            <li><a href="/contact" class='footer-qk-links-li d-flex justify-content-center'>Contact Us</a></li>
        </ul>
    </div>

    
    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-contact'>
        <h3 class='d-flex justify-content-center pb-3'>Contact</h3>
        <p class='d-flex justify-content-center'>Email: codetech.learn.25@gmail.com</p>
        <p class='d-flex justify-content-center'>Phone: +91 9148135775</p>
    </div>

    
    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-follow'>
        <h3 class='d-flex justify-content-center pb-3'>Follow Us</h3>
        <a href="https://www.facebook.com/share/1JCsdMB2Xd/" class='footer-follow-a d-flex justify-content-center'>Facebook</a>
        <a href="https://www.instagram.com/codetech_learn?igsh=MWVnYWEwMXk1YWJmcg==" class='footer-follow-a d-flex justify-content-center'>Instagram</a>
        <a href="https://www.linkedin.com/in/codetech-learn-6bb55a379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class='footer-follow-a d-flex justify-content-center'>LinkedIn</a>
    </div>
</div>

<div class='footer-rights'>
    <hr class='footer-hr' />
    <p>&copy; 2025 Education Website. All rights reserved.</p>
</div>
</footer>
)
}

export default Footer