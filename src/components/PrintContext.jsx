import React, { createContext, useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";

// Create a context for the print function
const PrintContext = createContext();

// Create a custom hook to access the context
export const usePrintContext = () => useContext(PrintContext);

export const PrintProvider = ({ children }) => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My Resume",
    onAfterPrint: () => alert("Print complete!"),
  });

  return (
    <PrintContext.Provider value={{ handlePrint, resumeRef }}>
      {children}
    </PrintContext.Provider>
  );
};
