import Slideshow from "@/components/slideshow/ImageSlideShow";
import { FaRegComments, FaUsers, FaUtensils } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row bg-gradient-to-r from-green-400 to-blue-500 text-white p-2">
          <div className="w-full md:w-2/3">
            <div className="h-full flex items-center justify-center">
              <Slideshow />
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-gray-800 text-white py-12 px-6 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to FoodiePie
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Taste & share food from all around the world
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition duration-300">
                <a href="/community">Join the Community</a>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
                <a href="/meals">Explore Meals</a>
              </button>
            </div>
          </div>
        </header>

        <main className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How FoodiePie Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-6">
              <div className="flex items-center bg-yellow-50 p-6 rounded-lg">
                <FaUtensils className="text-6xl text-yellow-300 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Explore</h3>
                  <p className="text-lg">
                    Discover a diverse range of meals from different cultures
                    and cuisines.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-red-50 p-6 rounded-lg">
                <FaRegComments className="text-6xl text-red-300 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Share</h3>
                  <p className="text-lg">
                    Share your favorite recipes, food stories, and cooking tips
                    with the community.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-pink-50 p-6 rounded-lg">
                <FaUsers className="text-6xl text-pink-300 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Connect</h3>
                  <p className="text-lg">
                    Connect with fellow foodies, exchange ideas, and build
                    friendships over a shared love for food.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg mt-8">
              Join FoodiePie today and embark on a culinary journey like never
              before!
            </p>
          </div>
        </main>

        {/* About FoodiePie Section */}
        <section className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About FoodiePie
            </h2>
            <p className="text-lg mb-6">
              FoodiePie is a vibrant community of food enthusiasts who love to
              explore, share, and connect through the world of food. Whether you
              are a seasoned chef or a home cook, FoodiePie offers a platform
              to:
            </p>
            <ul className="text-left text-lg mb-6 space-y-4">
              <li>
                <span className="font-bold">Discover Recipes:</span> Find new
                and exciting recipes from fellow food lovers.
              </li>
              <li>
                <span className="font-bold">Share Your Creations:</span> Post
                your culinary creations and get feedback from the community.
              </li>
              <li>
                <span className="font-bold">Join Events:</span> Participate in
                cooking challenges, live demos, and food festivals.
              </li>
            </ul>
            <p className="text-lg mb-6">
              At FoodiePie, we believe that food is more than just sustenance –
              it's a way to connect, share stories, and create memories. Come
              and be part of our journey!
            </p>
          </div>
        </section>


        {/* Footer Section */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 text-center">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-lg hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} FoodiePie. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
