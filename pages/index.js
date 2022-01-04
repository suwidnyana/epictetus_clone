import Navbar from '@components/Navbar';
import FeaturedPost from '@components/FeaturedPost';

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar/>
      <div className="container mx-auto">
        <FeaturedPost/>
      </div>
    </div>
  )
}
