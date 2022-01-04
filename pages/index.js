import Head from 'next/head'
import {useState} from 'react'
export default function Home() {

 const[dropdown, setDropdown] = useState(false)

  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
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
                    <a  className="hover:underline cursor-pointer" onClick={() => setDropdown(!dropdown)}>Lainnya</a>
                    {dropdown && (
                    <ul className='absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4'>
                      <li><a href='#' className='flex py-3 px-6  border-b border-white/5'>Internet</a></li>
                      <li><a href='#' className='flex py-3 px-6  border-b border-white/5'>Books</a></li>
                      <li><a href='#' className='flex py-3 px-6 '>Open Source</a></li>
                    </ul>
                    )}
                  </li>

                  </ul>
              </div>
              <div className="w-2/12">
                <input className="bg-gray-700 py-3 px-6 w-full rounded-full bg-search pl-12" placeholder="Search..."/>
              </div>
            </div> 
        </div>
      </nav>
    </div>            
  )
}
