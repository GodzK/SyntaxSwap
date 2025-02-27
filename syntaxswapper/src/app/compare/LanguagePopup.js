import { useState, useEffect } from "react";

export default function LanguagePopup({ title, onSelectLanguage, closePopup }) {
  const languages = ["JavaScript", "Python", "C++", "Java", "Go", "PHP", "C#", "TypeScript"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-black rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => onSelectLanguage(lang)}
              className="p-4 border rounded-lg hover:bg-gray-100 transition-colors hover:text-black text-white"
            >
              {lang}
            </button>
          ))}
        </div>
        <button
          className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
}