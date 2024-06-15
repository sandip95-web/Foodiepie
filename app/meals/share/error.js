"use client"
const Error = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50">
        <div className="bg-red-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">An Error Occur!</h2>
          <p className="text-lg">Failed to create meal.</p>
        </div>
      </div>
    );
  };
  
  export default Error;
  