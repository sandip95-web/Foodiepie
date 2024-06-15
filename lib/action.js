"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/dist/server/api-utils";

export const shareMeal = async (prevData, formData) => {
  // Get form data
  const title = formData.get("title");
  const creator = formData.get("name");
  const summary = formData.get("summary");
  const creator_email = formData.get("creator_email");
  const instructions = formData.get("instructions");
  const image = formData.get("image");

  // Validation
  if (
    !title.trim() ||
    !creator.trim() ||
    !summary.trim() ||
    !creator_email.trim() ||
    !instructions.trim() ||
    !image ||
    creator_email.trim() === "" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(creator_email) ||
    formData.get("image").size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  // If all validations pass, create the meal object
  const meal = {
    title,
    creator,
    summary,
    creator_email,
    instructions,
    image,
  };

  // Save the meal
  await saveMeal(meal);
  revalidatePath("/meals")
  // Redirect to the meals page after saving
  redirect("/meals");
};
