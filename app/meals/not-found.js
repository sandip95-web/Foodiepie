import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The meal you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
