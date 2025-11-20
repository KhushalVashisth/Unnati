import React from "react";
import { Slab } from "react-loading-indicators";
const Loader = () => {
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Slab speedPlus="2" color={["#1d497a", "#2761a3", "#317acc", "#5994d7"]} />
    </div>
  );
};

export default Loader;
