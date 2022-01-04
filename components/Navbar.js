import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const dropdownList = [
      { text: 'Internet', href: '/posts' },
      { text: 'Books', href: '/posts' },
      { text: 'Open Source', href: '/posts' },
    ];
    return (
        <nav className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-4/12 flex items-center">
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">E</div>
              Epictetus
            </div>
            <div className="w-8/12">
              <ul className="space-x-10 flex items-center">
                <li><a href="#" className="hover:underline">UI Design</a></li>
                <li><a href="#" className="hover:underline">Front End</a></li>
                <li><a href="#" className="hover:underline">Back End</a></li>
                <li className='relative'>
                  <a className="hover:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropdown)}>
                    Lainnya
                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  {dropdown && (
                    <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {dropdownList.map(({text, href}) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <Link href={href}> 
                          <a className="flex py-3 px-6 hover:bg-gray-700/60">
                            {text}
                          </a>
                        </Link>
                      </li>
                    ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="w-2/12">
              <input className="bg-gray-700 py-3 px-6 w-full rounded-full bg-search pl-12" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>
    )
}