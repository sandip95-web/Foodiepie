import React from "react";
import Link from "next/link";
import Image from "next/image";

const MealItem = ({
  title,
  slug,
  summary,
  image,
  creator,
}) => {
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          className="object-cover"
          src={image}
          alt={title}
          layout="fill"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {truncateText(summary, 100)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {creator}
        </span>
        <Link
          href={`/meals/${slug}`}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
