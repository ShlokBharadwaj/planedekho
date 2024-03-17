import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-8 py-12">
      <div className="container mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image
            src="/logos.png" // replace with your logo path
            alt="Company Logo"
            width={130}
            height={50}
          />
          <p className="mt-4">&copy; {new Date().getFullYear()} PlaneDekho</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">About</h3>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Our Team</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul>
            <li><Link href="#">Our Services</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Socials</h3>
          <div className="flex space-x-4">
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="w-6" /> </a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="w-6" /> </a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="w-6" /> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;