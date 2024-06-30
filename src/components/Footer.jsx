import React from 'react';
import './Footer.css'
function Footer() {
    return (
        <div className="footer-container font-abc bg-white text-black p-10">
            <div className="footer-content flex flex-col lg:flex-row justify-between">
                <div className="footer-section">
                    <h2 className="font-bold text-xl font-abc">AUTONO</h2>
                    <ul className="mt-4">
                        <li>Technology</li>
                        <li>About</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-section mt-10 lg:mt-0">
                    <ul>
                        <li>Tel: 123-456-7890</li>
                        <li>Email: info@mysite.com</li>
                        <li>500 Terry Francine St</li>
                        <li>San Francisco, CA 94158</li>
                    </ul>
                </div>
                <div className="footer-section mt-10 lg:mt-0">
                    <h2 className="font-bold text-xl">SUBSCRIBE</h2>
                    <p className="mt-4">Sign up to receive Autono news and updates.</p>
                    <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            className="p-2 border border-gray-400 rounded w-full"
                        />
                        <button className="mt-2 p-2 bg-black text-white rounded w-full">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom flex flex-col lg:flex-row justify-between mt-10">
                <p>© 2035 by Autono. Powered and secured by <a href="https://www.wix.com" className="underline">Wix</a></p>
                <div className="flex space-x-4 mt-4 lg:mt-0">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
