import { createContext,useContext } from "react";
import { Servicesdata } from "../assets/assets";
export const ServicesContext=createContext();
export const ServicesProvider = ({ children }) => {
  return (
    <ServicesContext.Provider value={{ Servicesdata }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);