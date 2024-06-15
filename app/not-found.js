// components/NotFound.js

import Link from "next/link";

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">Oops!</h1>
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">404 - Page Not Found</h2>
          <p className="text-lg text-gray-700 mb-8">The page you are looking for could not be found.</p>
          <Link href="/" className="text-lg font-semibold text-blue-500 hover:underline">Go back to home</Link>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  