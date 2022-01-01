import Head from 'next/head'

export default function Home() {
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
                  <li><a href="#" className="hover:underline">Lainnya</a></li>

                  </ul>
              </div>
              <div className="w-2/12">
                <input className="bg-gray-700 py-3 px-6 w-full rounded-full" placeholder="Search..."/>
              </div>
            </div> 
        </div>
      </nav>
    </div>            
  )
}
