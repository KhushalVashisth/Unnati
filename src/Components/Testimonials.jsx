import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets"; // Array of objects: { name, quote }


// Helper to get initials
const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  const lastTwo = parts.slice(-2);
  return lastTwo.map((n) => n[0]).join("").toUpperCase();
};
const colors = [
  "bg-pink-500",
  "bg-purple-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-rose-500",
];

const Testimonials = () => {
  return(
    <div>
  <     div className='text-center py-8 text-3xl'>
                <Title text1={' TESTIMONIALS  '} text2={'🗣️'} />
                
            </div>
    <div className="w-full min-h-screen flex flex-col items-center py-10 px-2 bg-gradient-to-br from-pink-100 to-gray-100">
      
    <div className="mb-2 text-center">
      
      <h1 className="text-4xl font-extrabold mb-2">Healing Stories That Inspire!</h1>
      <p className="text-gray-600">
        See how our care transforms lives every day ✨

      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
      {testimonials.map((t, i) => (
        <div
        key={i}
          className="bg-white rounded-2xl shadow-lg p-6 relative flex flex-col min-h-[210px]"
        >
          <button className="absolute right-4 top-4 text-2xl text-gray-300 hover:text-gray-500 focus:outline-none">
            ×
          </button>
          <div className="flex items-center gap-4 mb-4">
            {t.image ? (
              <img
              src={t.image}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
              />
            ) : (
              <span
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  colors[i % colors.length]
                }`}
              >
                {getInitials(t.name)}
              </span>
            )}
            <div>
              <div className="font-semibold text-gray-900 leading-tight">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.username}</div>
            </div>
          </div>
          <div className="text-gray-700 text-base">
            {t.quote}
          </div>
        </div>
      ))}
    </div>
  </div>
              </div>
    );
};

export default Testimonials;
