'use client';

import React from 'react'
import {useFormStatus} from 'react-dom'

const MealFormSubmit = () => {
    const {pending} =useFormStatus();
  return (
   <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"     disabled={pending}>
    {pending ? "Submitting..." : 'Share Meal'}
   </button>
  )
}

export default MealFormSubmit
