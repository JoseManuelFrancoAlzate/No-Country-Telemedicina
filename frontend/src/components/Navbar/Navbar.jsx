'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';

const navigationItem = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
];

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <nav className="py-4 bg-transparent w-full">
      <div className="flex items-center justify-between w-full container">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" width={64} height={101} alt="logo" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-8">
              {navigationItem.map((item) => (
                <li key={item.title} className="font-inter text-primary/90">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-x-2">
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r flex items-center from-[#0049F9] to-[#32C0D6] px-5 py-2 hover:opacity-65 transition-all duration-300 rounded-md font-semibold text-sm text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <Link
              href="/login"
              className="flex items-center px-2 py-1 hover:opacity-95 group border-e-red-500 transition-all duration-300 font-semibold text-sm text-black/75"
            >
              <IoMdSearch size={30} className="group-hover:opacity-80" />
            </Link>
            <Link
              href="/login"
              className="bg-gradient-to-r flex items-center from-[#0049F9] to-[#32C0D6] px-5 py-2 hover:opacity-65 transition-all duration-300 rounded-md font-semibold text-sm text-white"
            > 
              Login
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-1.5 border-2 border-[#2299E2] transition-all duration-300 rounded-md text-sm"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
