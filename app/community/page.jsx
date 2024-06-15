import Image from 'next/image'
import React from 'react'
import Slide3 from "@/assets/slide3.jpg";
import RecipeImage1 from "@/assets/slide2.jpg"; 
import RecipeImage2 from "@/assets/slide1.jpg"; 
import EventImage from "@/assets/slide1.jpg"; 

const CommunityPage = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-8">Fooddiepie Community</h1>
      <div className="w-full max-w-4xl text-center">
        <p className="mb-8">
          Fooddiepie brings together food lovers from around the globe to share
          their culinary experiences. Join us to explore, share, and celebrate the world of food!
        </p>
        <Image
          src={Slide3}
          alt="Fooddiepie Image"
          width={600}
          height={400}
          className="object-cover w-full rounded-lg mb-12"
        />
      </div>

      {/* User Submission Form */}
      <div className="w-full max-w-2xl mb-12">
        <h2 className="text-3xl font-semibold mb-6">Share Your Recipe</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left mb-2 font-medium">Recipe Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 font-medium">Ingredients</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="4"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 font-medium">Instructions</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="6"></textarea>
          </div>
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Submit</button>
        </form>
      </div>

      {/* Featured Recipes */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={RecipeImage1}
              alt="Featured Recipe 1"
              width={400}
              height={300}
              className="object-cover w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">Delicious Pasta</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={RecipeImage2}
              alt="Featured Recipe 2"
              width={400}
              height={300}
              className="object-cover w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">Yummy Burger</h3>
          </div>
        </div>
      </div>

      {/* Community Events */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Community Events</h2>
        <div className="flex flex-col items-center">
          <Image
            src={EventImage}
            alt="Community Event"
            width={600}
            height={400}
            className="object-cover w-full rounded-lg mb-4"
          />
          <p className="text-xl">
            Join us for our upcoming virtual cooking class on June 20th! Learn how to make traditional dishes from the comfort of your home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
