"use client";
import React, { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const [isImagePicked, setIsImagePicked] = useState(false);
  const imageInput = useRef();

  const handleClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      setIsImagePicked(false);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
      setIsImagePicked(true);
    };
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        className="hidden"
        ref={imageInput}
        onChange={handleImageChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Pick an Image
      </button>
      {!isImagePicked && (
        <p className="text-red-500 text-sm mt-2">No image selected</p>
      )}
      {pickedImage && (
        <div className="mt-4">
          <img
            src={pickedImage}
            alt="Selected"
            className="max-w-full h-auto rounded border border-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
  