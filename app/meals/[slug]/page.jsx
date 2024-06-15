import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";


export const generateMetadata=async({params})=>{
  const meal = getMeal(params.slug);
  
  if(!meal){
    notFound();
  }
  return{
    title:meal.title,
    description:meal.summary
  }
}

const MealDetailPage = ({ params }) => {
  const meal = getMeal(params.slug);

 
  const formattedInstructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white p-6">
            <h1 className="text-3xl font-bold">{meal.title}</h1>
            <p className="text-sm">
              by{" "}
              <a href={`mailto:${meal.creator_email}`} className="underline">
                {meal.creator}
              </a>
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-lg mb-4">{meal.summary}</p>
          <div
            className="text-sm text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedInstructions }}
          />
        </div>
        <div className="bg-gray-100 py-4 px-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-xs text-gray-600">
            For more delicious recipes, visit our website.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default MealDetailPage;
