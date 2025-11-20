// src/Components/WhatsappButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex items-center gap-2">
      {/* Notification Bubble */}
      <span className="bg-white text-gray-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-lg shadow-md animate-bounce">
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919211394908"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        {/* Responsive size: mobile 24px, desktop 30px */}
        <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
};

export default WhatsappButton;
