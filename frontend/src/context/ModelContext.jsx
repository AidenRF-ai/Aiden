import { createContext, useContext, useState } from "react";

const ModelContext = createContext();

export function ModelProvider({ children }) {
  const [model, setModel] = useState("gpt");

  return (
    <ModelContext.Provider value={{ model, setModel }}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  return useContext(ModelContext);
}
