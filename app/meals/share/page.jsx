'use client';

import ImagePicker from "@/components/meals/image-picker";
import MealFormSubmit from "@/components/meals/meal-form-submit";
import { shareMeal } from "@/lib/action";
import React from "react";
import {useFormState} from 'react-dom';

const ShareMealPage = () => {
 const[state,formAction]=useFormState(shareMeal,{message:null});

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center py-10">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Share your <span className="text-yellow-300">favourite meal</span>
        </h1>
        <p className="text-xl text-white">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="bg-white p-8 rounded-lg shadow-lg mt-10 w-11/12 md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
        <form action={formAction}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out focus:border-blue-500"
              name="name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your email
            </label>
            <input
              type="email"
              id="creator_email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out focus:border-blue-500"
              name="creator_email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out focus:border-blue-500"
              name="title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="summary"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out focus:border-blue-500"
              name="summary"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="instructions"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out focus:border-blue-500"
              rows="4"
              name="instructions"
              required
            ></textarea>
          </div>
          <ImagePicker label="Your Image" name="image" />
          {state && <p className="mt-4 text-red-500">{state.message}</p>}
          <div className="flex items-center justify-center mt-6">
            <MealFormSubmit />
          </div>
        </form>
      </main>
    </div>
  );
};

export default ShareMealPage;
