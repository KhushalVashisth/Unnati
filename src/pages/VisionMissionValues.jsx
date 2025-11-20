// VisionMissionValues.jsx
import React from "react";
import { assets } from "../assets/assets";

/** Small binder-clip + string decoration */
const Hanger = () => (
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
    {/* string */}
    <div className="h-10 w-[2px] bg-gray-300" />
    {/* clip */}
    <div className="w-10 h-4 bg-gray-900 rounded-t-sm relative">
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-gray-700 rounded-sm" />
    </div>
  </div>
);

/** Reusable poster shell */
const Poster = ({ bg = "bg-yellow-400", children, bordered = false }) => (
  <div className="relative">
    <Hanger />
    <div
      className={[
        "rounded-3xl p-10 shadow-xl min-h-[520px] flex flex-col justify-between",
        bg,
        bordered ? "border border-gray-200" : "",
      ].join(" ")}
    >
      {children}
    </div>
  </div>
);


export default function VisionMissionValues() {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* VISION */}
          <Poster bg="bg-red-400">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold tracking-wide text-gray-900">
                OUR VISION
              </h3>
              <p className="mt-6 text-gray-900/90 text-md leading-relaxed">
                “To empower every child to reach their fullest potential by providing
                compassionate, personalized, and innovative therapy services that support
                their development, independence, and confidence — one milestone at a time.”
              </p>
              <img
  src={assets.vision_img}  
  alt="Our Vision"
  className="w-44 mx-auto mt-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
/>

            </div>
          </Poster>

          {/* MISSION */}
          <Poster bg="bg-white" bordered>
            <div className="text-center">
              <h3 className="text-2xl font-extrabold tracking-wide text-gray-900">
                OUR MISSION
              </h3>
              <p className="mt-6 text-gray-700 text-md leading-relaxed">
                “To provide high-quality, child-centered therapy through evidence-based and play-based approaches tailored to each child’s needs, family collaboration, and continuous improvement — creating joyful, meaningful progress. Our goal is to help children build essential skills and the confidence they deserve.”
              </p>
              <img
  src={assets.mission_img}
  alt="Our Mission"
  className="w-48 mx-auto mt-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
/>

            </div>
          </Poster>

          {/* CORE VALUES */}
          <Poster bg="bg-red-400">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold tracking-wide text-gray-900">
                OUR CORE VALUES
              </h3>
              <ul className="mt-6 text-lg text-gray-900 space-y-2 leading-relaxed">
                <li><span className="font-bold text-red-600">U</span>nderstanding🌱 </li>
                <li><span className="font-bold text-red-600">N</span>urturing💖</li>
                <li><span className="font-bold text-red-600">N</span>avigating🧭</li>
                <li><span className="font-bold text-red-600">A</span>bility🌟</li>
                <li><span className="font-bold text-red-600">T</span>herapy👐 </li>
                <li><span className="font-bold text-red-600">I</span>ndependence🕊</li>
              </ul>
              <img
  src={assets.values_img}
  alt="Our Core Values"
  className="w-44 mx-auto mt-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
/>

            </div>
          </Poster>
        </div>

        {/* subtle drop shadow backdrop like the reference wall */}
        <div className="mt-14 mx-auto h-8 max-w-5xl rounded-full bg-gray-300/40 blur-md" />
      </div>
    </div>
  );
}