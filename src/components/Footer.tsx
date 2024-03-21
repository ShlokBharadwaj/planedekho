import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants/index';

const Footer = () => {
  return (
    <footer className="text-white flex flex-col items-center space-y-4 py-6 max-w-[1440px] mx-auto z-10">
      <div className="flex space-x-4">
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Image
            src="/logos.png"
            alt="PlaneDekho Logo"
            width={130}
            height={40}
          />
        </Link>
      </div>
      <div className="flex space-x-4">
        {footerLinks.map((route) => (
          <Link key={route.path} href={route.path} className="text-white hover:text-blue-500">
            {route.name}
          </Link>
        ))}
      </div>
      <hr className="w-full border-gray-600" />
      <p>&copy; {new Date().getFullYear()}<Link href={"https://github.com/ShlokBharadwaj"} target="_blank" className="text-blue-400 hover:text-blue-500">&nbsp;Shlok Bharadwaj</Link></p>
    </footer>
  );
}

export default Footer;