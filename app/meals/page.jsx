import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import React, { Suspense } from "react";



export const metadata = {
  title: "All Meals",
  description: "Browse All Meals Share By Our Community",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealPage = () => {
  return (
    <div className="p-4">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 p-8 text-center text-white max-w-6xl mx-auto rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          Delicious Meals, Created with Love
        </h1>
        <p className="text-lg mb-6">
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link
            href="/meals/share"
            className="inline-block bg-white text-green-500 font-semibold py-2 px-4 rounded hover:bg-green-500 hover:text-white transition duration-300"
          >
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className="p-8 max-w-7xl mx-auto">
        <Suspense
          fallback={
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50">
              <div className="text-4xl font-bold text-gray-800 animate-pulse">
                Loading...
              </div>
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </div>
  );
};

export default MealPage;
